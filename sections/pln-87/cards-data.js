window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["pln-87"] = {
  documentType: "PLN",
  documentNumber: "87",
  documentTitle: "Production Quality Plan",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Production-Quality-Plan-[WCM-PLN-0087_F]-8833204227.aspx",
  linkLabel: "Open SOP in SharePoint",
  description: "Production quality plan for WCM and HealX",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "PLN 87",
      summary: "Production Quality Plan",
      body: "PLN 87 - Production Quality Plan",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Open the complete production quality plan.",
      body:
        "Introduction: Products are created following the Software Development Process SOP, and the production team follows applicable standards including cleaning and storage controls.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Production-Quality-Plan-[WCM-PLN-0087_F]-8833204227.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Production Plan",
      title: "Production Plan",
      summary:
        "Products are created following the Software Development Process SOP and production standards.",
      body:
        "1. Products follow the Software Development Process SOP.\n2. The production team follows all standards including cleaning and storage.",
    },
    {
      tag: "Video",
      title: "Plan Purpose",
      summary: "This plan defines WCM and fiducial marker production at Swift Medical.",
      body:
        "The plan ensures all required manufacturing activities are known, scoped, and executed. Standards include FDA QSR 820.70 Production and Process Controls and ISO 13485:2016 Section 7.5 Production and Service Provision.",
    },
    {
      tag: "Records",
      title: "Production Documentation and Records",
      summary: "Production records support control, traceability, and release readiness.",
      body:
        "1. DMR: Contains key product information.\n2. Change Control Process: Refer to the Change Control SOP.\n3. DHF: Contains key software information.\n4. LHR: Contains information about HealX.",
    },
    {
      tag: "Release",
      title: "Authorization to Release Product",
      summary:
        "Product release is authorized during Transition to Production with cross-functional review.",
      body:
        "The team reviews design, risk, usability and validation, marketing and labeling, and verification documents.",
    },
    {
      tag: "Process",
      title: "Production Process",
      summary:
        "Production is carried out by a multidisciplinary team led by the Director of Operations.",
      body:
        "The team follows the production plan and SOP. Key products include HealX markers, HealX packaging, WCM build, and Swift Ray 1 (Sinatra).",
    },
    {
      tag: "Quiz",
      title: "Equipment Info",
      summary: "Production equipment information can be found in the LMS.",
      body: "Production equipment records are maintained in the Equipment Log.",
      question: {
        prompt: "Production Equipment Information can be found in the LMS.",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        correctAnswer: "false",
        comment: "Production equipment can be found in the Equipment Log.",
      },
    },
    {
      tag: "Quiz",
      title: "Risk Management",
      summary: "Risk management activities are performed as per SOP: Risk Management.",
      question: {
        prompt: "Risk management activities are performed as per SOP: Risk Management.",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        correctAnswer: "true",
      },
    },
    {
      tag: "Validation",
      title: "Process Validation",
      summary: "Each section has its own process and HealX has a process validation.",
      body:
        "1. Facility Control: QMS-WI-0091\n2. HealX Acceptance Test: QMS-WI-0074\n3. HealX Packaging: QMS-WI-0071\n4. iOS App Release Procedure: QMS-WI-0135",
    },
    {
      tag: "Incoming",
      title: "Incoming Acceptance",
      summary: "Incoming inspection is conducted per SOP: Verification of Purchased Products.",
      body: "WI: HealX Acceptance Test [HLX-WI-0074].",
    },
    {
      tag: "HealX",
      title: "HealX Materials and Packaging",
      summary:
        "HealX labels and packaging are manufactured by an approved supplier.",
      body:
        "Incoming purchased products are inspected and stored in Hold Storage/Pre-Inventory.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/7f6df79a-33dd-4124-b4c6-987edc0a9041",
          alt: "HealX materials and packaging",
          caption: "HealX materials and packaging",
        },
      ],
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Open the full SOP for reference when needed.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938",
          alt: "Complete card image",
          caption: "Complete",
        },
      ],
    },
  ],
};