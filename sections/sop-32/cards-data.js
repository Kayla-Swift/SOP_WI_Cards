window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-32"] = {
  documentType: "SOP",
  documentNumber: "32",
  documentTitle: "Quality System Audits",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0032-SOP-QualitySystem-Audits-[QMS-SOP-0032_G]-9553772545.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#5B9BD5",
    surface: "#ffffff",
    background: "#D9E8F5",
    text: "#263238",
  },
  cards: [
    { tag: "Title", title: "SOP 32", summary: "Quality System Audits" },
    {
      tag: "Button",
      title: "Introduction",
      summary:
        "This procedure identifies actions and responsibilities for conducting and reporting internal audits of the Swift Quality Management System.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0032-SOP-QualitySystem-Audits-[QMS-SOP-0032_G]-9553772545.aspx",
          buttonLabel: "Open SOP in SharePoint",
          caption: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Roles (QA-RA & Auditors)",
      summary:
        "QA-RA are responsible for: organizing internal quality audits, ensuring corrective actions are closed out in a timely manner, and reporting results to management. The Auditor/Audit Team is responsible for arranging a time for the audit, reviewing the SOP, and completing the audit and report.",
    },
    {
      tag: "Standards",
      title: "Lead Auditor",
      summary:
        "The QA-RA is responsible for selecting the lead auditor and notifying the appropriate auditees' department representatives. The lead auditor must possess a strong understanding of ISO:13485 standard and the regulatory requirements of applicable jurisdictions.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw3fHxtYW5hZ2VyfGVufDB8fHx8MTY4OTE2MzI0MHww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Lead Auditor",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Key Roles with Audit",
      summary:
        "The Department Team is responsible for cooperating with the auditor(s) in interviews and providing information. Management is responsible for resolving and facilitating a solution if Corrective Actions cannot be agreed between auditor and auditee's representative.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1565021324587-5fd009870e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxNnx8ZGFyayUyMGJsdWV8ZW58MHx8fHwxNjg5MTczNDUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Key roles with Audit",
        },
      ],
    },
    {
      tag: "Standards",
      title: "QSA Process",
      summary:
        "The Quality System Audit Process is designed to foster employee awareness and continuous process improvement. The Regulatory Affairs Lead is designated by Top Management to lead the audit effort by scheduling, conducting, reporting and managing the internal audit process.",
    },
    {
      tag: "Standards",
      title: "Evaluating QMS Processes",
      summary:
        "Swift evaluates QMS processes by determining if: the process is identified and appropriately defined, responsibilities are assigned, procedures are implemented and maintained, and the process is effective in achieving desired results.",
    },
    {
      tag: "Standards",
      title: "Audits",
      summary:
        "Audits will involve an entrance briefing with the QA-RA and Department Representative to discuss the purpose and requirements of the audit. Below is the Audit workflow.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/c717c630-16b0-4785-87a7-6e9dbde1f3e3",
          alt: "Audit workflow",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Audit Records",
      summary:
        "At the end of the audit, a QMS Audit Record will be completed including: dates, non-conformances raised during the audit, follow-up on corrective actions from previous audits, observations noted, and a conclusion statement summarizing the number of non-conformances raised and processes audited.",
    },
    {
      tag: "Quiz",
      title: "Previous Audit Findings",
      summary: "Are findings from previous audits reviewed during the audit?",
      question: {
        prompt:
          "Any findings from previous audits will be reviewed to follow up any observations and outstanding corrective actions.",
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
        correctAnswer: "true",
        comment: "Yes, findings are reviewed and followed up on!",
      },
    },
    {
      tag: "Standards",
      title: "CPARs after Audit",
      summary:
        "Any CPARs (Corrective / Preventative Action Requests) raised during the audit will have a follow-up 'completion' date assigned. Non-conformances categorized as Critical must be corrected with the highest priority.",
    },
    {
      tag: "Standards",
      title: "Corrective Actions",
      summary:
        "Swift requires corrective action to be agreed on as a priority for major non-conformances. Minor non-conformances require corrective action, but are not a high priority. These actions are CPARs. They are tracked using the Corrective and Preventative Action Request Form (QMS-REC-0062).",
    },
    {
      tag: "Quiz",
      title: "Team Member Non-Conformance",
      summary: "Is corrective action required for team member non-conformance?",
      question: {
        prompt:
          "Is corrective action required if a Swift Team member is non-conforming to SOPs or protocols?",
        choices: [
          {
            label: "Yes!",
            value: "yes",
          },
          {
            label: "No.",
            value: "no",
          },
        ],
        correctAnswer: "yes",
        comment:
          "Process Monitoring QA shall periodically review audit reports and CPARs to ensure a pattern of timely and successful action in response to non-conformances.",
      },
    },
    {
      tag: "Standards",
      title: "Checklist/Record",
      summary:
        "Quality Records Description: Audit Checklists record findings (positive and negative) by the auditors during the audit. QMS Audit Record includes non-conformances raised during the audit and follow-up on corrective actions from previous audits, as well as any observations noted. Audit Report references any CPARs to the Department Representative for evaluation and action within one month of the audit.",
    },
    { tag: "Complete", title: "Complete!", summary: "You can explore the full SOP and save the link to the page for reference as needed." },
  ],
};
