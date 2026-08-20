(function () {
  const cardSets = window.sopCardSets || {};
  const setKeys = Object.keys(cardSets);
  const requestedSet = new URLSearchParams(window.location.search).get("set");
  let currentDeck = cardSets[requestedSet] || cardSets[setKeys[0]];
  let visibleCards = [];

  if (!currentDeck || !Array.isArray(currentDeck.cards) || currentDeck.cards.length === 0) {
    return;
  }

  const cardElement = document.getElementById("learning-card");
  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");
  const restartButton = document.getElementById("restart-button");
  const dotsElement = document.getElementById("card-dots");
  const previousPeekElement = document.getElementById("previous-peek");
  const nextPeekElement = document.getElementById("next-peek");

  const titleElement = document.getElementById("deck-title");
  const linkElement = document.getElementById("deck-link");
  const ctaElement = document.getElementById("deck-cta");
  const descriptionElement = document.getElementById("deck-description");
  const counterElement = document.getElementById("card-counter");
  const cardTagElement = document.getElementById("card-tag");
  const frontTagElement = document.getElementById("front-tag");
  const frontTitleElement = document.getElementById("front-title");
  const frontSummaryElement = document.getElementById("front-summary");
  const frontActionElement = document.getElementById("front-action");
  const checkQuestionElement = document.getElementById("check-question");
  const backTagElement = document.getElementById("back-tag");
  const backTitleElement = document.getElementById("back-title");
  const backBodyElement = document.getElementById("back-body");
  const bulletsElement = document.getElementById("back-bullets");
  const mediaGridElement = document.getElementById("media-grid");
  const previousNavButton = document.getElementById("previous-nav");
  const nextNavButton = document.getElementById("next-nav");

  let currentIndex = 0;
  let animationDirection = "";
  let pointerStartX = null;
  let pointerDragging = false;
  let quizPromptShown = false;


  function applyDeck() {
    applyTheme(currentDeck.theme || {});
    renderDeckHeading();
    descriptionElement.textContent = currentDeck.description || "";
    visibleCards = currentDeck.cards.filter(function (card) {
      return card.type !== "title" && card.tag !== "Title";
    });
    currentIndex = 0;
    animationDirection = "";
    cardElement.classList.remove("is-moving-next", "is-moving-previous", "is-flipped");
    render();
  }

  function renderDeckHeading() {
    const heading = [
      currentDeck.documentType,
      currentDeck.documentNumber,
      currentDeck.documentTitle,
    ].filter(Boolean);

    titleElement.textContent = heading.length
      ? heading.join(" | ")
      : currentDeck.title || "SOP Learning Cards";

    const documentUrl = getAllowedMediaSource(currentDeck.documentUrl);
    if (documentUrl) {
      linkElement.href = documentUrl;
      ctaElement.textContent = currentDeck.linkLabel || "Click to Open in the DMS";
    } else {
      linkElement.removeAttribute("href");
      ctaElement.textContent = "";
    }
  }


  function applyTheme(theme) {
    const root = document.documentElement;

    if (theme.accent) {
      root.style.setProperty("--accent", theme.accent);
    }

    if (theme.surface) {
      root.style.setProperty("--surface", theme.surface);
    }

    if (theme.background) {
      root.style.setProperty("--background", theme.background);
    }

    if (theme.text) {
      root.style.setProperty("--text", theme.text);
    }
  }

  function render() {
    const card = visibleCards[currentIndex];
    quizPromptShown = false;

    console.log('Rendering card', currentIndex, card && card.title);

    counterElement.textContent = `${currentIndex + 1} / ${visibleCards.length}`;

    const tag = card.tag || `Card ${currentIndex + 1}`;
    cardTagElement.textContent = tag;
    frontTagElement.textContent = tag;
    backTagElement.textContent = tag;

    frontTitleElement.textContent = card.title || "";
    backTitleElement.textContent = card.title || "";
    // Suppress the front summary when it just repeats the quiz prompt shown below.
    const quizPrompt = card.question && card.question.prompt;
    const summaryRepeatsPrompt = Boolean(quizPrompt) && typeof card.summary === "string" &&
      card.summary.trim() === quizPrompt.trim();
    const frontSummary = summaryRepeatsPrompt ? "" : card.summary;
    // Show summary and fall back to body on the front so content isn't hidden
    const frontText = frontSummary
      ? frontSummary + (card.body ? "\n\n" + card.body : "")
      : card.body || "";
    renderLinkedText(frontSummaryElement, frontText, card.links);
    renderLinkedText(backBodyElement, card.body || card.summary || "", card.links);

    bulletsElement.innerHTML = "";
    (card.bullets || []).forEach(function (bullet) {
      const item = document.createElement("li");
      item.textContent = bullet;
      bulletsElement.appendChild(item);
    });

    mediaGridElement.innerHTML = "";
    (card.media || []).forEach(function (mediaItem) {
      mediaGridElement.appendChild(createMediaCard(mediaItem));
    });

    renderFrontMedia(card);
    renderFrontAction(card);
    renderCheckQuestion(card);

    renderDots();
    updateButtons();
    renderPeeks();

    if (animationDirection) {
      cardElement.classList.remove("is-moving-next", "is-moving-previous");
      void cardElement.offsetWidth;
      cardElement.classList.add(`is-moving-${animationDirection}`);
      cardElement.addEventListener(
        "animationend",
        function () {
          cardElement.classList.remove(
            "is-moving-next",
            "is-moving-previous"
          );
        },
        { once: true }
      );
      animationDirection = "";
    }
  }

  function renderLinkedText(element, text, links) {
    element.innerHTML = "";
    const validLinks = Array.isArray(links)
      ? links.filter(function (link) {
          return link && typeof link.text === "string" && getAllowedMediaSource(link.url);
        })
      : [];

    if (validLinks.length === 0) {
      element.textContent = text;
      return;
    }

    let remainingText = text;
    validLinks.forEach(function (link) {
      const linkIndex = remainingText.indexOf(link.text);
      if (linkIndex === -1) return;

      element.appendChild(document.createTextNode(remainingText.slice(0, linkIndex)));
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = link.text;
      element.appendChild(anchor);
      remainingText = remainingText.slice(linkIndex + link.text.length);
    });

    element.appendChild(document.createTextNode(remainingText));
  }

  function renderFrontAction(card) {
    frontActionElement.innerHTML = "";
    const linkMedia = (card.media || []).find(function (mediaItem) {
      return mediaItem.type === "button";
    });

    if (linkMedia) {
      const source = getAllowedMediaSource(linkMedia.src);
      if (source) {
        const link = document.createElement("a");
        link.className = "front-wi-button";
        link.href = source;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = linkMedia.buttonLabel || "Open full WI";
        frontActionElement.appendChild(link);
      }
    }

    (card.sectionButtons || []).forEach(function (sectionButton) {
      const targetIndex = visibleCards.findIndex(function (targetCard) {
        return targetCard.tag === sectionButton.targetTag;
      });
      if (targetIndex === -1) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "front-section-button";
      button.textContent = sectionButton.label;
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        transitionTo(
          targetIndex,
          targetIndex > currentIndex ? "next" : "previous"
        );
      });
      frontActionElement.appendChild(button);
    });
  }

  function renderCheckQuestion(card) {
    checkQuestionElement.innerHTML = "";
    const question = card.question;
    if (!question) return;

    const prompt = document.createElement("p");
    prompt.className = "question-prompt";
    prompt.textContent = question.prompt || "Check your understanding";
    checkQuestionElement.appendChild(prompt);

    const feedback = document.createElement("p");
    feedback.className = "question-feedback";
    feedback.setAttribute("aria-live", "polite");
    checkQuestionElement.appendChild(feedback);

    const choices = document.createElement("div");
    choices.className = "question-choices";
    const correctAnswers = question.correctAnswers ||
      (question.correctAnswer !== undefined ? [question.correctAnswer] : []);
    const hasCorrectAnswer = correctAnswers.length > 0;
    const isMultiSelect = correctAnswers.length > 1;
    const selectedValues = new Set();

    if (isMultiSelect) {
      const instruction = document.createElement("p");
      instruction.className = "question-instruction";
      instruction.textContent = "Multiple select: choose all that apply.";
      checkQuestionElement.appendChild(instruction);
      choices.classList.add("is-multi-select");
    }

    (question.choices || []).forEach(function (choice) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "question-choice";

      const label = document.createElement("span");
      label.className = "question-choice-label";
      label.textContent = choice.label;
      button.appendChild(label);

      button.addEventListener("click", function (event) {
        event.stopPropagation();
        if (choices.classList.contains("is-answered")) return;

        if (isMultiSelect) {
          if (selectedValues.has(choice.value)) {
            selectedValues.delete(choice.value);
            button.classList.remove("is-selected");
          } else {
            selectedValues.add(choice.value);
            button.classList.add("is-selected");
          }
          return;
        }

        choices.classList.add("is-answered");
        removeQuizPrompt();

        const isCorrect = hasCorrectAnswer &&
          selectedValues.size > 0
          ? selectedValues.size === correctAnswers.length &&
            correctAnswers.every(function (answer) { return selectedValues.has(answer); })
          : correctAnswers.includes(choice.value);

        if (!hasCorrectAnswer) {
          button.classList.add("is-selected");
          feedback.textContent = question.thanksMessage || "Thanks for your response.";
          feedback.className = "question-feedback is-selected";
          return;
        }

        (question.choices || []).forEach(function (item, index) {
          const choiceButton = choices.children[index];
          choiceButton.disabled = true;
          choiceButton.classList.add(
            correctAnswers.includes(item.value) ? "is-correct" : "is-incorrect"
          );
        });

        feedback.textContent =
          question.comment ||
          (isCorrect
            ? question.correctMessage || "Correct"
            : question.incorrectMessage || "Review the correct answer above.");
        feedback.className = `question-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
      });

      choices.appendChild(button);
    });

    checkQuestionElement.appendChild(choices);

    if (isMultiSelect) {
      const submitButton = document.createElement("button");
      submitButton.type = "button";
      submitButton.className = "question-submit";
      submitButton.textContent = "Check answers";
      submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        if (selectedValues.size === 0 || choices.classList.contains("is-answered")) return;
        choices.classList.add("is-answered");
        removeQuizPrompt();
        (question.choices || []).forEach(function (item, index) {
          const choiceButton = choices.children[index];
          choiceButton.disabled = true;
          choiceButton.classList.remove("is-selected");
          choiceButton.classList.add(
            correctAnswers.includes(item.value) ? "is-correct" : "is-incorrect"
          );
        });
        const isCorrect = selectedValues.size === correctAnswers.length &&
          correctAnswers.every(function (answer) { return selectedValues.has(answer); });
        feedback.textContent = question.comment ||
          (isCorrect ? question.correctMessage || "Correct" : "Review the correct answers above.");
        feedback.className = `question-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
        submitButton.disabled = true;
      });
      checkQuestionElement.appendChild(submitButton);
    }
  }

  // On the first forward attempt from an unanswered quiz card, nudge the user to try it.
  function isQuizPending() {
    const card = visibleCards[currentIndex];
    if (!card || !card.question) return false;
    const choices = checkQuestionElement.querySelector(".question-choices");
    return Boolean(choices) && !choices.classList.contains("is-answered");
  }

  function shouldPromptForQuiz() {
    if (!isQuizPending()) return false;
    if (quizPromptShown) return false;
    quizPromptShown = true;
    showQuizPrompt();
    return true;
  }

  function showQuizPrompt() {
    let note = checkQuestionElement.querySelector(".question-nudge");
    if (!note) {
      note = document.createElement("p");
      note.className = "question-nudge";
      note.setAttribute("role", "status");
      note.setAttribute("aria-live", "assertive");
      checkQuestionElement.appendChild(note);
    }
    note.textContent = "Try the quiz before continuing \u2014 tap or swipe again to skip.";
    checkQuestionElement.classList.remove("is-nudging");
    void checkQuestionElement.offsetWidth;
    checkQuestionElement.classList.add("is-nudging");
  }

  function removeQuizPrompt() {
    const note = checkQuestionElement.querySelector(".question-nudge");
    if (note) note.remove();
    checkQuestionElement.classList.remove("is-nudging");
  }

  function transitionTo(index, direction) {
    if (index < 0 || index >= visibleCards.length || index === currentIndex) {
      return;
    }

    if (index > currentIndex && shouldPromptForQuiz()) {
      return;
    }

    const outgoingCard = cardElement.cloneNode(true);
    outgoingCard.removeAttribute("id");
    outgoingCard.classList.remove("is-moving-next", "is-moving-previous");
    outgoingCard.classList.add(`card-outgoing-${direction}`);
    cardElement.parentElement.appendChild(outgoingCard);

    animationDirection = direction;
    currentIndex = index;
    render();

    outgoingCard.addEventListener("animationend", function () {
      outgoingCard.remove();
    }, { once: true });
  }

  function renderFrontMedia(card) {
    let frontMediaElement = document.getElementById("front-media");

    if (!frontMediaElement) {
      frontMediaElement = document.createElement("div");
      frontMediaElement.id = "front-media";
      frontMediaElement.className = "front-media";
      document.querySelector(".card-front").appendChild(frontMediaElement);
    }

    frontMediaElement.innerHTML = "";
    frontMediaElement.style.removeProperty("--front-media-height");
    frontMediaElement.style.removeProperty("--front-media-fit");
    if (card.question) return;

    const image = (card.media || []).find(function (mediaItem) {
      return mediaItem.type === "image";
    });

    if (image) {
      const source = getAllowedMediaSource(image.src);
      if (source) {
        const height = image.height || currentDeck.mediaHeight;
        const fit = image.fit || currentDeck.mediaFit;
        if (height) {
          frontMediaElement.style.setProperty("--front-media-height", height);
        }
        if (fit) {
          frontMediaElement.style.setProperty("--front-media-fit", fit);
        }

        const imageElement = document.createElement("img");
        imageElement.src = source;
        imageElement.alt = image.alt || "";
        imageElement.loading = "lazy";
        imageElement.addEventListener("error", function () {
          const fallbackSource = getAllowedMediaSource(image.fallbackSrc);
          if (fallbackSource && imageElement.src !== fallbackSource) {
            imageElement.src = fallbackSource;
          }
        });
        frontMediaElement.appendChild(imageElement);
      }
    }
  }

  function renderPeeks() {
    const previousCard = visibleCards[currentIndex - 1];
    const nextCard = visibleCards[currentIndex + 1];

    previousPeekElement.innerHTML = previousCard
      ? `<strong>${previousCard.title || "Previous card"}</strong><span>${previousCard.summary || ""}</span>`
      : "";
    nextPeekElement.innerHTML = nextCard
      ? `<strong>${nextCard.title || "Next card"}</strong><span>${nextCard.summary || ""}</span>`
      : "";
    previousPeekElement.classList.toggle("is-visible", Boolean(previousCard));
    nextPeekElement.classList.toggle("is-visible", Boolean(nextCard));
  }

  function createMediaCard(mediaItem) {
    const wrapper = document.createElement("figure");
    wrapper.className = "media-card";
    const source = getAllowedMediaSource(mediaItem.src);

    if (!source) {
      const fallback = document.createElement("div");
      fallback.className = "media-fallback";
      fallback.textContent = "Unsupported media source";
      wrapper.appendChild(fallback);
    } else if (mediaItem.type === "button") {
      const link = document.createElement("a");
      link.className = "sop-link-button";
      link.href = source;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = mediaItem.caption || mediaItem.title || "Open SOP";
      wrapper.appendChild(link);
    } else if (mediaItem.type === "video" && mediaItem.format === "embed") {
      const iframe = document.createElement("iframe");
      iframe.src = source;
      iframe.title = mediaItem.title || "Embedded training video";
      iframe.loading = "lazy";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      wrapper.appendChild(iframe);
    } else if (mediaItem.type === "video") {
      const video = document.createElement("video");
      video.controls = true;
      video.preload = "metadata";
      if (mediaItem.poster) {
        video.poster = mediaItem.poster;
      }

      const mediaSource = document.createElement("source");
      mediaSource.src = source;
      mediaSource.type = mediaItem.mimeType || "video/mp4";
      video.appendChild(mediaSource);
      wrapper.appendChild(video);
    } else if (mediaItem.type === "audio") {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "metadata";
      audio.src = source;
      audio.setAttribute("aria-label", mediaItem.title || "Audio narration");
      wrapper.appendChild(audio);
    } else {
      const image = document.createElement("img");
      image.src = source;
      image.alt = mediaItem.alt || "";
      image.loading = "lazy";
      image.addEventListener("error", function () {
        const fallbackSource = getAllowedMediaSource(mediaItem.fallbackSrc);
        if (fallbackSource && image.src !== fallbackSource) {
          image.src = fallbackSource;
        }
      });
      if (mediaItem.type === "gif") {
        image.setAttribute("data-media-type", "gif");
      }
      wrapper.appendChild(image);
    }

    if (mediaItem.caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = mediaItem.caption;
      wrapper.appendChild(caption);
    }

    return wrapper;
  }

  function getAllowedMediaSource(value) {
    if (typeof value !== "string" || value.trim() === "") {
      return "";
    }

    if (/^(https?:)?\/\//i.test(value) || /^(\/|\.\/|\.\.\/)/.test(value)) {
      return value;
    }

    return "";
  }

  function renderDots() {
    dotsElement.innerHTML = "";

    visibleCards.forEach(function (_, index) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = index === currentIndex ? "dot is-active" : "dot";
      dot.setAttribute("aria-label", `Go to card ${index + 1}`);
      dot.addEventListener("click", function () {
        transitionTo(index, index > currentIndex ? "next" : "previous");
      });
      dotsElement.appendChild(dot);
    });
  }

  function updateButtons() {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === visibleCards.length - 1;

    previousButton.disabled = isFirst;
    nextButton.disabled = isLast;
    restartButton.disabled = isFirst;
    previousNavButton.disabled = isFirst;
    nextNavButton.disabled = isLast;
  }

  function next() {
    if (currentIndex === visibleCards.length - 1) return;
    transitionTo(currentIndex + 1, "next");
  }
  function previous() {
    if (currentIndex === 0) return;
    transitionTo(currentIndex - 1, "previous");
  }

  function restart() {
    if (currentIndex === 0) return;
    transitionTo(0, "previous");
  }

  restartButton.addEventListener("click", function () {
    restart();
  });

  previousButton.addEventListener("click", function () {
    previous();
  });

  nextButton.addEventListener("click", function () {
    next();
  });

  previousNavButton.addEventListener("click", function () {
    previous();
  });

  nextNavButton.addEventListener("click", function () {
    next();
  });

  document.addEventListener("keydown", function (event) {
    const activeTag = document.activeElement && document.activeElement.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;

    if (event.key === "ArrowLeft") previous();
    if (event.key === "ArrowRight") next();
    if (event.key === "Home") {
      transitionTo(0, "previous");
    }
    if (event.key === "End") {
      transitionTo(visibleCards.length - 1, "next");
    }
  });

  const interactiveSelector = "button, a, input, textarea, select, label, video, audio, iframe";

  function isInteractiveTarget(target) {
    return Boolean(target && target.closest && target.closest(interactiveSelector));
  }

  // Click zones: left = previous, right = next. On mobile, tap advances next.
  cardElement.addEventListener('click', function (event) {
    if (isInteractiveTarget(event.target)) return;
    if (mediaGridElement.contains(event.target)) return;

    const rect = cardElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const pct = x / rect.width;
    const isMobile = window.matchMedia('(max-width:640px)').matches;

    if (isMobile) {
      next();
      return;
    }

    if (pct < 0.4) previous();
    else if (pct > 0.6) next();
  });

  cardElement.addEventListener("pointerdown", function (event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (isInteractiveTarget(event.target)) return;
    pointerStartX = event.clientX;
    pointerDragging = true;
    cardElement.classList.add("is-dragging");
  });

  cardElement.addEventListener("pointermove", function (event) {
    if (!pointerDragging || pointerStartX === null) return;
    const offset = event.clientX - pointerStartX;
    // Capture only once the gesture is clearly a swipe so taps still reach buttons.
    if (Math.abs(offset) > 8 && !cardElement.hasPointerCapture(event.pointerId)) {
      cardElement.setPointerCapture(event.pointerId);
    }
    cardElement.style.setProperty("--drag-offset", `${offset}px`);
  });

  cardElement.addEventListener("pointerup", function (event) {
    if (!pointerDragging || pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;
    pointerStartX = null;
    pointerDragging = false;
    cardElement.classList.remove("is-dragging");
    cardElement.style.removeProperty("--drag-offset");
    if (Math.abs(delta) > 48) {
      if (delta < 0) next();
      else previous();
    }
  });

  cardElement.addEventListener("pointercancel", function () {
    pointerStartX = null;
    pointerDragging = false;
    cardElement.classList.remove("is-dragging");
    cardElement.style.removeProperty("--drag-offset");
  });

  applyDeck();
})();
