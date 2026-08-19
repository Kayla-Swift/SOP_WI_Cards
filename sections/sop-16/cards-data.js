window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-16"] = {
  documentType: "SOP",
  documentNumber: "16",
  documentTitle: "Product Development Process",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0016-SOP-Product-Development-Process-[QMS-SOP-0016_E]-9636413441.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#A6CF2A",
    surface: "#ffffff",
    background: "#F5F9E7",
    text: "#1F2B38",
  },
  cards: [
    { tag: "Title", title: "SOP 16", summary: "Product Development Process" },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary:
        "Phase-based process with defined entry and exit criteria. Deviations are documented in the Product Development Plan.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0016-SOP-Product-Development-Process-[QMS-SOP-0016_E]-9636413441.aspx",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Change Control",
      title: "Change Control",
      summary:
        "Minor software changes such as maintenance and minor feature releases are handled by the Change Control SOP.",
      links: [
        {
          text: "Change Control SOP",
          url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8251576036/0023+SOP+Change+Control+QMS-SOP-0023+F",
        },
      ],
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxN3x8Y29kaW5nJTIwY2hhbmdlfGVufDB8fHx8MTY4OTAwNDkwNnww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Change control",
        },
      ],
    },
    {
      tag: "7 Steps",
      title: "Product Development Process",
      summary:
        "Seven steps: research and development, concept and design, development, verification/testing, validation and pre-production, production and support, end of life.",
    },
    {
      tag: "4 Phases",
      title: "Phases for each step",
      summary:
        "Each step has entry criteria, tasks, documentation, and exit criteria.",
    },
    {
      tag: "Initiation",
      title: "Project Initiation",
      summary:
        "Project can begin in Research or Product Design and Concept. Starting phase is identified when project manager is assigned.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw3fHxwcm9qZWN0JTIwbWFuYWdlcnxlbnwwfHx8fDE2ODkwMDU5OTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Project initiation",
        },
      ],
    },
    {
      tag: "Requirements",
      title: "Requirement Document",
      summary:
        "Research and preliminary development inform concept/design and a high-level business and market requirements document.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/4a5461ca-e448-46fa-b04a-db4c3ac8959f",
          alt: "Requirement document",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Starting Phase",
      summary: "Which phase is the starting phase for a project?",
      question: {
        prompt: "Which phase is the starting phase for a project?",
        choices: [
          { label: "Research", value: "research" },
          { label: "Product Design and Concept", value: "concept" },
          { label: "Change Control", value: "change-control" },
        ],
        correctAnswer: "concept",
        comment:
          "A project can begin in Research or Product Design and Concept once the project manager is assigned.",
      },
    },
    {
      tag: "Development",
      title: "Technical Design",
      summary:
        "Development translates design inputs into a technical design specification and then implements it.",
    },
    {
      tag: "Verification",
      title: "Verification Testing",
      summary:
        "Verification tests the technical design specification to confirm intended requirements are met.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/9f8c7b1b-a4ca-418d-8935-123974e81aa3",
          alt: "Verification testing",
        },
      ],
    },
    {
      tag: "Validation",
      title: "Validation Phase",
      summary:
        "Operations translates device design into production specs such as work instructions, training, and BOM.",
    },
    {
      tag: "End of Life",
      title: "End-of-Life",
      summary:
        "End-of-Life closes product activities and retains records per Control of Records SOP.",
      links: [
        {
          text: "Control of Records SOP",
          url: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8632238204/0012+SOP+Control+of+Records+QMS-SOP-0012+F",
        },
      ],
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/c769640d-d649-4f03-8f91-3fd08a749b5c",
          alt: "End of life",
        },
      ],
    },
    {
      tag: "Documentation",
      title: "Process Documentation",
      summary:
        "Primary documents include product development plan, risk management plan, usability engineering plan, and design history file.",
    },
    {
      tag: "Quiz",
      title: "Document Check",
      summary:
        "What document is developed and maintained throughout product development?",
      question: {
        prompt:
          "What document is developed and maintained throughout the product development process?",
        choices: [
          { label: "Project Manager Folder", value: "pm-folder" },
          { label: "Risk Management Portfolio", value: "risk-portfolio" },
          {
            label: "Usability Engineering Procedure",
            value: "ue-procedure",
          },
          { label: "Design History File", value: "dhf" },
        ],
        correctAnswer: "dhf",
      },
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
