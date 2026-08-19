window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2600"] = {
  documentType: "WI",
  documentNumber: "2600",
  documentTitle: "ESD Wrist Strap Verification",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-ESD-wrist-strap-verification-work-instruction%5bQMS-WI-2600_A%5d-8733294593.aspx",
  linkLabel: "Open WI in SharePoint",
  description: "Verification process for ESD wrist strap grounding and resistance before assembly and flashing.",
  theme: {
    accent: "#4a7fae",
    surface: "#ffffff",
    background: "#edf5fb",
    text: "#2a4f6e",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2600",
      summary: "Work Instruction: ESD Wrist Strap Verification",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "ESD wrist straps are used to protect Swift work areas from electrostatic discharge. Straps and grounding must be checked before Flashing and Ray1 Assembly to confirm proper resistance.",
    },
    {
      tag: "Step 1",
      title: "Step 1",
      summary:
        "Collect required equipment: EQUIP-027 ESD wrist strap and EQUIP-026_ Wrist Strap Tester, Two State. The underscore can be any family designation such as EQUIP-026A.",
      body: "Success criteria: necessary equipment gathered.",
    },
    {
      tag: "Step 2",
      title: "Step 2",
      summary:
        "Ensure the Wrist Strap Tester, Two State is connected to a grounded wall outlet.",
      body:
        "Success criteria: tester is grounded and the red power light is on.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/211edb65-8f34-4283-9799-3012f50d56bb",
          alt: "Wrist strap tester powered",
        },
      ],
    },
    {
      tag: "Step 3",
      title: "Step 3",
      summary:
        "Put the ESD wrist strap around your wrist and secure it. Connect it to the tester banana jacks, or to a common ground if the tester is unavailable.",
      body:
        "Success criteria: wrist strap is worn and connected to the wrist strap tester.",
    },
    {
      tag: "Step 4",
      title: "Step 4",
      summary:
        "Using an ungloved hand, touch the metallic test surface on the tester and ensure the green Test Good light turns on.",
      body:
        "Success criteria: green indicator turns on for resistance between 750 kOhms and 10 MOhms. If not, verify connections and power, try another ground, then escalate to engineering if needed.",
    },
    {
      tag: "WI",
      title: "WI 2600",
      summary: "Click to Open the Full WI",
      action: {
        label: "WI 2600",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-ESD-wrist-strap-verification-work-instruction%5bQMS-WI-2600_A%5d-8733294593.aspx",
      },
    },
  ],
};
