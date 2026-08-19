window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-15"] = {
  documentType: "SOP",
  documentNumber: "15",
  documentTitle: "Contract Review and Order Management",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0015-SOP-Contract-Review-and-Order-Management-[QMS-SOP-0015_C]-8271299351.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#A3CF2B",
    surface: "#ffffff",
    background: "#F4F9E3",
    text: "#263238",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 15",
      summary: "Contract Review and Order Management",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary:
        "Defines contract review process, timing, and guidelines for Swift devices, products, and services.",
      body: "Procedure aligns with ISO 13485:2016 requirements.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0015-SOP-Contract-Review-and-Order-Management-[QMS-SOP-0015_C]-8271299351.aspx",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Process",
      title: "Process",
      summary:
        "Contracts or commitments for services/custom products are reviewed by all affected departments.",
      body: "There are five review types.",
    },
    {
      tag: "Tech/Resource",
      title: "Tech / Resource",
      summary:
        "Technical review covers feasibility, requirement quality, and IP. Resource/schedule review checks staffing, resourcing, timing, and margin.",
    },
    {
      tag: "Financial/Legal",
      title: "Financial / Legal",
      summary:
        "Financial review covers payment and milestone phasing. Legal/regulatory review evaluates counterparty ability to fulfill obligations.",
    },
    {
      tag: "Business",
      title: "Business",
      summary:
        "Business review evaluates strategic value, competitor context, financial issues, and final sign-off responsibility.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxMXx8YnVzaW5lc3N8ZW58MHx8fHwxNjkxNDk1Mjk1fDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Business review",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Review Types",
      summary: "Which are types of reviews? (Select all)",
      question: {
        prompt: "Which are types of reviews? (Select all)",
        choices: [
          { label: "Technical Review", value: "technical" },
          { label: "Resource/Schedule Review", value: "resource" },
          { label: "Financial Review", value: "financial" },
          { label: "Legal/Business", value: "legal-business" },
        ],
        correctAnswers: ["technical", "resource", "financial", "legal-business"],
        comment: "All of the above are review types covered.",
      },
    },
    {
      tag: "Amendments",
      title: "Contract Amendments",
      summary:
        "Amendments are reviewed with the same process as original contracts, with all functions re-evaluating and additional teams added as needed.",
    },
    {
      tag: "Orders",
      title: "Orders",
      summary:
        "Order evaluation includes inventory, projected demand profile, and timeline feasibility.",
      body: "Key parts are completeness, capacity, and automation.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxNHx8b3JkZXJ8ZW58MHx8fHwxNjg3MjYyMjAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Orders",
        },
      ],
    },
    {
      tag: "Reseller",
      title: "Reseller and Distribution Agreements",
      summary:
        "Agreements require Swift final approval of external marketing. Distributors cannot make unapproved product promises.",
      body:
        "Swift provides IFU and labeling, and audits distributor QMS and sales records.",
    },
    {
      tag: "Distributors",
      title: "Distributors",
      summary:
        "Distributors must retain distribution records, provide end-customer details, support trademark licensing and order fulfillment, provide quality records, execute contracts, and support top-management sign-off.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link for reference.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938",
          alt: "Complete",
        },
      ],
    },
  ],
};
