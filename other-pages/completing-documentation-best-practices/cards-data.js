window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["completing-documentation-best-practices"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Completing Documentation Best Practices",
  description: "Best practices for complete, timely wound documentation.",
  theme: {
    accent: "#5b2f76",
    surface: "#ffffff",
    background: "#f9f4ff",
    text: "#2d1f45",
  },
  cards: [
    {
      tag: "Title",
      title: "Completing Documentation Best Practices",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Document with Swift",
      summary: "Core components to document in Swift.",
      body: "Documenting in Swift can include wound location, wound images, wound measurements, and clinical documentation related to the wound. This may vary by organization and can include exudate, periwound, wound edges, dressings, infection risk, and treatment.",
    },
    {
      tag: "Basic",
      title: "Full Workflow",
      summary: "High-level sequence for complete documentation.",
      body: "1. Apply HealX and image wound\n2. Trace wound (determines measurements)\n3. Add depth points (deepest point, undermining, tunneling)\n4. Add clinical documentation required\n5. Sign evaluation at bedside",
    },
    {
      tag: "Basic",
      title: "When to Document",
      summary: "Complete documentation as early as possible.",
      body: "Documenting events promptly improves accuracy because memory fades over time. Real-time documentation also improves cognitive focus and helps providers assess, consider options, and plan outcomes more methodically.",
    },
    {
      tag: "Quiz",
      title: "Documentation Timing",
      summary: "When should you complete clinical documentation?",
      question: {
        prompt: "When should you complete clinical documentation?",
        choices: [
          {
            label: "As early as possible without interrupting care",
            value: "early",
          },
          {
            label: "After completing all evaluations on patients for the day",
            value: "end-day",
          },
          { label: "At the end of the week", value: "end-week" },
        ],
        correctAnswer: "early",
        comment:
          "Complete documentation as early as possible for the most accurate documentation. This reduces the risk of complications and legal issues in the future.",
      },
    },
  ],
};
