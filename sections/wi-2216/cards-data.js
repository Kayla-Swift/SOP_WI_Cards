window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2216"] = {
  documentType: "WI",
  documentNumber: "2216",
  documentTitle: "Sheeted HealX Acceptance Test Procedure",
  documentUrl: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8604057608/",
  linkLabel: "Open WI in Confluence",
  description: "Acceptance testing and incoming inspection for Sheeted HealX products.",
  theme: {
    accent: "#326f4d",
    surface: "#ffffff",
    background: "#eff8f2",
    text: "#214734",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2216",
      summary: "Sheeted HealX Acceptance Test Procedure",
    },
    {
      tag: "Document",
      title: "Introduction",
      summary:
        "This work instruction covers acceptance testing and incoming inspection of Sheeted HealX products intended for sale or use in Canada and the United States.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8604057608/",
      },
    },
    {
      tag: "Training",
      title: "Training Record",
      summary:
        "All operators performing this instruction must receive relevant training and have that training record documented on file.",
    },
    {
      tag: "Sections",
      title: "Inspection Types",
      summary:
        "Sections include Dimensional Inspection, Physical Inspection, Physical Review of Design, Physical Demonstration and Test, Colour and Finish Review of Design, Colour and Finish Inspection, Biological Review of Design, and Cleanliness and Sterilization Review of Design.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/deef6f34-b812-4302-80b4-8d7150629dcd",
          alt: "Inspection types card image",
        },
      ],
    },
    {
      tag: "Dimensional",
      title: "Dimensional Testing",
      summary:
        "Collect HealX dots for the lot under test using the sampling plan, scan at 1200 dpi, then run the HealX Acceptance Test application to generate dimensional metrics.",
    },
    {
      tag: "Physical",
      title: "Physical Layout",
      summary:
        "Verify the inter-part matrix (web) is removed from the HealX strip and that HealX is arranged in a 3 by 6 array on the sheet.",
    },
    {
      tag: "Design",
      title: "Design Review",
      summary:
        "Review HealX component specification and procurement requirements to confirm required physical-design requirements are present.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/4d6a1610-cb92-4655-9489-3d09647f79f3",
          alt: "Design review card image",
        },
      ],
    },
    {
      tag: "Demonstration",
      title: "Demonstration Test",
      summary:
        "Tasks include affixing HealX to skin and waiting 5 minutes, removing HealX, and confirming discomfort is at most minor and without pain.",
    },
    {
      tag: "Colour",
      title: "Colour/Finish Review",
      summary:
        "Review requirements for spot ink colours, matte finish, and specified PANTONE colours in design and inspection requirements.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/58ce531b-a178-400f-b5e4-c5519b72bd50",
          alt: "Colour and finish review card image",
        },
      ],
    },
    {
      tag: "Biological",
      title: "Biological Review",
      summary:
        "Confirm design requirements include non-cytotoxicity, non-sensitization, and non-irritation.",
    },
    {
      tag: "Cleanliness",
      title: "Cleanliness Review",
      summary:
        "Confirm requirements for cleanliness, freedom from foreign object debris, and cleaning prior to manufacture.",
    },
    {
      tag: "Check",
      title: "Physical Demonstration and Test",
      summary: "What is included in the Physical Demonstration and Test section?",
      question: {
        prompt: "What is the Physical Demonstration and Test section of the HealX design review process?",
        choices: [
          {
            label: "Affixing a HealX to skin and waiting 5 minutes",
            value: "affix",
          },
          {
            label: "Confirming discomfort is at most minor and without pain",
            value: "discomfort",
          },
          {
            label: "Reviewing HealX component specification and procurement requirements",
            value: "review",
          },
        ],
        correctAnswers: ["affix", "discomfort", "review"],
        correctMessage: "Correct. All listed tasks are part of this section.",
        incorrectMessage:
          "Incorrect. This section includes all listed tasks and checks.",
        comment:
          "The section includes affixing HealX to skin, waiting, removing it, and confirming discomfort is minor and without pain while following review requirements.",
      },
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Open the work instruction and use it while performing the task until you are comfortable with the process.",
      action: {
        label: "Open WI in Confluence",
        url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8604057608/",
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
