window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-12"] = {
  documentType: "SOP",
  documentNumber: "12",
  documentTitle: "Control of Records",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0012-SOP-Control-of-Records-[QMS-SOP-0012_F]-8632238204.aspx",
  description: "",
  mediaHeight: "260px",
  mediaFit: "contain",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 12",
      summary: "Control of Records",
      body: "SOP 12\nControl of Records",
    },
    {
      tag: "Button",
      title: "Introduction",
      summary: "Open SOP in SharePoint",
      body: "This document outlines the process and responsibilities for control of records at Swift including: identification, storage, protection, retrieval, retention, and disposition of records.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0012-SOP-Control-of-Records-[QMS-SOP-0012_F]-8632238204.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Record Control",
      title: "Record Control",
      summary: "The document outlines the process and responsibilities for the control of records at Swift, including:",
      body: "- identification\n- storage\n- protection\n- retrieval\n- retention\n- disposition of records.",
      media: [{ type: "image", src: "./sections/sop-12/images/record-control.jpg", alt: "Records stored in folders", caption: "Record Control" }],
    },
    {
      tag: "FDA & ISO Standards",
      title: "FDA & ISO Standards",
      summary: "The control of records is intended to preserve evidence of process, quality, safety, effectiveness, and conformance with requirements in the design, production, verification, distribution, and servicing of medical devices produced by Swift.",
      media: [{ type: "image", src: "./sections/sop-12/images/fda-iso-standards.jpg", alt: "FDA and ISO standards visual", caption: "FDA & ISO Standards" }],
    },
    {
      tag: "Quality Records",
      title: "Quality Records",
      summary: "This procedure applies to all Quality Records prepared and retained by Swift.",
      body: "Including those required as outputs of the Quality Management System, and those that are product-related.\n\nProduct specific records shall be maintained for the Life of the Product. These are scanned and filed electronically.",
      media: [{ type: "image", src: "./sections/sop-12/images/quality-records.jpg", alt: "Quality records visual", caption: "Quality Records" }],
    },
    {
      tag: "Quiz",
      title: "Records Requirements",
      summary: "What does this document adhere to?",
      question: {
        prompt: "What does this document adhere to?",
        choices: [
          { label: "FDA QSR", value: "fda" },
          { label: "ISO 13485", value: "iso" },
          { label: "Quality Management System", value: "qms" },
        ],
        correctAnswers: ["fda", "iso"],
        comment: "Based on these requirements you must not leave any fields blank. If it is not applicable include N/A.",
      },
    },
    {
      tag: "Data and DHR",
      title: "Data and DHR",
      summary: "Only modify data with crossing through the data with a single line and writing the correct data near the original data point, initialed and dated by the modifier.",
      body: "Never backdate information.\n\nThe Device History Record (DHR) maintains the Quality Assurance for the lifetime of a medical device.",
    },
    {
      tag: "Lifecycle Process",
      title: "Lifecycle Process",
      summary: "This section outlines the roles and responsibilities of the following:",
      body: "This is shown in the Document Management System in the record control process.\n\n- Author/Initiator\n- Document Manager (RA Specialist)\n- QA",
    },
    {
      tag: "Record Categories",
      title: "Record Categories",
      summary: "The quality record lifecycle process includes:",
      body: "Records are organized into main categories such as DHF, DMR, DHR, Medical Device File, QSR, Complaint Files, and Confidential PHI.\n\n- establishment\n- completion\n- identification\n- storage\n- retention\n- expiration",
    },
    {
      tag: "Record Safeguarding",
      title: "Record Safeguarding",
      summary: "This document provides detailed information on record safeguarding, like:",
      body: "- establishment\n- completion\n- identification\n- indexing\n- storage\n- safeguarding\n- administrative provisions\n- retention periods\n- disposal of records",
    },
    {
      tag: "Spot Reviews",
      title: "Spot Reviews",
      summary: "The Document Manager (RA Specialist) is responsible for conducting periodic spot reviews.",
      body: "These ensure:\n- compliance with storage\n- safeguarding\n- retention\n- disposal processes.\n\nIt includes communicating the results to management during regularly scheduled QMS Management Reviews.",
      media: [{ type: "image", src: "./sections/sop-12/images/spot-reviews.jpg", alt: "Spot review visual", caption: "Spot Reviews" }],
    },
    {
      tag: "Quiz",
      title: "Document Manager Responsibility",
      summary: "What is the Document Manager (RA Specialist) responsible for?",
      question: {
        prompt: "What is the Document Manager (RA Specialist) responsible for?",
        choices: [
          { label: "Conducting periodic spot reviews", value: "reviews" },
          { label: "Establishing principles", value: "principles" },
          { label: "Indexing records", value: "indexing" },
        ],
        correctAnswer: "reviews",
        comment: "The Document Manager conducts periodic spot reviews to ensure compliance and communicates results during QMS Management Reviews.",
      },
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 12 learning set and review the full SOP as needed.",
      media: [{ type: "image", src: "./sections/shared/images/complete.png", alt: "SOP completion illustration", caption: "Completion" }],
    },
  ],
};
