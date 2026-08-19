window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-38"] = {
  documentType: "SOP",
  documentNumber: "38",
  documentTitle: "Medical Device Reporting and Mandatory Problem Reporting",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0038-SOP-Medical-Device-Reporting-and-Mandatory-Problem-Reporting-[QMS-SOP-0038_I]-8553693185.aspx",
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
      title: "SOP 38",
      summary: "Medical Device Reporting and Mandatory Problem Reporting",
      body: "SOP 38\nMedical Device Reporting and Mandatory Problem Reporting",
    },
    {
      tag: "Button",
      title: "Introduction",
      summary: "Open SOP in SharePoint",
      body: "This SOP provides a system and instructions to assign responsibilities and duties for Swift's compliance with Medical Device Reporting regulations and Mandatory Problem Reporting.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0038-SOP-Medical-Device-Reporting-and-Mandatory-Problem-Reporting-[QMS-SOP-0038_I]-8553693185.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Processing",
      title: "Processing",
      summary: "Swift must do the following:",
      body: "1. Process complaints and submit a medical device report to the FDA within 1 working day.\n\n2. Provide a follow-up report within 30 calendar days of the aware date.\n\n3. Meet the 5-day report submission deadline in all adverse incident cases associated with any Swift device that causes or contributes to death or serious injury.",
    },
    {
      tag: "Quiz",
      title: "FDA Malfunction Reporting",
      summary: "Swift Medical must report all malfunctions that are unlikely to result in death or serious injury to the FDA, and must submit reports in an eMDR format or through the ESG eSubmitter.",
      question: {
        prompt: "Is this statement true?",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        correctAnswer: "true",
        correctMessage: "Correct",
        incorrectMessage: "Incorrect. Review FDA malfunction reporting requirements.",
      },
    },
    {
      tag: "Reporting",
      title: "Reporting",
      summary: "Swift is responsible for holding a management review meeting to determine if an incident is reportable.",
      body: "QA/RA must consider the opinion of a health professional, previous incidents, complaint trends, and other relevant details.\n\nPreliminary and final MPR reports must be submitted within 10 or 30 days of aware date.",
    },
    {
      tag: "Quiz",
      title: "Health Canada Reporting",
      summary: "Incidents which do not lead to death or serious injury should not be reported to Health Canada.",
      question: {
        prompt: "Is this statement true?",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        correctAnswer: "true",
        correctMessage: "Correct",
        incorrectMessage: "Incorrect. Review Health Canada reporting requirements.",
      },
    },
    {
      tag: "Preliminary report",
      title: "Preliminary report",
      summary: "The preliminary report should include:",
      body: "- Details of the incident\n- The manufacturer's or importer's preliminary comments\n- The course of action proposed\n- A statement indicating whether a previous report has been made",
    },
    {
      tag: "Report Details",
      title: "Report Details",
      summary: "Final Report includes a description of the incident, new information, explanation of cause, and actions taken.",
      body: "The reporter should provide a list of action items and proposed dates for implementing them, as well as a rationale for the decision.",
    },
    {
      tag: "FDA Workflow",
      title: "FDA Workflow",
      summary: "Review the FDA reporting workflow.",
      media: [
        {
          type: "image",
          src: "./sections/sop-38/images/fda-workflow.png",
          alt: "FDA reporting workflow",
          caption: "FDA Workflow",
          height: "260px",
          fit: "contain",
        },
      ],
    },
    {
      tag: "Health Canada",
      title: "Health Canada",
      summary: "Swift Medical must submit information to Health Canada within 72 hours of specified reportable changes and events.",
      body: "- Becoming aware of any changes to the labeling of a medical device and any recalls, reassessments, suspensions, or authorization revocations\n- A change in the benefits and risks associated with a medical device, and must submit summary reports or information requested by Health Canada\n- Report foreign risk notifications",
    },
    {
      tag: "Health Canada Workflow",
      title: "Health Canada Workflow",
      summary: "Review the Health Canada reporting workflow.",
      media: [
        {
          type: "image",
          src: "./sections/sop-38/images/health-canada-workflow.png",
          alt: "Health Canada reporting workflow",
          caption: "Health Canada Workflow",
          height: "280px",
          fit: "contain",
        },
      ],
    },
    {
      tag: "Records",
      title: "Records",
      summary: "QA/RA must maintain engagement throughout the problem reporting process to ensure all forms are submitted within the specified time for each jurisdiction.",
      body: "MDR/MPR Records are filed and stored separately from other complaints and maintained in accordance with SOP: Control of Records (QMS-SOP-0012).",
      links: [
        {
          text: "SOP: Control of Records (QMS-SOP-0012)",
          url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0012-SOP-Control-of-Records-[QMS-SOP-0012_F]-8632238204.aspx",
        },
      ],
    },
    {
      tag: "Company Policy",
      title: "Company Policy",
      summary: "Swift Medical's own company policy requires deaths and serious injuries to be reported to the FDA within 5 days of becoming aware.",
      body: "This applies irrespective of whether it has been determined internally that the likelihood of a recurrence is remote. Health Canada requires a report for incidents outside of Canada if the Manufacturer intends to take corrective action.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 38 learning set and review the full SOP as needed.",
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
