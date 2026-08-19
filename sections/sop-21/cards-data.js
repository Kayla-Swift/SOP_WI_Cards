window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-21"] = {
  documentType: "SOP",
  documentNumber: "21",
  documentTitle: "Production",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0021-SOP-Production-[QMS-SOP-0021_E]-8714223798.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#8ED6E0",
    surface: "#ffffff",
    background: "#EDF9FB",
    text: "#223841",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 21",
      summary: "Production (Version E)",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary:
        "Covers device production responsibilities and quality planning. Operations and QA-RA leadership align risk management with ISO 14971.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0021-SOP-Production-[QMS-SOP-0021_E]-8714223798.aspx",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Production",
      title: "Production / Facility",
      summary:
        "Multidisciplinary team leads production and quality planning. Operations lead handles incoming components and RA communication.",
      body:
        "Facility controls are maintained, change control is followed, and ordering/receiving is by lot work order.",
      links: [
        {
          text: "Change Control SOP",
          url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8251576036",
        },
      ],
    },
    {
      tag: "Supplier",
      title: "Operations and Supplier",
      summary:
        "Operations lead creates lot order/report; supplier confirms shipment; purchase log is updated.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1605752995290-dde649b8da06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyfHxzdXBwbGllcnxlbnwwfHx8fDE2ODczNjM3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Operations and supplier",
        },
      ],
    },
    {
      tag: "Assembly",
      title: "Testing and Assembly",
      summary:
        "Acceptance tests are documented in supplier non-conforming report form. Devices are assembled per WI and QC'd before packaging/shipping.",
    },
    {
      tag: "Quiz",
      title: "Order Fulfillment",
      summary:
        "What elements are included before distribution in the LHR of Device History Record?",
      question: {
        prompt:
          "Order Fulfillment includes what elements before distribution in the LHR of Device History Record?",
        choices: [
          { label: "Placing a sale order", value: "sale-order" },
          {
            label: "Developing marketing materials",
            value: "marketing",
          },
          { label: "Final inspection", value: "final-inspection" },
          {
            label: "Packaging and shipping",
            value: "packaging-shipping",
          },
        ],
        correctAnswers: ["sale-order", "final-inspection", "packaging-shipping"],
        comment:
          "Order fulfillment also captures manufactured and approved product quantities.",
      },
    },
    {
      tag: "Records",
      title: "Records",
      summary:
        "Engineering and Customer Success maintain distribution records to support responses to defective unit notifications.",
      body:
        "QA-RA and Operations Lead review logs, purchase orders, and controlled documents.",
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