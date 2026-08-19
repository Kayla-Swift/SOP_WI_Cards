window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-26"] = {
  documentType: "SOP",
  documentNumber: "26",
  documentTitle: "Process Validation",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0026-SOP-ProcessValidation-[QMS-SOP0026_D]-8251580101.aspx",
  description: "",
  theme: {
    accent: "#1E5BA8",
    surface: "#ffffff",
    background: "#E8F1F9",
    text: "#1A3A52",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 26",
      summary: "Process Validation",
      body: "SOP 26\nProcess Validation",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Open the complete SOP",
      body: "Open the complete SOP in SharePoint.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0026-SOP-ProcessValidation-[QMS-SOP0026_D]-8251580101.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary: "This procedure applies to all general and special processes related to Swift's medical devices.",
      body: "This procedure applies to all general and special processes related to Swift's medical devices, whether performed in-house or externally at an Approved Supplier site.",
    },
    {
      tag: "Risk Levels",
      title: "Risk Levels",
      summary: "Process Validation and Revalidation shall be proportionate to the risk associated with the use of the process.",
      body: "Process Validation and Revalidation shall be proportionate to the risk associated with the use of the process.\n\nRisk levels are assigned based on impact:\n- Low\n- Medium\n- High\n- Critical",
    },
    {
      tag: "PVR",
      title: "PVR",
      summary: "A Process Validation Report must include the identification of validated software, functions, modules, peripherals, sensors, alarms, etc.",
      body: "A Process Validation Report must include the identification of validated software, functions, modules, peripherals, sensors, alarms, etc., validation methods, simulation techniques, and criteria for approval.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1553484771-371a605b060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwzMHx8cmVwb3J0fGVufDB8fHx8MTY4NzQzNDg1OHww&ixlib=rb4.0.3&q=80&w=1080",
          alt: "Process Validation Report",
          caption: "Process Validation Report",
        },
      ],
    },
    {
      tag: "PVForm",
      title: "Process Validation Form",
      summary: "The Process Validation Form can be found in Confluence as a template.",
      body: "The Process Validation Form can be found in Confluence as a template: QMS TMP 0302 - C Form",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8647835652/",
          caption: "QMS TMP 0302 - C Form",
          buttonLabel: "QMS TMP 0302 - C Form",
        },
      ],
    },
    {
      tag: "Evidence",
      title: "Evidence",
      summary: "Objective evidence must be captured when determining whether the test cases passes or fails.",
      body: "Objective evidence must be captured when determining whether the test cases passes or fails.\n\nWhen special processes are identified, the QA-RA evaluates whether the software needs to be revalidated.\n\nIf revalidation is not necessary, the QA-RA retrieves the previous validation report and extends its approval to cover the new revision of the software.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Complete the SOP 26 learning set and review the full SOP as needed.",
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
