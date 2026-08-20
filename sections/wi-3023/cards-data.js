window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-3023"] = {
  documentType: "WI",
  documentNumber: "3023",
  documentTitle: "Ray 1 - Return and Replacement Process",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOP--Swift-Ray-1-Returns-and-Replacements.aspx?web=1",
  linkLabel: "Open WI in SharePoint",
  description: "Swift Ray 1 returns and replacements",
  theme: {
    accent: "#2457a6",
    surface: "#ffffff",
    background: "#eef3fb",
    text: "#22385f",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 3023",
      summary: "Ray 1 - Return and Replacement Process",
    },
    {
      tag: "Document",
      title: "Introduction",
      summary:
        "This procedure defines the steps for Ray 1 returns requested through an RMA, including the damage or issues that qualify for a complimentary replacement or incur a fee. It applies to all Swift Ray 1 devices shipped and distributed to customers that are returned under an RMA.",
      action: {
        label: "Open WI in SharePoint",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOP--Swift-Ray-1-Returns-and-Replacements.aspx?web=1",
      },
      sectionButtons: [
        { label: "5.1 Responsibilities", targetTag: "5.1 Step 1" },
        { label: "5.2 When is a Replacement Sent?", targetTag: "5.2" },
        { label: "5.3 Investigation Process", targetTag: "5.3 Step 1" },
      ],
    },
    {
      tag: "5.1 Step 1",
      title: "5.1 Step 1: Triage Service Requests",
      summary:
        "Customer Support triages service requests and assigns possible Ray hardware issues to Operations.",
    },
    {
      tag: "5.1 Step 2",
      title: "5.1 Step 2: Request an RMA Form",
      summary:
        "After Support and/or Operations determines the device should be returned, request that the customer submit an RMA form through Halo.",
      media: [
        {
          type: "image",
          src: "./sections/wi-3023/images/rma-form.svg",
          alt: "RMA Form: Submit RMA for Ray Devices",
          height: "11rem",
          fit: "contain",
        },
      ],
    },
    {
      tag: "5.1 Step 3",
      title: "5.1 Step 3: Send Replacement Device",
      summary:
        "Upon receiving the RMA ticket, ProdOps sends a replacement device when needed after troubleshooting to ensure minimal disruption to the client workflow.",
    },
    {
      tag: "5.1 Step 4",
      title: "5.1 Step 4: Receive and Investigate",
      summary:
        "When the returned device is received, ProdOps investigates observed damage and defects and documents the current disposition. Operations works with Growth/Customer Success on warranty coverage and client communication.",
    },
    {
      tag: "5.1 Step 5",
      title: "5.1 Step 5: Upload Investigation Results",
      summary:
        "ProdOps uploads investigation results to SharePoint as a copy of the Swift Ray 1 Failure Analysis Form identified in Section 2.",
    },
    {
      tag: "5.1 Step 6",
      title: "5.1 Step 6: Warranty Fee",
      summary:
        "If the warranty is void, Finance, Growth, or the Account Executive advises the customer that a fee is required.",
    },
    {
      tag: "5.1 Step 7",
      title: "5.1 Step 7: Assign Status and Quarantine",
      summary:
        "Assign a status based on the investigation, update all records and logs, and place the returned Ray 1, box, and contents in the quarantine cabinet unless marked for internal use.",
    },
    {
      tag: "5.1 Step 8",
      title: "5.1 Step 8: Close the Halo Ticket",
      summary: "ProdOps closes the Halo ticket once the investigation is complete.",
    },
    {
      tag: "5.2",
      title: "5.2: When is a Replacement Sent?",
      summary:
        "Send a replacement device when Swift Medical receives the Halo ticket RMA form, before receiving and investigating the device, to minimize client downtime.",
    },
    {
      tag: "Check",
      title: "Replacement timing",
      summary: "When should a replacement device be sent?",
      question: {
        prompt: "When should a replacement device be sent?",
        choices: [
          { label: "After the returned device is investigated", value: "after" },
          { label: "Upon receiving the Halo ticket RMA form", value: "upon" },
          { label: "Only after warranty coverage is approved", value: "warranty" },
        ],
        correctAnswer: "upon",
        correctMessage: "Correct. Send the replacement upon receipt of the Halo ticket RMA form.",
        incorrectMessage: "Incorrect. The replacement is sent upon receipt of the Halo ticket RMA form to minimize client downtime.",
      },
    },
    {
      tag: "5.3 Step 1",
      title: "5.3 Step 1: Initial Examination",
      summary:
        "Before altering the device, photograph and note its condition and reported issues. Record whether it was returned in the original box and which contents were included, such as the alcove or charging cube.",
    },
    {
      tag: "5.3 Step 2",
      title: "5.3 Step 2: Functional Check",
      summary:
        "Attempt to fully charge and power on the device, then connect it to the Swift phone application. Record any step that cannot be completed.",
    },
    {
      tag: "5.3 Step 2",
      title: "5.3 Step 2: Root Cause Analysis",
      summary:
        "Complete an RCA based on the client-reported issue and the initial examination. Identify possible causes, define actions for each, and perform them to confirm whether a cause resulted in the defect.",
    },
    {
      tag: "5.3 Step 3",
      title: "5.3 Step 3: Investigation Conclusion",
      summary:
        "Document the root cause of a non-functional device, or record that it has no observable defects and is operating as expected.",
    },
    {
      tag: "5.3 Step 4",
      title: "5.3 Step 4: Determine Device State",
      summary:
        "Mark the device operational and acceptable for internal testing use, or defective and place it into Quarantine, based on Swift Medical policy.",
    },
    {
      tag: "Quality Records",
      title: "Update Quality Records",
      summary:
        "Update the Return Merchandise Authorization Records, Prod Ops - Sinatra Inventory Assembled Devices Device History Record [SIN-DHR-2152_C], Hardware Return Log [QMS-REC-2372_C], and Quarantine Product Log [QMS-REC-2166_B].",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Review the full work instruction while completing the return or replacement process.",
      action: {
        label: "Open WI in SharePoint",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOP--Swift-Ray-1-Returns-and-Replacements.aspx?web=1",
      },
    },
  ],
};
