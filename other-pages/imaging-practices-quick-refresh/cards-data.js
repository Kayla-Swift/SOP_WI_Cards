window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["imaging-practices-quick-refresh"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Imaging Practices: Quick Refresh",
  description: "Fast reminders for clean, accurate wound imaging.",
  theme: {
    accent: "#5e698e",
    surface: "#ffffff",
    background: "#f2f5ff",
    text: "#283047",
  },
  cards: [
    {
      tag: "Title",
      title: "Imaging Practices: Quick Refresh",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Apply HealX to Skin",
      summary: "Place HealX on intact skin.",
      body: "Apply HealX parallel and close to the wound on intact skin.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/bc30f7d6-7bff-4877-af54-ae375b411a10",
          alt: "Apply HealX",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Zoom, Use Torch, and Fill Viewfinder box",
      summary: "Stay parallel and frame correctly.",
      body: "Use zoom and torch as needed. Stay parallel to the wound and take your image with the wound and HealX filling the viewfinder.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/a06ea2a3-2e8b-4283-b25d-75e86ade93ce",
          alt: "Viewfinder guidance",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Five Star Images",
      summary: "Meet all five image quality checks.",
      body: "Ensure your images meet each 5-star check: wound in focus, HealX placement on intact skin, appropriate HealX location, large and centered framing, and good lighting.",
    },
    {
      tag: "Quiz",
      title: "Imaging Actions",
      summary: "Which of the following should you do while imaging?",
      question: {
        prompt: "Which of the following should you do while imaging? Select all that apply.",
        choices: [
          { label: "Use zoom", value: "zoom" },
          { label: "Use the torch", value: "torch" },
          { label: "Keep moving", value: "moving" },
          {
            label: "Wound and HealX fill the viewfinder box",
            value: "fill-box",
          },
        ],
        correctAnswers: ["zoom", "torch", "fill-box"],
        comment:
          "The most common issue is not using the torch or zoom feature.",
      },
    },
    {
      tag: "Basic",
      title: "Summary",
      summary: "Three reminders.",
      body: "1. Apply HealX to intact skin\n2. Remember your 5 stars while imaging\n3. Ensure your trace covers the wound",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/384a3d5c-e7fc-4994-908b-1d1ab4a96d32",
          alt: "Imaging summary",
        },
      ],
    },
  ],
};
