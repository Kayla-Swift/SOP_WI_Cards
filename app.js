(function () {
  const deck = window.sopDeck;

  if (!deck || !Array.isArray(deck.cards) || deck.cards.length === 0) {
    return;
  }

  const cardElement = document.getElementById("learning-card");
  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");
  const dotsElement = document.getElementById("card-dots");

  const titleElement = document.getElementById("deck-title");
  const descriptionElement = document.getElementById("deck-description");
  const counterElement = document.getElementById("card-counter");
  const cardTagElement = document.getElementById("card-tag");
  const frontTagElement = document.getElementById("front-tag");
  const frontTitleElement = document.getElementById("front-title");
  const frontSummaryElement = document.getElementById("front-summary");
  const backTagElement = document.getElementById("back-tag");
  const backTitleElement = document.getElementById("back-title");
  const backBodyElement = document.getElementById("back-body");
  const bulletsElement = document.getElementById("back-bullets");
  const mediaGridElement = document.getElementById("media-grid");

  let currentIndex = 0;

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

    counterElement.textContent = `${currentIndex + 1} / ${deck.cards.length}`;

    const tag = card.tag || `Card ${currentIndex + 1}`;
    cardTagElement.textContent = tag;
    frontTagElement.textContent = tag;
    backTagElement.textContent = tag;

    frontTitleElement.textContent = card.title || "";
    backTitleElement.textContent = card.title || "";
    frontSummaryElement.textContent = card.summary || "";
    backBodyElement.textContent = card.body || "";

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

    renderDots();
    updateButtons();
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
    } else {
      const image = document.createElement("img");
      image.src = source;
      image.alt = mediaItem.alt || "";
      image.loading = "lazy";
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
        currentIndex = index;
        render();
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
    currentIndex += 1;
    render();
  }

  function previous() {
    if (currentIndex === 0) return;
    currentIndex -= 1;
    render();
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
      currentIndex = 0; render();
    }
    if (event.key === "End") {
      currentIndex = deck.cards.length - 1; render();
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

  // Touch/swipe handling
  let touchStartX = null;
  cardElement.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches[0]) touchStartX = e.touches[0].clientX;
  }, {passive: true});

  cardElement.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    const endX = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX) || null;
    if (endX === null) { touchStartX = null; return; }
    const delta = endX - touchStartX;
    touchStartX = null;
    const threshold = 40;
    if (Math.abs(delta) > threshold) {
      if (delta < 0) next(); else previous();
    } else {
      // short tap
      next();
    }
  }, {passive: true});

  render();
})();
