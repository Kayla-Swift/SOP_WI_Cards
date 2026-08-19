window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-19"] = {
  documentType: "SOP",
  documentNumber: "19",
  documentTitle: "Software Configuration Management (SCM)",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0019-SOP-Software-Configuration-Management-[QMS-SOP-0019_B]-8238303176.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#CAD6E4",
    surface: "#ffffff",
    background: "#F2F6FB",
    text: "#2B3A4A",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 19",
      summary: "Software Configuration Management (SCM)",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary:
        "SCM ensures orderly, repeatable control of software elements from architecture to post-delivery.",
      body: "Applies to all software development and IT element configuration.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0019-SOP-Software-Configuration-Management-[QMS-SOP-0019_B]-8238303176.aspx",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Process",
      title: "Process",
      summary:
        "SCM controls product architecture, tooling, testing, and environments; includes reviewing records and check-out/commit/tag activities.",
    },
    {
      tag: "Configuration",
      title: "Configuration",
      summary:
        "Configuration management activities are documented in SCM tools for auditability, including software, tests, and environment at milestones.",
    },
    {
      tag: "Control",
      title: "Control",
      summary:
        "Version control is maintained for produced software variants, and each element is uniquely identified at each release milestone.",
    },
    {
      tag: "Quiz",
      title: "Version Control",
      summary: "Is there version control at Swift?",
      question: {
        prompt: "Is there version control at Swift?",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        correctAnswer: "yes",
      },
    },
    {
      tag: "Software Changes",
      title: "Software Changes",
      summary:
        "Software items may only change with approved change requests and must be evaluated for hazards, mitigations, and safety class reclassification.",
    },
    {
      tag: "Training",
      title: "Training",
      summary:
        "Engineering and QA training is required. Monitoring ensures docs meet SOP requirements.",
      body:
        "Quality records include SCM procedure, configuration activity log, software epic configuration record, and software release configuration record.",
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
