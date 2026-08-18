window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-22"] = {
  documentType: "SOP",
  documentNumber: "22",
  documentTitle: "Risk Management",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0022-SOP-Risk-Management-[QMS-SOP-0022_G]-8689221641.aspx",
  description: "",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 22",
      summary: "Risk Management",
      body: "SOP 22\nRisk Management",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Open the complete SOP",
      body: "Open the complete SOP in SharePoint.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0022-SOP-Risk-Management-[QMS-SOP-0022_G]-8689221641.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary: "Swift's risk management process is part development process and part of the QMS.",
      body: "It includes risk management plans, risk analyses, risk evaluations, and control measures. It meets the requirements of ISO 14971:2019.",
    },
    {
      tag: "Process Roles",
      title: "Process Roles",
      summary: "The Process Roles include the Product Manager, QA/RA, Risk Management Team (RMT), and Product Manager.",
      body: "The RMT evaluates whether a design or process FMEA is required, decides if a design or process FMEA is warranted, and rates the Occurrence, Severity and Detectability of each failure found.",
    },
    {
      tag: "RM Process",
      title: "RM Process",
      summary: "The Risk Management Process involves:",
      body: "- assigning responsibilities to an RMT\n- performing Hazard Analysis/Risk Evaluation\n- identifying mitigation strategies\n- weighing residual risks against product benefits",
    },
    {
      tag: "Process Visual",
      title: "Risk Management Process Visual",
      summary: "Outputs include Risk Management Plan, Usability Engineering Plan, and Usability V&V Report.",
      body: "Review the visual process and its outputs.",
      media: [
        {
          type: "image",
          src: "./sections/sop-22/images/risk-management-process.png",
          alt: "Risk management process visual placeholder",
          caption: "Replace this placeholder with the uploaded process visual.",
        },
      ],
    },
    {
      tag: "RMT Documents",
      title: "RMT Documents",
      summary: "The RMT must maintain a set of risk management documents.",
      body: "- Hazard Analysis Document\n- Failure Mode and Effect Analysis (PFMEA)\n- Risk Management Plan and Report\n- Risk Management Status document\n\nThese documents should provide traceability between software hazards and show evidence of compliance.",
      media: [
        {
          type: "image",
          src: "./sections/sop-22/images/rmt-documents.jpg",
          alt: "RMT documents placeholder",
          caption: "Replace this placeholder with the uploaded RMT documents image.",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "RMT Responsibility",
      summary: "The RMT is responsible for assigning a software safety classification ranking based on the level of risk associated with the product.",
      body: "A Risk Management File is maintained to provide traceability for each identified hazard.",
      question: {
        prompt: "Is the statement about RMT responsibility true?",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        correctAnswer: "true",
        correctMessage: "Correct",
        incorrectMessage: "Incorrect. Review the RMT responsibility and risk file requirements.",
      },
    },
    {
      tag: "Hazard Analysis",
      title: "Hazard Analysis",
      summary: "Hazard Analysis is conducted to identify potential hazards and estimate risk.",
      body: "- identify potential hazards\n- initiate causes / outcomes\n- identify potential causes of software item contributing to hazardous situation\n- estimate risk\n- assign severity\n- document sequences of events that could result in hazardous situation\n- evaluate any anomaly relevant to a SOUP item",
      media: [
        {
          type: "image",
          src: "./sections/sop-22/images/hazard-analysis.jpg",
          alt: "Hazard analysis placeholder",
          caption: "Replace this placeholder with the uploaded hazard analysis image.",
        },
      ],
    },
    {
      tag: "Part 1",
      title: "Part 1: Assign Severity",
      summary: "Assign severity from Category IV to Category I.",
      body: "1. Category IV: Critical - Potential of death or serious injury\n2. Category III: Major - Potential of minor injury\n3. Category II: Minor - Little potential of injury\n4. Category I: Negligible - There is no reasonable risk of injury",
    },
    {
      tag: "Part 2",
      title: "Part 2: Assign Risk Probability",
      summary: "Assign risk probability from Frequent to Remote.",
      body: "1. Frequent - Likely to occur frequently in the operating life.\n2. Probable - Likely to occur multiple times in the operating life.\n3. Occasional - Unlikely, but may occur in the operating life.\n4. Remote - Very unlikely to occur in the life of the system.",
    },
    {
      tag: "Part 3a",
      title: "Part 3a: Assign Risk Classifications",
      summary: "High and Moderate risk classifications require action.",
      body: "High (H)\nTake action to eliminate the hazard or bring risk classification to Low or Negligible level.\n\nModerate (M)\nTake action to bring risk classification to Low or Negligible level.",
    },
    {
      tag: "Part 3b",
      title: "Part 3b: Assign Risk Classifications",
      summary: "Low and Negligible risk classifications guide risk reduction.",
      body: "Low (L)\nPerform risk/benefit analysis. Take appropriate action to reduce the risk of hazard as far as possible.\n\nNegligible (N)\nRisk reduction need not be actively pursued. Risk is negligible compared with the risk of other hazards that are accepted and has been reduced as far as possible.",
    },
    {
      tag: "Part 4",
      title: "Part 4: Evaluate Risk Probability",
      summary: "Based on severity and risk, determine the risk probability using Table 4 in the SOP.",
      body: "Use the risk matrix in the SOP to evaluate risk probability.",
      media: [
        {
          type: "image",
          src: "./sections/sop-22/images/risk-probability.png",
          alt: "Risk probability matrix placeholder",
          caption: "Replace this placeholder with the uploaded risk probability matrix.",
        },
      ],
    },
    {
      tag: "Failure and Risk",
      title: "Failure and Risk",
      summary: "Failure or latent flaws can cause death or serious injury to the patient and/or operator, or indirectly affect them.",
      body: "Risk probabilities should be estimated to determine the numerical acceptability of the risks. Risk classifications should be assigned to reduce the severity or likelihood of the hazard.",
    },
    {
      tag: "Risk Management",
      title: "Risk Management",
      summary: "Process FMEA is used to identify potential failure modes, rate them, evaluate them, and determine if they are reducible.",
      body: "It uses the Risk Management Plan to define the Maximum tolerated Risk (MTR) for each failure mode.",
      media: [
        {
          type: "image",
          src: "./sections/sop-22/images/risk-management.jpg",
          alt: "Risk management placeholder",
          caption: "Replace this placeholder with the uploaded risk management image.",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Risk Control Options",
      summary: "Swift considers all risk control options available to mitigate hazards and take corrective and preventive action.",
      body: "Risk control options and risk assessment help determine whether a new product should be introduced.",
      question: {
        prompt: "Do you think Swift considers all risk control options available to mitigate a hazard, take corrective and preventive action, and use risk assessment to decide whether a new product should be introduced?",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        correctAnswer: "yes",
        correctMessage: "Correct. Swift does consider all risks.",
        incorrectMessage: "Incorrect. Swift does consider all risks.",
      },
    },
    {
      tag: "Verify Risk Control",
      title: "Verify Risk Control",
      summary: "Swift will verify and validate risk control and mitigation, evaluate residual risk, and determine if medical product safety is adequate.",
      body: "Swift will determine if new hazards have been introduced and evaluate the acceptability of residual risk.",
      media: [
        {
          type: "image",
          src: "./sections/sop-22/images/verify-risk-control.jpg",
          alt: "Verify risk control placeholder",
          caption: "Replace this placeholder with the uploaded risk control image.",
        },
      ],
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 22 learning set and review the full SOP as needed.",
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
