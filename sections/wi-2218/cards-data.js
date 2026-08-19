window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2218"] = {
  documentType: "WI",
  documentNumber: "2218",
  documentTitle: "Sheeted HealX Final Inspection",
  documentUrl: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8646787073/",
  linkLabel: "Open WI in Confluence",
  description: "Final inspection process for Sheeted HealX product packaging.",
  theme: {
    accent: "#8f4754",
    surface: "#ffffff",
    background: "#fbf1f3",
    text: "#5f2d36",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2218",
      summary: "Sheeted HealX Final Inspection",
    },
    {
      tag: "Document",
      title: "Introduction",
      summary:
        "This work instruction covers final inspection of HealX product packaging, specifically HealX Patient Envelopes intended for sale or use in Canada and the United States.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8646787073/",
      },
    },
    {
      tag: "Record",
      title: "Record Keeping",
      summary:
        "Final inspection includes a visual check for noticeable damage before product is committed to inventory.",
    },
    {
      tag: "Post-QC",
      title: "Prepare Area",
      summary:
        "If final inspection is successful, the product is ready to ship and can be placed in the Finished Good Ready for Shipment inventory area.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/f42cc242-5d91-47fc-b857-512ff5cda6c2",
          alt: "Prepare area card image",
        },
      ],
    },
    {
      tag: "LHR",
      title: "Visual Check",
      summary:
        "The completion and result of final inspection must be recorded in the LHR (Lot History Record).",
    },
    {
      tag: "Work Area",
      title: "Shrink Wrap",
      summary:
        "Prepare the area before inspection so it is clean, clear, and free from food, drink, and previous product materials.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/bee8e811-a73e-43f9-9b24-1dd8c31ccc78",
          alt: "Shrink wrap card image",
        },
      ],
    },
    {
      tag: "Check",
      title: "After successful inspection",
      summary: "What must be done after a successful final inspection?",
      question: {
        prompt: "What must be done after a successful final inspection?",
        choices: [
          {
            label: "Place product in the Finished Good Ready for Shipment inventory area",
            value: "shipment",
          },
          {
            label: "Record the result in the LHR",
            value: "lhr",
          },
          {
            label: "Prepare the work area",
            value: "prepare",
          },
        ],
        correctAnswer: "shipment",
        correctMessage: "Correct.",
        incorrectMessage:
          "Incorrect. After successful final inspection, place product in the Finished Good Ready for Shipment area.",
      },
    },
    {
      tag: "Process",
      title: "Envelope Count",
      summary:
        "Pull an envelope pack from Pre-QC storage and visually inspect the shrink wrap of the envelope pack.",
    },
    {
      tag: "Fail",
      title: "Failing Pile",
      summary:
        "Shrink wrap must look professionally done with no unintentional holes or debris. Failed bundles are set aside in a separate failing pile.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/0c5dc053-2f62-46d6-a766-9256f5f008ea",
          alt: "Failing pile card image",
        },
      ],
    },
    {
      tag: "Verify",
      title: "Clear Storage",
      summary:
        "Verify there are 15 envelopes per shrink-wrapped package and the envelopes are facing the same way.",
    },
    {
      tag: "Store",
      title: "Updated Record",
      summary:
        "Store passing QC envelope bundles in post-QC Clear storage locker and update the correct lot history record.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/d0d32be4-8e79-4b3a-8198-adb57f35edd6",
          alt: "Updated record card image",
        },
      ],
    },
    {
      tag: "NCP",
      title: "Non-Conforming Product",
      summary:
        "Packaging or raw-material issues are handled by specific procedures, and non-conforming products follow the SOP for control of non-conforming product.",
    },
    {
      tag: "Check",
      title: "Envelope inspection process",
      summary: "What is the inspection process for HealX envelopes?",
      question: {
        prompt: "What is the inspection process for HealX envelopes?",
        choices: [
          {
            label: "Inspect shrink wrap for unintentional holes or debris",
            value: "inspect",
          },
          {
            label: "Verify there are 15 envelopes per shrink-wrapped package",
            value: "count",
          },
          {
            label: "Address packaging or raw-material issues with required procedures",
            value: "issues",
          },
        ],
        correctAnswer: "inspect",
        correctMessage: "Correct.",
        incorrectMessage:
          "Incorrect. The process starts with visual shrink-wrap inspection for holes and debris.",
      },
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Open and use the work instruction while completing the task until you are comfortable and understand the process.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8646787073/",
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
