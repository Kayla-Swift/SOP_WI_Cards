window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-28"] = {
  documentType: "SOP",
  documentNumber: "28",
  documentTitle: "Verification of Purchased Product",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0028-SOP-Verification-ofPurchased-Product-[QMS-SOP0028_E]-9380003842.aspx",
  description: "",
  theme: {
    accent: "#5FBD8E",
    surface: "#ffffff",
    background: "#E8F9F2",
    text: "#2D5A47",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 28",
      summary: "Verification of Purchased Product",
      body: "SOP 28\nVerification of Purchased Product",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Open the complete SOP",
      body: "Open the complete SOP in SharePoint.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0028-SOP-Verification-ofPurchased-Product-[QMS-SOP0028_E]-9380003842.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary: "This procedure provides a system and instructions for verification of purchased products and inspections of incoming new materials or products.",
      body: "This procedure provides a system and instructions for verification of purchased products and inspections of incoming new materials or products.\n\nApplies to on-site verification of purchased materials and products such as HealX, HealX packaging, and any other finished, packaged, and labeled Swift products.",
    },
    {
      tag: "Class Materials",
      title: "Class Materials",
      summary: "Materials are classified into Class-I, Class-II, and Critical categories based on their risk.",
      body: "Class-I: Materials are standard materials not designed by or for Swift, which do not require incoming inspection.\n\nClass-II: Materials are non-standard materials and/or active components for Swift, which may affect the quality of Swift products/services.\n\nCritical: Materials are critical to the safety and effectiveness of the medical device and require 100% incoming inspection.",
    },
    {
      tag: "Responsibility",
      title: "Responsibility",
      summary: "QA-RA, Operations Personnel, Engineering Personnel, and Marketing Personnel are responsible for specific tasks.",
      body: "QA-RA, Operations Personnel, Engineering Personnel, and Marketing Personnel are responsible for:\n- spot checking purchasing activities (QA-RA)\n- inspecting materials\n- marketing Swift products/services, respectively.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1563968743333-044cef800494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyZXxlbnwwfHx8fDE2ODc0MzYxNzd8MA&ixlib=rb4.0.3&q=80&w=1080",
          alt: "Responsibility",
          caption: "Responsibility",
        },
      ],
    },
    {
      tag: "Identify Information",
      title: "Identify Information",
      summary: "Swift must identify incoming inspection requirements and log products.",
      body: "Swift must do the following:\n- identify incoming inspection requirements and log products in the Purchasing and Receiving Log\n- place a Receiving label on them\n- perform inspections under adequate lighting and at the designated inspection station.",
    },
    {
      tag: "Inspection Packaging",
      title: "Inspection Packaging",
      summary: "Inspection of Packaging, Labelling, Critical Materials, FAI, Artwork and Documentation must be recorded.",
      body: "Inspection of Packaging and Labelling, Mass-quantity or Lot-based Products, Critical Materials, First Article Inspection (FAI), Artwork on Labeling and Printed Material, and Inspection Documentation must be recorded in the Purchasing and Receiving Log.",
    },
    {
      tag: "Inspection Results",
      title: "Inspection Results",
      summary: "Inspection results must include specific information about the parts and inspection process.",
      body: "These must include:\n- Part Number / ID / Name\n- Part Revision\n- PO/Invoice Number\n- Quantity Received\n- Part Description (if needed)\n- Supplier Name\n- Inspection Date\n- Name of Inspector\n- Reference to the component spec, if any\n- Any measured values, if applicable\n- Identification of any measurement equipment used\n- Disposition (pass or fail) of inspection",
    },
    {
      tag: "Acceptance Test",
      title: "Acceptance Test",
      summary: "Acceptance Test results must include specific information.",
      body: "Results must include:\n- Quantity Received\n- Lot#\n- Sampling plan & Sample size\n- Pass/Fail Criteria\n- Disposition of Pass/Fail\n- Reference to C of C (where applicable)\n- Equipment / Tools Required\n- PO #\n- Reference Documents (ie. work instructions, component specifications etc..)\n- QA/RA Approval",
    },
    {
      tag: "Quiz",
      title: "Acceptance Test Quiz",
      summary: "An acceptance Test (AT) must be performed on all core components/parts of a product received.",
      body: "Acceptance Test (AT) must be performed on all core components/parts of a product received.",
      question: {
        prompt: "Is this statement true or false?",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        correctAnswer: "true",
        correctMessage: "Correct. Yes! Acceptance Test (AT) must be performed on all core components/parts of a product received.",
        incorrectMessage: "Incorrect. Review the Acceptance Test requirements.",
      },
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 28 learning set and review the full SOP as needed.",
      media: [
        {
          type: "image",
          src: "./sections/shared/images/complete.png",
          alt: "SOP completion illustration",
          caption: "Completion",
        },
      ],
    },
  ],
};
