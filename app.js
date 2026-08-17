(function () {
  const deck = window.sopDeck;

  if (!deck || !Array.isArray(deck.cards) || deck.cards.length === 0) {
    return;
  }

  const cardElement = document.getElementById("learning-card");
  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");
  const dotsElement = document.getElementById("card-dots");
  const previousPeekElement = document.getElementById("previous-peek");
  const nextPeekElement = document.getElementById("next-peek");

  const titleElement = document.getElementById("deck-title");
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

  let currentIndex = 0;
  let animationDirection = "";
  let pointerStartX = null;
  let pointerDragging = false;

  applyTheme(deck.theme || {});
  titleElement.textContent = deck.title || "SOP Learning Cards";
  descriptionElement.textContent = deck.description || "";

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
    const card = deck.cards[currentIndex];

    console.log('Rendering card', currentIndex, card && card.title);

    counterElement.textContent = `${currentIndex + 1} / ${deck.cards.length}`;

    const tag = card.tag || `Card ${currentIndex + 1}`;
    cardTagElement.textContent = tag;
    frontTagElement.textContent = tag;
    backTagElement.textContent = tag;

    frontTitleElement.textContent = card.title || "";
    backTitleElement.textContent = card.title || "";
    // Show summary and fall back to body on the front so content isn't hidden
    frontSummaryElement.textContent = card.summary
      ? card.summary + (card.body ? "\n\n" + card.body : "")
      : card.body || "";
    backBodyElement.textContent = card.body || card.summary || "";

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

  function renderFrontAction(card) {
    frontActionElement.innerHTML = "";
    const linkMedia = (card.media || []).find(function (mediaItem) {
      return mediaItem.type === "button";
    });

    if (!linkMedia) return;

    const source = getAllowedMediaSource(linkMedia.src);
    if (!source) return;

    const link = document.createElement("a");
    link.className = "front-wi-button";
    link.href = source;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = linkMedia.buttonLabel || "Open full WI";
    frontActionElement.appendChild(link);
  }

  function renderCheckQuestion(card) {
    checkQuestionElement.innerHTML = "";
    const question = card.question;
    if (!question) return;

    const prompt = document.createElement("p");
    prompt.className = "question-prompt";
    prompt.textContent = question.prompt || "Check your understanding";
    checkQuestionElement.appendChild(prompt);

    const choices = document.createElement("div");
    choices.className = "question-choices";
    (question.choices || []).forEach(function (choice) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "question-choice";
      button.textContent = choice.label;
      button.addEventListener("click", function () {
        choices.querySelectorAll("button").forEach(function (choiceButton) {
          choiceButton.disabled = true;
        });

        const hasCorrectAnswer = question.correctAnswer !== undefined;
        const isCorrect = hasCorrectAnswer && choice.value === question.correctAnswer;
        if (!hasCorrectAnswer) {
          button.classList.add("is-selected");
          feedback.textContent = question.thanksMessage || "Thanks for your response.";
          feedback.className = "question-feedback is-selected";
          return;
        }

        button.classList.add(isCorrect ? "is-correct" : "is-incorrect");
        if (!isCorrect) {
          choices.querySelectorAll("button").forEach(function (choiceButton) {
            const matchingChoice = (question.choices || []).find(function (item) {
              return item.label === choiceButton.textContent;
            });
            if (matchingChoice && matchingChoice.value === question.correctAnswer) {
              choiceButton.classList.add("is-correct");
            }
          });
        }
        feedback.textContent = isCorrect
          ? question.correctMessage || "Correct"
          : question.incorrectMessage || "Try again on the next card";
        feedback.className = `question-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
      });
      choices.appendChild(button);
    });
    checkQuestionElement.appendChild(choices);

    const feedback = document.createElement("p");
    feedback.className = "question-feedback";
    feedback.setAttribute("aria-live", "polite");
    checkQuestionElement.appendChild(feedback);
  }

  function transitionTo(index, direction) {
    if (index < 0 || index >= deck.cards.length || index === currentIndex) {
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
    if (card.question) return;

    const image = (card.media || []).find(function (mediaItem) {
      return mediaItem.type === "image";
    });

    if (image) {
      const source = getAllowedMediaSource(image.src);
      if (source) {
        const imageElement = document.createElement("img");
        imageElement.src = source;
        imageElement.alt = image.alt || "";
        frontMediaElement.appendChild(imageElement);
      }
    }
  }

  function renderPeeks() {
    const previousCard = deck.cards[currentIndex - 1];
    const nextCard = deck.cards[currentIndex + 1];

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

    deck.cards.forEach(function (_, index) {
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
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === deck.cards.length - 1;
  }

  function next() {
    if (currentIndex === deck.cards.length - 1) return;
    transitionTo(currentIndex + 1, "next");
  }

  function previous() {
    if (currentIndex === 0) return;
    transitionTo(currentIndex - 1, "previous");
  }

  previousButton.addEventListener("click", function () {
    previous();
  });

  nextButton.addEventListener("click", function () {
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
      transitionTo(deck.cards.length - 1, "next");
    }
  });

  // Click zones: left = previous, right = next. On mobile, tap advances next.
  cardElement.addEventListener('click', function (event) {
    const tag = event.target && event.target.tagName;
    if (tag && ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'VIDEO', 'SOURCE', 'IFRAME'].includes(tag)) return;
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
    pointerStartX = event.clientX;
    pointerDragging = true;
    cardElement.classList.add("is-dragging");
    cardElement.setPointerCapture(event.pointerId);
  });

  cardElement.addEventListener("pointermove", function (event) {
    if (!pointerDragging || pointerStartX === null) return;
    const offset = event.clientX - pointerStartX;
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

  render();
})();
