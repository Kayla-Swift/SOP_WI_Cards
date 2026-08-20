const fs = require("fs");
const path = require("path");
const vm = require("vm");
const QRCode = require("qrcode");

const repositoryRoot = path.resolve(__dirname, "..");
const siteUrl = "https://swiftmedicalorg.github.io/SOP_WI_Cards/";
const robotoRegularFont = fs.readFileSync(path.join(repositoryRoot, "assets", "fonts", "Roboto-Regular.ttf")).toString("base64");
const robotoBlackFont = fs.readFileSync(path.join(repositoryRoot, "assets", "fonts", "Roboto-Black.ttf")).toString("base64");
const legacySetKeys = [
  "sop-2384",
  "sop-33",
  "sop-34",
  "sop-35",
  "sop-37",
  "sop-39",
  "sop-41",
  "tmp-2575",
  "wi-1959",
  "wi-196",
  "wi-2130",
  "wi-222",
  "wi-70",
  "wi-74",
  "wi-91",
];
const multiDocumentDecks = {
  "reference-wis-external-healx-production": {
    documentLabel: "WI 2731, WI 2732\nWI 2737",
    title: "External HealX Manufacturing WIs",
  },
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapText(text, maximumLength) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const nextLine = line ? `${line} ${word}` : word;
    if (nextLine.length > maximumLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  }

  if (line) {
    lines.push(line);
  }

  return lines;
}

function loadCardSet(filePath) {
  const context = { exports: {}, module: { exports: {} }, window: {} };
  const source = fs.readFileSync(filePath, "utf8");
  const executableSource = source.replace(/export\s+default\s+cards;?/, "");
  vm.runInNewContext(executableSource, context, { filename: filePath });
  const cardSets = context.window.sopCardSets || {};
  const [setKey] = Object.keys(cardSets);
  if (setKey) {
    return { setKey, deck: cardSets[setKey] };
  }

  const legacyContext = {};
  const legacySource = executableSource
    .replace(/module\.exports\s*=\s*cards;?/, "")
  vm.runInNewContext(`${legacySource}\nthis.legacyCards = cards;`, legacyContext, { filename: filePath });
  const legacyCards = legacyContext.legacyCards;
  if (!Array.isArray(legacyCards) || legacyCards.length === 0) {
    return null;
  }

  const titleCard = legacyCards[0] || {};
  const heading = String(titleCard.title || "").match(/^([A-Za-z]+)\s*(.*)$/) || [];
  const buttonCard = legacyCards.find(function (card) {
    return card.type === "button";
  }) || {};
  const documentUrl = buttonCard.button && typeof buttonCard.button === "object"
    ? buttonCard.button.url
    : buttonCard.target;

  return {
    setKey: path.basename(path.dirname(filePath)),
    deck: {
      documentType: (heading[1] || "Document").toUpperCase(),
      documentNumber: heading[2] || "",
      documentTitle: titleCard.description || titleCard.title || path.basename(path.dirname(filePath)),
      documentUrl,
    },
  };
}

async function createQrImage({ documentLabel, outputPath, setKey, title }) {
  const url = `${siteUrl}?set=${encodeURIComponent(setKey)}`;
  const qrSvg = await QRCode.toString(url, { errorCorrectionLevel: "M", margin: 0, type: "svg" });
  const titleLines = wrapText(`${documentLabel.replace(":", " ")}: ${title}`, 38);
  const titleMarkup = titleLines
    .map((line, index) => `<tspan x="400" dy="${index ? 42 : 0}">${escapeXml(line)}</tspan>`)
    .join("");

  const image = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" role="img" aria-label="QR code for ${escapeXml(documentLabel)} ${escapeXml(title)}">
  <style>@font-face { font-family: 'Roboto'; font-style: normal; font-weight: 400; src: url(data:font/ttf;base64,${robotoRegularFont}) format('truetype'); } @font-face { font-family: 'Roboto'; font-style: normal; font-weight: 900; src: url(data:font/ttf;base64,${robotoBlackFont}) format('truetype'); } .brand { font-family: Roboto, sans-serif; font-size: 58px; font-weight: 900; letter-spacing: 18px; fill: #29292d; text-anchor: middle; } .title { font-family: Roboto, sans-serif; font-size: 36px; font-weight: 400; fill: #000; text-anchor: middle; }</style>
  <rect width="800" height="800" fill="#fff"/>
  <text class="brand" x="400" y="90" font-family="Roboto" font-size="58" font-weight="900" letter-spacing="18">SWIFT</text>
  <text class="title" y="190">${titleMarkup}</text>
  ${qrSvg.replace("<svg", '<svg x="175" y="270" width="450" height="450"')}
</svg>\n`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, image);
}

async function createSectionCodes() {
  const indexHtml = fs.readFileSync(path.join(repositoryRoot, "index.html"), "utf8");
  const requestedSetKey = process.env.QR_SET;
  const activeCardFiles = [...indexHtml.matchAll(/src="\.\/(sections\/[^\"]+\/cards-data\.js)"/g)]
    .map((match) => match[1]);
  const legacyCardFiles = legacySetKeys.map(function (setKey) {
    return `sections/${setKey}/cards-data.js`;
  });
  const cardFiles = [...new Set([...activeCardFiles, ...legacyCardFiles])]
    .filter((relativeFilePath) => !requestedSetKey || relativeFilePath.includes(`/${requestedSetKey}/`));

  for (const relativeFilePath of cardFiles) {
    const filePath = path.join(repositoryRoot, relativeFilePath);
    const cardSet = loadCardSet(filePath);
    if (!cardSet) {
      continue;
    }

    const { deck, setKey } = cardSet;
    const documentLabel = [deck.documentType, deck.documentNumber].filter(Boolean).join(":");
    await createQrImage({
      documentLabel,
      outputPath: path.join(path.dirname(filePath), "qr-code.svg"),
      setKey,
      title: deck.documentTitle,
    });
  }
}

async function createMultiDocumentCodes() {
  for (const [setKey, details] of Object.entries(multiDocumentDecks)) {
    await createQrImage({
      ...details,
      outputPath: path.join(repositoryRoot, "sections", setKey, "qr-code.svg"),
      setKey,
    });
  }
}

async function main() {
  await createSectionCodes();
  await createMultiDocumentCodes();
}

main();