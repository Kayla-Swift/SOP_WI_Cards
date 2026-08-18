window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2436"] = {
  documentType: "WI",
  documentNumber: "2436",
  documentTitle: "Failure Modes and Effects Analysis",
  documentUrl: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-WI-Failure-Modes-and-Effects-Analysis-FMEA[QMS-WI-2436_D]-8634761243.aspx",
  linkLabel: "Open WI in SharePoint",
  theme: { accent: "#3862bd", surface: "#ffffff", background: "#eef2fa", text: "#2e3c63" },
  cards: [
    { tag: "Title", title: "WI 2436", summary: "Failure Modes and Effects Analysis" },
    { tag: "Document", title: "Introduction", summary: "This work instruction covers Failure Modes and Effects Analysis (FMEA), a tool used to evaluate a process and determine all possible failures.", action: { label: "Open WI in SharePoint", url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-WI-Failure-Modes-and-Effects-Analysis-FMEA[QMS-WI-2436_D]-8634761243.aspx" } },
    { tag: "FMEA", title: "FMEA Process", summary: "FMEA evaluates a process and determines all possible failures." },
    { tag: "Scope", title: "WI Scope", summary: "Failures are scored by severity, occurrence, and detection. Higher Risk Priority Numbers indicate weak points in the process." },
    { tag: "Manufacturing", title: "Adding Items", summary: "The scope covers the full Swift manufacturing process, from receiving raw components to shipping and fulfillment." },
    { tag: "Review", title: "Review Process", summary: "Add FMEA line items when a process failure is found, a customer return is received, or a failure is identified during brainstorming." },
    { tag: "Record", title: "New Record", summary: "Review additions for correct syntax, the correct process step and product, and appropriate severity, occurrence, and detection scores." },
    { tag: "Check", title: "Purpose", summary: "What is the purpose of the document?", question: { prompt: "What is the purpose of the document?", choices: [{ label: "Add line items to Swift FMEA documents", value: "add" }, { label: "Evaluate all possible failures", value: "evaluate" }, { label: "Score failures", value: "score" }], correctAnswer: "add", correctMessage: "Correct.", incorrectMessage: "Incorrect. Review the review-process card." } },
    { tag: "Brainstorm", title: "Brainstorming", summary: "Open FMEA items with an RPN of 20 or more require follow-up, ownership, and a target date for changes that reduce the score." },
    { tag: "Meeting", title: "Meeting Options", summary: "Before creating a new FMEA record, ensure one does not already exist, copy the master form, and update its cells to make it a record." },
    { tag: "Revisions", title: "Revisions Made", summary: "Brainstorm potential failures for every process step. This may take several hours or days depending on the process." },
    { tag: "Schedule", title: "Scope Updates", summary: "Call an urgent stakeholder meeting or add the new FMEA to the next quarterly review meeting." },
    { tag: "References", title: "Reference Docs", summary: "Revisions include updates to scope, reference documents, forms, and work instructions." },
    { tag: "Complete", title: "Complete!", summary: "Use the work instruction while completing the task until you understand the process.", action: { label: "Open WI in SharePoint", url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-WI-Failure-Modes-and-Effects-Analysis-FMEA[QMS-WI-2436_D]-8634761243.aspx" } },
  ],
};
