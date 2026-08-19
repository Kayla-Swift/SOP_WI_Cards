window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-25"] = {
  documentType: "SOP",
  documentNumber: "25",
  documentTitle: "Supplier Evaluation and Monitoring Process",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0025-SOP-SupplierEvaluation-and-Monitoring-[QMS-SOP0025_F]-10055516161.aspx",
  description: "",
  theme: {
    accent: "#D65B9C",
    surface: "#ffffff",
    background: "#FFF0F7",
    text: "#4D1D35",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 25",
      summary: "Supplier Evaluation and Monitoring Process",
      body: "SOP 25\nSupplier Evaluation and Monitoring Process",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Open the complete SOP",
      body: "Open the complete SOP in SharePoint.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0025-SOP-SupplierEvaluation-and-Monitoring-[QMS-SOP0025_F]-10055516161.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary: "Swift evaluates its suppliers and purchases from those who meet quality requirements.",
      body: "Swift evaluates its suppliers \/ purchases from those who meet quality requirements.\n\nApproved Suppliers are on the Approved Supplier List.\n\nContractors and consultants (C&Cs) are evaluated and governed by the regulatory team.",
    },
    {
      tag: "Supplier Evals",
      title: "Supplier Evals",
      summary: "The Supplier Evaluation and Monitoring Process is used to select and evaluate potential suppliers.",
      body: "The Supplier Evaluation and Monitoring Process is used to select and evaluate potential suppliers that may satisfy Swift's requirements for specifications, quality, quantity, and standards.\n\nInitial selection personnel must initiate a Supplier Evaluation and Re-evaluation Form and make a declaration of freedom from conflict of interest.",
    },
    {
      tag: "Full Supplier Review",
      title: "Full Supplier Review",
      summary: "If the product or service affects the quality of Swift's products, a full supplier evaluation must be performed.",
      body: "If the product or service is determined to affect the quality of Swift's products, a full supplier evaluation must be performed.\n\nSwift uses a class system for products/services provided by suppliers, with rankings of classes warranting different levels of evidence.\n\n1. Low or No Risk\n2. Mid Risk\n3. Critical Risk",
    },
    {
      tag: "Quiz",
      title: "Approved Suppliers List Inclusion",
      summary: "Do you think suppliers of products and services with low risk or no risk of affecting the quality of Swift's product must be included in the Approved Suppliers List and/or should they be listed as EXEMPT?",
      body: "Do you think suppliers of products and services with low risk or no risk of affecting the quality of Swift's product must be included in the Approved Suppliers List and/or should they be listed as EXEMPT?",
      question: {
        prompt: "Which applies to low/no risk suppliers?",
        choices: [
          { label: "Included in the list", value: "included" },
          { label: "EXEMPT", value: "exempt" },
        ],
        correctAnswer: "included",
        correctMessage: "Correct. This category is exempt from this review process.",
        incorrectMessage: "Review the supplier classification requirements.",
      },
    },
    {
      tag: "Mid/Critical",
      title: "Mid / Critical Suppliers",
      summary: "Suppliers of products or services with medium risk must be included in the Approved Suppliers List.",
      body: "Suppliers of products or services with medium risk must be included in the Approved Suppliers List.\n\nCritical suppliers must provide screening samples product meeting requirements, quality system certification, and other information supporting selection.",
    },
    {
      tag: "Accreditation",
      title: "Accreditation Bodies",
      summary: "Accreditation bodies must be included in the Approved Suppliers List and identified as EXEMPT from evaluation.",
      body: "Accreditation bodies must be included in the Approved Suppliers List and identified as \"EXEMPT\" from evaluation",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw0fHxjZXJ0aWZpY2F0aW9ufGVufDB8fHx8MTY4NzM2NTQ1M3ww&ixlib=rb4.0.3&q=80&w=1080",
          alt: "Accreditation Bodies",
          caption: "Accreditation Bodies",
        },
      ],
    },
    {
      tag: "Adding to ASL",
      title: "Adding to the Approved Suppliers List (ASL)",
      summary: "If the supplier is determined to be suitable, QA-RA shall add the supplier to the Approved Suppliers List.",
      body: "If the supplier is determined to be suitable, QA-RA shall add the supplier to the Approved Suppliers List.\n\nQA-RA shall periodically monitor the rates of non-conformance in delivered products or service from each supplier to determine if deficiency exists in the evidence provided for approval.",
    },
    {
      tag: "Approved Suppliers List",
      title: "Approved Suppliers List (ASL)",
      summary: "The Approved Supplier List includes a list of suppliers who have met all the requirements and have been approved by selected members of top management.",
      body: "The Approved Supplier List includes a list of suppliers who have met all the requirements and have been approved by selected members of top management.\n\nSupplier Evaluation and Re-evaluation Form Initiated by personnel desiring to select a Class II or Critical supplier.",
    },
    {
      tag: "Discontinuation",
      title: "Supplier Discontinuation",
      summary: "A supplier may be discontinued for reasons including ceased operations, no longer required, non-conformance, or performance issues.",
      body: "A supplier may be discontinued for reasons including, but not limited to:\n- Ceased operations\n- No longer required \/ end of contract\n- Non-conformance \/ non-compliance\n- Performance issues\n\nAll discontinuation decisions must be documented in the Approved Supplier List (QMS-REC-0045), with the reasons.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 25 learning set and review the full SOP as needed.",
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
