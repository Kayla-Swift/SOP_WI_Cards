window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2221"] = {
  documentType: "WI",
  documentNumber: "2221",
  documentTitle: "Sheeted HealX Packaging Incoming Inspection Procedure",
  documentUrl: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8656912416/",
  linkLabel: "Open WI in Confluence",
  description: "Incoming inspection procedure for HealX packaging.",
  theme: {
    accent: "#5861a2",
    surface: "#ffffff",
    background: "#f1f3fb",
    text: "#353b64",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2221",
      summary: "Sheeted HealX Packaging Incoming Inspection Procedure",
    },
    {
      tag: "Document",
      title: "Introduction",
      summary:
        "This work instruction covers incoming inspection of all packaging for HealX products.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8656912416/",
      },
    },
    {
      tag: "Regulatory",
      title: "Regulatory Requirements",
      summary:
        "The work instruction applies to HealX products intended for sale or use in Canada and the United States.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/991a0aaf-c2d6-465c-833e-bc5cc8a88b4b",
          alt: "Regulatory requirements card image",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Operator Training",
      summary:
        "Applicable standards were updated to include Canadian Medical Device Regulations and Code of Federal Regulations.",
    },
    {
      tag: "Training",
      title: "Pre-Production",
      summary:
        "All operators carrying out this procedure must have applicable training and a record of completed training.",
    },
    {
      tag: "Timing",
      title: "Acceptance Test",
      summary:
        "Incoming HealX packaging inspection should be performed prior to production.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/b6a89804-da99-4ced-9109-3f26434eb1fb",
          alt: "Acceptance test card image",
        },
      ],
    },
    {
      tag: "Check",
      title: "Operator requirements",
      summary: "What must operators carrying out this procedure have?",
      question: {
        prompt: "What must operators carrying out this procedure have?",
        choices: [
          { label: "Training", value: "training" },
          { label: "A record of the training", value: "record" },
          {
            label: "Both training and a record of the training",
            value: "both",
          },
        ],
        correctAnswer: "both",
        correctMessage: "Correct.",
        incorrectMessage:
          "Incorrect. Operators must have both training and a training record.",
      },
    },
    {
      tag: "Inspection",
      title: "Packaging Design",
      summary:
        "Create an acceptance-test record, verify quantity received equals quantity ordered, and verify packaging information matches technical documentation.",
    },
    {
      tag: "Review",
      title: "Sheeted Analysis",
      summary:
        "Packaging design must be reviewed and approved to meet CMDR and 21 CFR 801 requirements.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/5a38e274-73df-4b13-abca-f46835755dc9",
          alt: "Sheeted analysis card image",
        },
      ],
    },
    {
      tag: "Sampling",
      title: "Last Updated",
      summary:
        "The instruction includes sheeted packaging analysis and demonstration, including collecting lot-under-test packaging and inspecting sample size.",
    },
    {
      tag: "Revision",
      title: "Traceability Fields",
      summary:
        "Latest revision updates include the training-required statement, traceability fields, and revision-history section.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Open and use the work instruction while completing the task until you are comfortable and understand the process.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8656912416/",
      },
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938",
          alt: "Completion card image",
        },
      ],
    },
  ],
};
