window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["manual-depth-measurements"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Manual Depth Measurements",
  description: "When and how to validate depth manually.",
  theme: {
    accent: "#6c5f9a",
    surface: "#ffffff",
    background: "#f4f2ff",
    text: "#2d2a47",
  },
  cards: [
    {
      tag: "Title",
      title: "Manual Depth Measurements",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Why Manually Add Depth",
      summary: "Use manual method when AutoDepth is not enough.",
      body: "In some cases, depth cannot be reliably determined automatically. Follow organizational policy to determine depth, usually with a sterile cotton-tip swab and a disposable wound ruler.",
    },
    {
      tag: "Basic",
      title: "Confirming Depth",
      summary: "Validate AutoDepth with manual depth when needed.",
      body: "You may disagree with AutoDepth or need to add a manual depth value. Follow your organization policy for depth measurement. A common method is shown below.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/fcd7f1e5-0285-4909-9270-b8f4783440bd",
          alt: "Confirming depth",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Undermining & Tunneling",
      summary: "Record direction and values clearly.",
      body: "Add undermining and tunneling on the depth screen. Measure depth or undermining, draw direction, enter values, and save.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/2201f085-67e8-43c0-a568-cf139886107f",
          alt: "Undermining and tunneling",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Depth Method",
      summary: "How should you measure wound depth?",
      question: {
        prompt:
          "What is a method to measure the depth of a wound, tunnel, or location of undermining?",
        choices: [
          { label: "Guess the value based on what you see", value: "guess" },
          {
            label: "Use a cotton tip swab and disposable ruler",
            value: "swab-ruler",
          },
          {
            label: "Put a wound ruler into the area of depth and measure directly",
            value: "ruler-direct",
          },
        ],
        correctAnswer: "swab-ruler",
        comment:
          "A common method is a cotton tip swab with a disposable ruler. Do not guess depth values.",
      },
    },
  ],
};
