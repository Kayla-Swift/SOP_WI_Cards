(function () {
  const legacyDecks = [
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

  window.sopCardSets = window.sopCardSets || {};

  function loadLegacyCards(setKey) {
    const request = new XMLHttpRequest();
    request.open("GET", `./sections/${setKey}/cards-data.js`, false);
    request.send();

    if (request.status !== 0 && (request.status < 200 || request.status >= 300)) {
      return null;
    }

    const source = request.responseText
      .replace(/module\.exports\s*=\s*cards;?/, "")
      .replace(/export\s+default\s+cards;?/, "");

    return new Function(`${source}\nreturn cards;`)();
  }

  function convertCards(setKey, legacyCards) {
    const titleCard = legacyCards[0] || {};
    const heading = String(titleCard.title || setKey).match(/^([A-Za-z]+)\s*(.*)$/) || [];
    const documentType = (heading[1] || "Document").toUpperCase();
    const documentNumber = heading[2] || "";
    const documentUrl = (legacyCards.find(function (card) {
      return card.type === "button";
    }) || {}).button;
    const buttonUrl = documentUrl && typeof documentUrl === "object"
      ? documentUrl.url
      : (legacyCards.find(function (card) {
          return card.type === "button";
        }) || {}).target;

    return {
      documentType,
      documentNumber,
      documentTitle: titleCard.description || titleCard.title || setKey,
      documentUrl: buttonUrl,
      linkLabel: "Open document",
      cards: legacyCards.map(function (card, index) {
        const mediaSource = card.imageUrl || card.image;
        const mappedCard = {
          tag: index === 0 ? "Title" : card.type === "quiz" ? "Check" : "Reference",
          title: card.title || "",
          summary: card.description || "",
        };

        if (card.type === "button" && buttonUrl) {
          mappedCard.media = [{ type: "button", src: buttonUrl, buttonLabel: "Open document" }];
        } else if (mediaSource) {
          mappedCard.media = [{ type: "image", src: mediaSource, alt: card.title || "Document reference" }];
        }

        if (card.type === "quiz" && Array.isArray(card.options)) {
          const correctIndex = card.options.findIndex(function (option) {
            return option.correct;
          });
          mappedCard.question = {
            prompt: card.title || "Check your understanding",
            choices: card.options.map(function (option, optionIndex) {
              return { label: option.text || "", value: String(optionIndex) };
            }),
            correctAnswer: String(correctIndex),
            correctMessage: card.comment || "Correct.",
            incorrectMessage: card.comment || "Review the document and try again.",
          };
        }

        return mappedCard;
      }),
    };
  }

  legacyDecks.forEach(function (setKey) {
    const legacyCards = loadLegacyCards(setKey);
    if (Array.isArray(legacyCards) && legacyCards.length) {
      window.sopCardSets[setKey] = convertCards(setKey, legacyCards);
    }
  });
})();