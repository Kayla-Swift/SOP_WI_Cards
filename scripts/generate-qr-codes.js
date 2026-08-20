const fs = require("fs");
const path = require("path");
const vm = require("vm");
const QRCode = require("qrcode");

const repositoryRoot = path.resolve(__dirname, "..");
const siteUrl = "https://kayla-swift.github.io/SOP_WI_Cards/";
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
  vm.runInNewContext(fs.readFileSync(filePath, "utf8"), context, { filename: filePath });
  const cardSets = context.window.sopCardSets || {};
  const [setKey] = Object.keys(cardSets);
  return setKey ? { setKey, deck: cardSets[setKey] } : null;
}

async function createQrImage({ documentLabel, outputPath, setKey, title }) {
  const url = `${siteUrl}?set=${encodeURIComponent(setKey)}`;
  const qrSvg = await QRCode.toString(url, { errorCorrectionLevel: "M", margin: 0, type: "svg" });
  const titleLines = wrapText(title, 38);
  const labelLines = documentLabel.split("\n");
  const labelMarkup = labelLines
    .map((line, index) => `<tspan x="615" dy="${index ? 30 : 0}">${escapeXml(line)}</tspan>`)
    .join("");
  const titleMarkup = titleLines
    .map((line, index) => `<tspan x="400" dy="${index ? 42 : 0}">${escapeXml(line)}</tspan>`)
    .join("");

  const image = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" role="img" aria-label="QR code for ${escapeXml(documentLabel)} ${escapeXml(title)}">
  <style>@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&amp;family=Roboto:wght@400;500;600&amp;display=swap'); .brand { font-family: 'Barlow Condensed', sans-serif; font-size: 54px; font-weight: 800; letter-spacing: 15px; fill: #29292d; } .document { font-family: 'Barlow Condensed', sans-serif; font-size: 33px; font-weight: 700; fill: #29292d; text-anchor: middle; } .title { font-family: Roboto, sans-serif; font-size: 30px; font-weight: 500; fill: #000; text-anchor: middle; }</style>
  <rect width="800" height="800" fill="#fff"/>
  <text class="brand" x="48" y="78">SWIFT</text>
  <circle cx="326" cy="58" r="24" fill="#333338"/>
  <path d="M337 43h-12l-8 16h11l-6 14 19-22h-11z" fill="#fff"/>
  <text class="document" y="68">${labelMarkup}</text>
  <text class="title" y="180">${titleMarkup}</text>
  ${qrSvg.replace("<svg", '<svg x="150" y="235" width="500" height="500"')}
</svg>\n`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, image);
}

async function createSectionCodes() {
  const indexHtml = fs.readFileSync(path.join(repositoryRoot, "index.html"), "utf8");
  const cardFiles = [...indexHtml.matchAll(/src="\.\/(sections\/[^\"]+\/cards-data\.js)"/g)]
    .map((match) => match[1]);

  for (const relativeFilePath of cardFiles) {
    const filePath = path.join(repositoryRoot, relativeFilePath);
    const cardSet = loadCardSet(filePath);
    if (!cardSet) {
      continue;
    }

    const { deck, setKey } = cardSet;
    const documentLabel = [deck.documentType, deck.documentNumber].filter(Boolean).join(": ");
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