# SOP_WI_Cards

A lightweight, editable SOP/WI learning card template inspired by swipe-based learning tools.

## Files

- `/home/runner/work/SOP_WI_Cards/SOP_WI_Cards/index.html` – app shell
- `/home/runner/work/SOP_WI_Cards/SOP_WI_Cards/styles.css` – responsive card layout and flip styling
- `/home/runner/work/SOP_WI_Cards/SOP_WI_Cards/app.js` – renders cards and handles navigation/flip behavior
- `/home/runner/work/SOP_WI_Cards/SOP_WI_Cards/cards-data.js` – manually editable content for each card set

## How to update the cards

1. Open `/home/runner/work/SOP_WI_Cards/SOP_WI_Cards/cards-data.js`.
2. Update the `deck` metadata (`title`, `description`, `theme`).
3. Add or edit entries in `cards`.
4. For each card, you can store:
   - `title`
   - `tag`
   - `summary`
   - `body`
   - `bullets`
   - `media`

### Media examples

```js
{
  type: "image",
  src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  alt: "Descriptive alt text",
  caption: "Optional image caption"
}
```

```js
{
  type: "video",
  format: "file",
  src: "https://www.w3schools.com/html/mov_bbb.mp4",
  poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  caption: "Optional video caption"
}
```

```js
{
  type: "video",
  format: "embed",
  src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title: "Embedded training video",
  caption: "Optional video caption"
}
```

## Running locally

This repository does not require a build step. Open `/home/runner/work/SOP_WI_Cards/SOP_WI_Cards/index.html` in a browser.
