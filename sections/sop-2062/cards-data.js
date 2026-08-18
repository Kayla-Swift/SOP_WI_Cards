window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-2062"] = {
  documentType: "SOP",
  documentNumber: "2062",
  documentTitle: "Hardware Development Process",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-2062-SOP-Hardware-Development-[QMS-SOP-2062_A]-8277627427.aspx",
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
      title: "SOP 2062",
      summary: "Hardware Development Process",
      body: "SOP 2062\nHardware Development Process",
    },
    {
      tag: "Button",
      title: "Introduction",
      summary: "Open SOP in SharePoint",
      body: "The document outlines the process and responsibilities for the design and development of hardware products at Swift, focusing on electrical, electronic, and electromechanical (EEE) hardware, and mechanical hardware for use in medical devices.",
      media: [{
        type: "button",
        src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-2062-SOP-Hardware-Development-[QMS-SOP-2062_A]-8277627427.aspx",
        caption: "Open SOP in SharePoint",
        buttonLabel: "Open SOP in SharePoint",
      }],
    },
    {
      tag: "Five Stages",
      title: "Five Stages",
      summary: "The hardware development process is divided into five stages:",
      body: "Concept and Design\nEngineering Validation\nDesign Validation\nProduction Validation\nProduction",
    },
    {
      tag: "Regulatory Standards",
      title: "Regulatory Standards",
      summary: "The document adheres to several standards and regulations, including:",
      body: "FDA QSR § 820.30 Design Controls\nISO 13485 2016 Section 7.3 Design and Development\nIEC 60601-1 Medical electrical equipment",
    },
    {
      tag: "Software Development",
      title: "Software Development",
      summary: "The hardware development process includes planning, development, verification & validation, and maintenance activities.",
      body: "The software element of the hardware devices is developed in accordance with SOP: Software Development.",
      media: [{ type: "image", src: "./sections/sop-2062/images/software-development.png", alt: "Software development visual", caption: "Software Development" }],
    },
    {
      tag: "Prototyping",
      title: "Prototyping",
      summary: "The document emphasizes the importance of prototyping at each stage of the hardware development process.",
      body: "Prototypes vary in fidelity depending on their purpose in the development process.",
    },
    {
      tag: "Quiz",
      title: "Hardware Standards",
      summary: "What standards and regulations are outlined in the document?",
      question: {
        prompt: "What standards and regulations are outlined in the document?",
        choices: [
          { label: "FDA QSR § 820.30 Design Controls", value: "fda" },
          { label: "ISO 13485 2016 Section 7.3 Design and Development", value: "iso" },
          { label: "IEC 60601-1 Medical electrical equipment", value: "iec" },
        ],
        correctAnswers: ["fda", "iso", "iec"],
        comment: "The document adheres to FDA QSR § 820.30 Design Controls, ISO 13485 2016 Section 7.3 Design and Development, and IEC 60601-1 Medical electrical equipment.",
      },
    },
    {
      tag: "Electrical Safety",
      title: "Electrical Safety",
      summary: "The document outlines the process of electrical safety classification in accordance with IEC 60601-1.",
      body: "It also covers the classification of embedded software (firmware) elements in accordance with IEC 62304.",
      media: [{ type: "image", src: "./sections/sop-2062/images/electrical-safety.png", alt: "Electrical safety visual", caption: "Electrical Safety" }],
    },
    {
      tag: "Stage Activities",
      title: "Stage Activities",
      summary: "The document provides a detailed breakdown of the activities, inputs, and outputs for each stage of the hardware development process.",
      body: "The stages run from Concept and Design to Production.",
    },
    {
      tag: "Design Reviews",
      title: "Design Reviews",
      summary: "The document highlights the importance of design reviews at each stage of the hardware development process.",
      body: "QA-RA conducts regular evaluations of the status of hardware documentation.",
      media: [{ type: "image", src: "./sections/sop-2062/images/design-reviews.png", alt: "Design review visual", caption: "Design Reviews" }],
    },
    {
      tag: "Design Transfer",
      title: "Design Transfer",
      summary: "The document outlines the process of design transfer to ensure that staff in production are trained and able to produce consistent quality devices.",
      body: "It also covers managing changes in the production phase.",
    },
    {
      tag: "Concept Design",
      title: "Concept Design",
      summary: "The document includes an appendix with notes on the Concept and Design phase.",
      body: "The appendix details product concept development, systems design, and the transition to the first prototype development stage.",
      media: [{ type: "image", src: "./sections/sop-2062/images/concept-design.png", alt: "Concept design visual", caption: "Concept Design" }],
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 2062 learning set and review the full SOP as needed.",
      media: [{ type: "image", src: "./sections/shared/images/complete.png", alt: "SOP completion illustration", caption: "Completion" }],
    },
  ],
};
