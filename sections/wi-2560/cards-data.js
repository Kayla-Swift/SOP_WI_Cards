window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2560"] = {
  documentType: "WI",
  documentNumber: "2560",
  documentTitle: "HealX Order Intake",
  documentUrl: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-HealX-Order-Intake-[QMS-WI-2560_C]-9895378965.aspx",
  linkLabel: "Open WI in SharePoint",
  theme: { accent: "#4a4f98", surface: "#ffffff", background: "#eef0f8", text: "#2e3c63" },
  cards: [
    { tag: "Title", title: "WI 2560", summary: "HealX Order Intake" },
    { tag: "Document", title: "Introduction", summary: "This work instruction covers the HealX Order Intake process.", action: { label: "Open WI in SharePoint", url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-HealX-Order-Intake-[QMS-WI-2560_C]-9895378965.aspx" } },
    { tag: "Shopify", title: "Shopify Store", summary: "Customers place HealX orders through a Shopify store. Swift's Shopify webstore processes and forwards orders to the fulfillment center." },
    { tag: "Training", title: "Training Required", summary: "The instruction covers HealX Jira tickets and Shopify, but not how to give the fulfillment center orders or navigate its interface." },
    { tag: "Jira", title: "Jira Tasks", summary: "Everyone carrying out this work instruction must have completed related training." },
    { tag: "Customer", title: "Create Customer", summary: "The process includes checking Jira requests, creating and resubmitting Shopify orders, creating Jira filters, creating Shopify customers, and verifying customer information." },
    { tag: "Check", title: "Document focus", summary: "What is the document about?", question: { prompt: "What is the document about?", choices: [{ label: "The HealX Order Intake process", value: "intake" }, { label: "Giving orders to fulfillment", value: "fulfillment" }, { label: "Creating Jira filters", value: "filters" }], correctAnswer: "intake", correctMessage: "Correct.", incorrectMessage: "Incorrect. Review the Create Customer card." } },
    { tag: "Store", title: "Online Store", summary: "When a request is not a purchase-order document, direct the customer to order at Swift Medical Store." },
    { tag: "PO", title: "Manual Processing", summary: "When a request is a purchase-order document, manually process the order to accommodate customer requirements." },
    { tag: "Input", title: "Input Customer", summary: "Create Shopify customers by entering all customer information, applying appropriate tags, and sending the activation link." },
    { tag: "Verify", title: "Verify Customer", summary: "Verify a new account that places an order with no prior order history is an active customer." },
    { tag: "Information", title: "Verify Information", summary: "Verify whether communication came through Brian Valencia from Healogics, identify PCC, Healogics, or Swift Direct indications, and check the T2 Facilities list in Sigma." },
    { tag: "Check", title: "Purchase orders", summary: "What should you do for a purchase-order request?", question: { prompt: "What should you do if the order request is a Purchase Order document?", choices: [{ label: "Direct the customer to Swift Medical Store", value: "store" }, { label: "Manually process the order", value: "manual" }, { label: "Verify active-customer status", value: "verify" }], correctAnswer: "manual", correctMessage: "Correct.", incorrectMessage: "Incorrect. Review Manual Processing." } },
    { tag: "Complete", title: "Complete!", summary: "Use the work instruction while completing the task until you understand the process.", action: { label: "Open WI in SharePoint", url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-HealX-Order-Intake-[QMS-WI-2560_C]-9895378965.aspx" } },
  ],
};
