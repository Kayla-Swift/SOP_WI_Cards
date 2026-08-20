window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["infection-control-in-wound-care"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Infection Control in Wound Care",
  description: "Infection control reminders during wound care visits.",
  theme: {
    accent: "#34734d",
    surface: "#ffffff",
    background: "#eefaf1",
    text: "#1f3d2a",
  },
  cards: [
    {
      tag: "Title",
      title: "Infection Control in Wound Care",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "1. General Summary",
      summary: "Follow organization infection control procedures.",
      body: "Follow all site procedures during visits, including glove changes, hand washing, wiping surfaces, use of barriers, wound cleanliness, and closing products.",
    },
    {
      tag: "Basic",
      title: "Quick steps",
      summary: "Typical sterile workflow sequence.",
      body: "1. Arrange dressing pack close to patient\n2. Set up materials and barriers in sterile field\n3. Wash hands and put on gloves\n4. Remove dressing\n5. Wash hands and complete wound imaging\n6. Wash hands and change gloves\n7. Dress wound while keeping sterile areas separate\n8. Remove gloves, dispose items, and wash hands",
    },
    {
      tag: "Quiz",
      title: "Hand Hygiene",
      summary: "Should you sanitize or hand wash between glove changes?",
      question: {
        prompt: "Should you sanitize or hand wash between glove changes?",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        correctAnswer: "yes",
        comment: "Always clean your hands between glove changes.",
      },
    },
    {
      tag: "Quiz",
      title: "Product Caps",
      summary: "When should products have caps replaced?",
      question: {
        prompt:
          "During a wound care visit, when should products have their caps replaced?",
        choices: [
          { label: "After use", value: "after-use" },
          { label: "Only if previously closed", value: "closed-only" },
          { label: "Never", value: "never" },
        ],
        correctAnswer: "after-use",
        comment:
          "Ensure all products are closed and caps replaced after use, including products that were previously open.",
      },
    },
    {
      tag: "Quiz",
      title: "Pre-Imaging Prep",
      summary: "Should you remove dressings and clear exudate before imaging?",
      question: {
        prompt:
          "Should you remove dressings and clear exudate or drainage prior to imaging your wound?",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        correctAnswer: "yes",
        comment:
          "Yes. Remove dressings and ensure the area is clean and dry to simplify wound imaging.",
      },
    },
  ],
};
