window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-17"] = {
  documentType: "SOP",
  documentNumber: "17",
  documentTitle: "Software Development (SD) Process",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0017-SOP-Software-Development-Process-[QMS-SOP-0017_C]-8238303169.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#F28C96",
    surface: "#ffffff",
    background: "#FDECEF",
    text: "#3A2E36",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 17",
      summary: "Software Development (SD) Process",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary:
        "Product Development Process breaks the development phase into three SD stages.",
      body: "SOUP means Software of Unknown Provenance.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0017-SOP-Software-Development-Process-[QMS-SOP-0017_C]-8238303169.aspx",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Activities",
      title: "SD Activities",
      summary:
        "Five recurring activities: planning, development, V&V, maintenance, and software safety classification.",
    },
    {
      tag: "Levels",
      title: "SD Levels",
      summary:
        "Five lifecycle levels: project/product, release, epic, story, and task.",
    },
    {
      tag: "Quiz",
      title: "Class C Response",
      summary: "What happens if Swift produces Class C software?",
      question: {
        prompt: "What happens if Swift produces Class C software?",
        choices: [
          { label: "Continued development under this SOP shall halt.", value: "halt" },
          {
            label: "Continued development under this SOP shall continue.",
            value: "continue",
          },
        ],
        correctAnswer: "halt",
      },
    },
    {
      tag: "Project/Product",
      title: "Project/Product",
      summary:
        "Project/product level includes creation, documentation, compliance, planning, design, development, V&V, review, and maintenance.",
    },
    {
      tag: "Release",
      title: "Release Level",
      summary:
        "Release level covers planning/development, V&V, maintenance, risk management evaluations, configuration management, SOUP change checks, communication, and archiving.",
    },
    {
      tag: "Epic/Story",
      title: "Epic / Story Level",
      summary:
        "Epic level delivers release build functionality; story level delivers small iterative units.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw4fHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwwfHx8fDE2ODcyNjgwNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Epic and story level",
        },
      ],
    },
    {
      tag: "Planning",
      title: "Planning and Dev",
      summary:
        "Planning is iterative and continuous; story-level development/V&V targets unit verification; maintenance occurs at release level.",
    },
    {
      tag: "SDP",
      title: "SDP Documents",
      summary:
        "SDP defines task breakdown, schedule, responsibilities, and key plans for integration/testing, verification, risk, documentation, config, and maintenance.",
    },
    {
      tag: "Testing",
      title: "Testing",
      summary:
        "Verification plan defines unit verification and acceptance criteria. Integration, system, and re-testing prevent unintended side effects.",
    },
    {
      tag: "RMP",
      title: "RMP Details",
      summary:
        "RMP includes SOUP anomaly lists, implemented software controls, and software requirements updates through development.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1553034545-32d4cd2168f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyfHxSaXNrJTIwTWFuYWdlbWVudCUyMFBsYW4lMjB8ZW58MHx8fHwxNjg5MDA2NTI1fDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Risk management plan details",
        },
      ],
    },
    {
      tag: "Requirements",
      title: "Requirements",
      summary:
        "Requirement changes trigger hazard/risk analysis updates. SRS is design input and testing traces outputs to inputs.",
      body: "Design transfer includes RRM and Transition to Production Checklist.",
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
