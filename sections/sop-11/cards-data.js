window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-11"] = {
  documentType: "SOP",
  documentNumber: "11",
  documentTitle: "Document Control",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0011-SOP-Document-Controls-[QMS-SOP-0011_G]-9352019970.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#8CBF26",
    surface: "#ffffff",
    background: "#F2F7E8",
    text: "#263238",
  },
  cards: [
    { tag: "Title", title: "SOP 11", summary: "Document Control" },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary:
        "This SOP outlines process and responsibilities for document creation, review, approval, distribution, and control of design and manufacturing changes.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0011-SOP-Document-Controls-[QMS-SOP-0011_G]-9352019970.aspx",
          buttonLabel: "Open SOP in SharePoint",
          caption: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Regulatory",
      title: "Regulatory Standards",
      summary:
        "Applies to all device design changes after design completion, including regulator release, clinical trials, and production release.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1588582669551-8617e4a757bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxfHxyZWd1bGF0aW9ufGVufDB8fHx8MTY4ODk5NTk3Mnww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Regulatory standards",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Standards Met",
      summary:
        "Targets FDA QSR 820.30(i), ISO 13485:2016 section 7.3.9, and Canadian Medical Device Regulations.",
    },
    {
      tag: "Tracking",
      title: "Change Tracking",
      summary:
        "Requests can be initiated internally or externally. Software changes use the Change Control Database; hardware changes use the Change Order Log.",
      body: "Approved documents are stored in the DMS for employees.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/bbc5eaad-ede1-4b59-846b-ad6386012ce2",
          alt: "Change tracking",
        },
      ],
    },
    {
      tag: "Design Project",
      title: "Design Project",
      summary:
        "Changes are processed by design project under Product Development Process SOP, ECO, or temporary process deviation.",
    },
    {
      tag: "Quiz",
      title: "Purpose Check",
      summary: "What is the purpose of this document?",
      question: {
        prompt: "What is the purpose of this document?",
        choices: [
          {
            label:
              "To outline process and responsibilities for controlling and documenting design and manufacturing changes",
            value: "purpose",
          },
          {
            label: "To meet standards in the FDA and FBI",
            value: "fbi",
          },
          {
            label: "To track software and hardware changes only",
            value: "tracking-only",
          },
        ],
        correctAnswer: "purpose",
        comment:
          "Authors are responsible for initiating the creation of new controlled documents.",
      },
    },
    {
      tag: "ECO",
      title: "ECO Form",
      summary:
        "Any Swift employee may initiate an Engineering Change Order for one or more changes to hardware products and related software controls.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxfHxmb3JtfGVufDB8fHx8MTY4ODk5NjYzOHww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "ECO form",
        },
      ],
    },
    {
      tag: "CCB",
      title: "CCB Review",
      summary:
        "The Change Control Board authorizes implementation after Hardware Design Change Checklist completion. At least one reviewer is required.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyfHxyZXZpZXd8ZW58MHx8fHwxNjg4OTk2NzA4fDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "CCB review",
        },
      ],
    },
    {
      tag: "Software",
      title: "Software Changes",
      summary:
        "Software change control includes documenting proposed changes, evaluating impact, and implementing via formal SD process or patch release.",
    },
    {
      tag: "Deviations",
      title: "Process Deviations",
      summary:
        "Temporary changes to production or quality procedures use a Process Deviation Form and require QA-RA and Functional Lead approval.",
    },
    {
      tag: "Records",
      title: "Quality Records",
      summary:
        "Quality records such as ECO and Process Deviation forms document and track changes for compliance.",
      body: "Records are retained for at least two years or for the product lifetime.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxfHxwYXBlcnMlMjB8ZW58MHx8fHwxNjg4OTk2ODI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Quality records",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Records Check",
      summary:
        "What form is used to document and track design or process changes and ensure compliance?",
      question: {
        prompt:
          "What form is used to document and track design or process changes and ensure compliance?",
        choices: [
          { label: "Quality records", value: "quality-records" },
          { label: "Engineering Change Order Form", value: "eco-form" },
          { label: "Process Deviation Form", value: "pd-form" },
        ],
        correctAnswer: "quality-records",
        comment:
          "Engineering Change Order and Process Deviation forms are examples of quality records.",
      },
    },
    {
      tag: "Training",
      title: "Document Training",
      summary:
        "Affected individuals must review and be retrained before the effective date when required.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "You can explore the full SOP and save the link to the page for reference as needed.",
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
