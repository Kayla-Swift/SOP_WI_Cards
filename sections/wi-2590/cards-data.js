window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2590"] = {
  documentType: "WI",
  documentNumber: "2590",
  documentTitle: "ESD Equipment Mats Validation",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-ESD-equipment-mats-Validation-Work-Instruction%5bQMS-WI-2590_A%5d-8731394049.aspx",
  linkLabel: "Open WI in SharePoint",
  description: "Validation process for ESD equipment mats used in production work areas.",
  theme: {
    accent: "#4f6f9d",
    surface: "#ffffff",
    background: "#edf3fb",
    text: "#2f4668",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2590",
      summary: "ESD Equipment Mats Validation",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "ESD equipment mats are used to protect Swift work areas from electrostatic discharge. Mats are periodically validated to ensure resistance remains in a dissipative range.",
    },
    {
      tag: "Step 1",
      title: "Step 1",
      summary:
        "Collect required equipment: EQUIP-025_ Surface Resistance Checker and EQUIP-024_ ESD equipment mats. The underscore can be any equipment-family designation such as EQUIP-025A.",
    },
    {
      tag: "Step 2",
      title: "Step 2",
      summary:
        "Place the ESD mat flat on a work surface with nothing on top and do not clean the mat surface before validation.",
      body: "Expected result: ESD mat with nothing on top of it.",
    },
    {
      tag: "Step 3",
      title: "Step 3",
      summary:
        "Clean the surface-resistance-checker electrodes using a kim-wipe with 70% isopropyl alcohol. Wait until all alcohol is dry before proceeding.",
    },
    {
      tag: "Step 4",
      title: "Step 4",
      summary:
        "After cleaning and drying, place the surface resistance checker (EQUIP-025_) at point (1,1) using the diagram.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/8e985918-ba13-4dd6-81f0-5344468d1488",
          alt: "Step 4 position diagram",
        },
      ],
    },
    {
      tag: "Step 5",
      title: "Step 5",
      summary:
        "Set the electrode switch at the top of the surface resistance checker to INTERNAL.",
      body: "Expected result: ESD mat with nothing on top of it.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/023f3af7-7ad5-4eaa-9385-a5553c967fc6",
          alt: "Internal switch setting",
        },
      ],
    },
    {
      tag: "Step 6",
      title: "Step 6",
      summary:
        "Press and hold the Test button until a resistance LED measurement appears, then record the reading.",
      body:
        "Expected result: acceptable measurements are between 10^5 and 10^9 ohms. Escalate to the equipment owner if outside limits.",
    },
    {
      tag: "Step 7",
      title: "Step 7",
      summary:
        "Repeat steps 3-6 at locations (2,1), (1,2), and (2,2) using Figure 1.",
      body: "Expected result: three more measurements taken.",
    },
    {
      tag: "Step 8",
      title: "Step 8",
      summary:
        "Clean up all materials used and return them to their proper locations.",
      body:
        "Expected result: clean work area ready for production-related activities.",
    },
    {
      tag: "WI",
      title: "WI 2590",
      summary: "Click to Open the Full WI",
      action: {
        label: "WI 2590",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-ESD-equipment-mats-Validation-Work-Instruction%5bQMS-WI-2590_A%5d-8731394049.aspx",
      },
    },
  ],
};
