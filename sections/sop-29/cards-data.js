window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-29"] = {
  documentType: "SOP",
  documentNumber: "29",
  documentTitle: "Control of Inspection, Measuring and Test Equipment",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0029-SOP-Control-ofInspection,-Measuring-and-TestEquipment-[QMS-SOP0029_F]-9377874042.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#6C63FF",
    surface: "#ffffff",
    background: "#E8E5FF",
    text: "#263238",
  },
  cards: [
    { tag: "Title", title: "SOP 29", summary: "Control of Inspection, Measuring and Test Equipment" },
    {
      tag: "Button",
      title: "Introduction",
      summary:
        "This procedure provides a system and instructions to maintain key process equipment and support systems.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0029-SOP-Control-ofInspection,-Measuring-and-TestEquipment-[QMS-SOP0029_F]-9377874042.aspx",
          buttonLabel: "Open SOP in SharePoint",
          caption: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Key Details",
      summary:
        "The most important details to include are equipment name, manufacturer, serial number, maintenance requirements, last certification, person or facility who performed the certification, due date of next certification, status, and work instructions/forms.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxfHxmb3JtfGVufDB8fHx8MTY4NzQ0OTgxOHww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Key Details",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Engineering",
      summary:
        "Engineering equipment is subject to the requirements in this procedure, with the Validation Date only in the Equipment Log and marked as 'Certification Not Required'. The most important details are that any component used for raw material acceptance testing must be labeled as a master component and go through equipment validation as per SOP.",
    },
    {
      tag: "Quiz",
      title: "Custom Production Equipment",
      summary: "Test your knowledge on custom production equipment documentation.",
      question: {
        prompt:
          "Custom production equipment should not be documented in a manner consistent with company's document control policies and commensurate with the risk associated with the equipment.",
        choices: [
          {
            label: "True",
            value: "true",
          },
          {
            label: "False",
            value: "false",
          },
        ],
        correctAnswer: "false",
        comment:
          "Custom production equipment must be documented in a manner consistent with company's document control policies and commensurate with the risk associated with the equipment.",
      },
    },
    {
      tag: "Standards",
      title: "Measuring",
      summary:
        "Measuring equipment must be calibrated or verified against measurement standards traceable to international measurement standards, adjusted as necessary, have identification, be safeguarded from adjustments that would invalidate the measurement results, and be protected from damage and deterioration during handling, maintenance, and storage.",
    },
    {
      tag: "Standards",
      title: "Note:",
      summary:
        "If a piece of equipment that requires certification is found to be out of tolerance, it must be tagged 'Out of Certification - Do Not Use' and an investigation must be conducted. Equipment outside of Swift can be used when appropriate channels are followed.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxMHx8cGFwZXJ8ZW58MHx8fHwxNjg5MDg5ODQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Note on certification",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Out of Certification Tag",
      summary: "What should out of tolerance equipment be tagged as?",
      question: {
        prompt:
          "If a piece of equipment that requires certification is found to be out of tolerance, an investigation must be conducted and it should be tagged with what?",
        choices: [
          {
            label: '"Out of Certification - Do Not Use"',
            value: "correct-tag",
          },
          {
            label: '"DNU"',
            value: "dnu",
          },
          {
            label: '"Certification"',
            value: "certification",
          },
        ],
        correctAnswer: "correct-tag",
        comment: '"Out of Certification - Do Not Use"',
      },
    },
    {
      tag: "Standards",
      title: "Inspection",
      summary:
        "If the out-of-certified condition does not impact the results of any tests or QA-RA procedures, the equipment must be repaired and re-certified, labeled with its limitations of use, or discarded. Inspection of maintenance activities and adherence to applicable maintenance schedules are inspected within the framework of internal audits of the quality system.",
    },
    {
      tag: "Standards",
      title: "Maintenance Log",
      summary:
        "The Equipment Maintenance log must contain: equipment certification requirements for frequency, methods, last maintenance, and next due maintenance. Certification and Calibration Records are documented after calibrating, certifying, validating, performing preventive maintenance, or verifying equipment.",
    },
    { tag: "Complete", title: "Complete!", summary: "You can explore the full SOP and save the link to the page for reference as needed." },
  ],
};
