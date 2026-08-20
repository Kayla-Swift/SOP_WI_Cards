window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["effective-wound-tracing"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Effective Wound Tracing",
  description: "How to refine AutoTrace using Trace, Erase, and Zoom.",
  theme: {
    accent: "#a34f73",
    surface: "#ffffff",
    background: "#fff1f6",
    text: "#452132",
  },
  cards: [
    {
      tag: "Title",
      title: "Effective Wound Tracing",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "1. Check AutoTrace",
      summary: "Confirm the green trace fully covers the wound edge.",
      body: "After imaging, check if the green outline fully covers the wound. Green should cover the outside edge of the wound.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/06238a27-0d58-4377-99f4-93462a4b29ad",
          alt: "AutoTrace example",
        },
      ],
    },
    {
      tag: "Basic",
      title: "2. Adding to a Trace",
      summary: "Use Trace to add missing boundary areas.",
      body: "If part of the wound trace is missing, press Trace and circle the missing area. Press Refine to snap traces to the wound edge.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/05dbc4e1-7003-4560-adab-c2aa7be545b5",
          alt: "Adding to trace example",
        },
      ],
    },
    {
      tag: "Basic",
      title: "2. Erasing",
      summary: "Remove extra trace areas.",
      body: "In some wounds, AutoTrace can include extra space. Press Erase, pinch to zoom in, and swipe through the extra space.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/5bdc14db-e1c8-4ecb-8d7f-ca8ffc99ec2b",
          alt: "Erasing trace example",
        },
      ],
    },
    {
      tag: "Basic",
      title: "3. Detailed Trace",
      summary: "Make small refinements for edge accuracy.",
      body: "If the trace mostly fits but could be closer, use zoom, erase, and trace to make small adjustments.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/317c43d6-1b88-4f98-8762-75ad9a053d78",
          alt: "Detailed trace example",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Detailed Trace Tools",
      summary: "Which features should you use to remove extra trace from a cluster wound?",
      question: {
        prompt:
          "Which features should you use to remove extra trace from a cluster wound? Select all correct answers.",
        choices: [
          { label: "Trace", value: "trace" },
          { label: "Erase", value: "erase" },
          { label: "Zoom", value: "zoom" },
        ],
        correctAnswers: ["erase", "zoom"],
        comment:
          "Using Erase and Zoom makes detailed tracing easier and helps you stay at the wound edge.",
      },
    },
  ],
};
