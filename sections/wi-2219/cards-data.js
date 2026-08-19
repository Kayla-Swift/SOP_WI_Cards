window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2219"] = {
  documentType: "WI",
  documentNumber: "2219",
  documentTitle: "Sheeted HealX Packaging",
  documentUrl: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8296989524/",
  linkLabel: "Open WI in Confluence",
  description: "Packaging process for Sheeted HealX Patient Envelope and Home Health Packets.",
  theme: {
    accent: "#4f5574",
    surface: "#ffffff",
    background: "#f1f2f8",
    text: "#33384f",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2219",
      summary: "Sheeted HealX Packaging",
    },
    {
      tag: "Document",
      title: "Introduction",
      summary:
        "This work instruction covers packaging Sheeted HealX products, specifically Patient Envelope and Home Health Packets for sale or use in Canada and the United States.",
      body: "Follow the steps in the WI while creating HealX.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8296989524/",
      },
    },
    {
      tag: "Specification",
      title: "Component Specification",
      summary:
        "The Sheeted HealX product is governed by HealX component specification HLX-CS-1949.",
    },
    {
      tag: "Training",
      title: "Personnel Training",
      summary:
        "All personnel involved in HealX production must complete Operations Manager training before starting work.",
    },
    {
      tag: "Scale",
      title: "Bulk Production",
      summary:
        "The instruction details packaging a single HealX Patient Envelope, and the same steps are repeated for bulk quantities based on operational need.",
    },
    {
      tag: "Steps",
      title: "Preparing Envelope",
      summary:
        "Prepare and clean the area, retrieve CLEAR-marked sheeted HealX and packaging envelopes from storage, fold the envelope, insert HealX sheets, and place velcro stickers.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/31df6236-a445-4265-88b9-7bb57f7bd41c",
          alt: "Preparing envelope card image",
        },
      ],
    },
    {
      tag: "Check",
      title: "Document description",
      summary: "What does the document describe?",
      question: {
        prompt: "What does the document describe?",
        choices: [
          {
            label: "A work instruction for packaging Sheeted HealX products",
            value: "instruction",
          },
          {
            label: "The HealX component specification",
            value: "spec",
          },
          {
            label: "Training provided by the Operations Manager",
            value: "training",
          },
        ],
        correctAnswer: "instruction",
        correctMessage: "Correct.",
        incorrectMessage:
          "Incorrect. It describes a work instruction for packaging Sheeted HealX products.",
      },
    },
    {
      tag: "Equipment",
      title: "L-Bar Sealer",
      summary:
        "The L-Bar Sealer (EQUIP-010) is used to seal packaging plastic after work-area prep, machine startup, and box positioning.",
    },
    {
      tag: "Equipment",
      title: "Shrink Tunnel",
      summary:
        "The Shrink Tunnel (EQUIP-009) is used by turning on conveyor and tunnel, testing heat and speed, then feeding sealed HealX Patient Envelope packages.",
    },
    {
      tag: "Records",
      title: "Record Keeping",
      summary:
        "Completed envelope packages are placed into finished PRE-INVENTORY, and the number of completed boxes entered is recorded on the Lot History Record form.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/c61483ba-f5fb-452a-a920-d29d82baf867",
          alt: "Record keeping card image",
        },
      ],
    },
    {
      tag: "Ownership",
      title: "Document Update",
      summary:
        "The document was last updated on Jan 09, 2023 by Trevor Fung and is owned by Rama Pashaei.",
    },
    {
      tag: "Revision",
      title: "Revision Detail",
      summary:
        "Recent revision updated envelope folding detail in assembly steps, made by Trevor Folska-Fung on 2022-11-23.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Explore the full SOP and save the page link for reference as needed.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8296989524/",
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
