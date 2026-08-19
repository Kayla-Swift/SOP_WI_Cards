window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-23"] = {
  documentType: "SOP",
  documentNumber: "23",
  documentTitle: "Change Control",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0023-SOP-ChangeControl-[QMS-SOP0023_F]-8251576036.aspx",
  description: "",
  theme: {
    accent: "#6B5B95",
    surface: "#ffffff",
    background: "#F5E6FF",
    text: "#2D2D44",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 23",
      summary: "Change Control",
      body: "SOP 23\nChange Control",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Open the complete SOP",
      body: "Open the complete SOP in SharePoint.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0023-SOP-ChangeControl-[QMS-SOP0023_F]-8251576036.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary: "This document outlines the process and responsibilities for controlling and documenting medical device product design changes and manufacturing process changes at Swift.",
      body: "This document outlines the process and responsibilities for controlling and documenting medical device product design changes and manufacturing process changes at Swift.",
    },
    {
      tag: "Change Control",
      title: "Change Control",
      summary: "Change Control includes three components: Engineering Change Order, Software Change Control, and Process Deviation.",
      body: "This process includes the product design and manufacturing changes initiated by company, consultants, and contractors.\n\nThe three components are:\n1. Engineering Change Order\n2. Software Change Control\n3. Process Deviation",
    },
    {
      tag: "1. Engineering Change",
      title: "1. Engineering Change",
      summary: "Swift uses an Engineering Change Order Form (ECO) for change control governing hardware products.",
      body: "Swift uses an Engineering Change Order Form (ECO) for change control governing hardware products.\n\nThe form includes a description of change, an impact assessment, verification and validation tasks, regulatory considerations, and release implementation authorization.",
    },
    {
      tag: "2. Software Change",
      title: "2. Software Change",
      summary: "Software changes are tracked in the Change Control Database and assigned to a future release version of the product.",
      body: "Software changes are tracked in the Change Control Database and assigned to a future release version of the product.\n\nHardware changes are tracked in the Change Order Log.\n\nAn Engineering Change Order (ECO) is initiated by all Swift Employees for a change or collection of changes to be implemented.",
    },
    {
      tag: "Software Change Process",
      title: "Software Change Control Process",
      summary: "View the image below to see the specific steps.",
      body: "View the image below to see the specific steps.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/82846fbf-e552-484c-9ecd-3c81bd1cefb7",
          alt: "Software Change Control Process",
          caption: "Software Change Control Process",
        },
      ],
    },
    {
      tag: "3. Process Deviation",
      title: "3. Process Deviation",
      summary: "QA-RA and Functional Leads are responsible for completing a Process Deviation Form.",
      body: "QA-RA and Functional Leads are responsible for completing a Process Deviation Form, incorporating the deviation into the process or procedures, recording any required training, and signing off on the closing of the deviation.",
    },
    {
      tag: "Quiz",
      title: "ECO Form Components",
      summary: "The ECO form includes specific components.",
      body: "The ECO form is comprised of the following: Description of Change, Product/Process to be changed, Engineering Documents, Impact of Change & Disposition.",
      question: {
        prompt: "Are these the components of the ECO form?",
        choices: [
          { label: "These are in the ECO form", value: "yes" },
          { label: "These are NOT in the ECO form", value: "no" },
        ],
        correctAnswer: "yes",
        correctMessage: "Correct",
        incorrectMessage: "Incorrect. Review the ECO form requirements.",
      },
    },
    {
      tag: "Hardware/Software",
      title: "Hardware/Software",
      summary: "The Change Control Board (CCB) reviews and authorizes changes.",
      body: "The Change Control Board (CCB) reviews the ECO form and authorizes the implementation of the change in production or release of product as appropriate once the Hardware Design Change Checklist is complete.\n\nSoftware or system change requests are documented in writing and include a description of the proposed change, rationale for the change, and approval date.",
    },
    {
      tag: "Initiate Change",
      title: "Initiate Change",
      summary: "Changes to Swift's software are initiated once a need is demonstrated.",
      body: "Changes to Swift's software are initiated once a need is demonstrated.\n\nIssues reported by partners, evaluators, or end-users are received in accordance with SOPs.\n\nThe Change Control Board (CCB) is responsible for evaluating and approving changes to Swift Medical applications, software, and networks.",
    },
    {
      tag: "Changes/Patches",
      title: "Changes / Patches",
      summary: "Major changes are controlled through formal software development processes, while minor changes are controlled through the patch release process.",
      body: "Major changes are controlled through the formal software development processes, while minor changes are controlled through the patch release process.\n\nPatch releases must not contain new features, and all changes must be reviewed, verified, and validated by assigned approvers before implementation.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1529458274588-9afd523858df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyNnx8cGF0Y2h8ZW58MHx8fHwxNjg5MDgyODQ4fDA&ixlib=rb4.0.3&q=80&w=1080",
          alt: "Changes and Patches",
          caption: "Changes and Patches",
        },
      ],
    },
    {
      tag: "Software Process",
      title: "Software Change Control Process",
      summary: "The process includes evaluation of impact, risk assessment, usability assessments, and formal risk management activities.",
      body: "This includes:\n- evaluation of impact on constituent parts\n- risk assessment\n- usability assessments\n- production processes\n- business assessments\n- formal risk management activities",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 23 learning set and review the full SOP as needed.",
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
