window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sin-wi-3023"] = {
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
        "This procedure defines the steps for Ray 1 returns requested through an RMA, including the damage or issues that qualify for a complimentary replacement or incur a fee.",
      action: {
        label: "Open WI in SharePoint",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOP--Swift-Ray-1-Returns-and-Replacements.aspx?web=1",
      },
    },
    {
      tag: "Scope",
      title: "Scope",
      summary:
        "This procedure applies to all Swift Ray 1 devices shipped and distributed to customers that are returned under an RMA.",
    },
    {
      tag: "Reference",
      title: "Reference Document",
      summary:
        "Use the Swift Ray 1 Failure Analysis Form [SIN-FRM-2472_A] for the return and replacement process.",
    },
    {
      tag: "Acronyms",
      title: "Applicable Acronyms",
      summary:
        "RMA means Return Merchandise Authorization. DMS means Document Management System. RCA means Root Cause Analysis.",
    },
    {
      tag: "Roles",
      title: "Process Roles",
      summary:
        "Customer Support triages service requests and starts the RMA. Operations handles returned devices and investigations. QA/RA approves disposition and compliance. Finance/Growth collects a fee when warranty is voided.",
    },
    {
      tag: "Step 1",
      title: "Triage and RMA Request",
      summary:
        "Customer Support triages service requests and assigns possible Ray hardware issues to Operations. If troubleshooting determines the device should be returned, request the customer submit an RMA form through Halo.",
    },
    {
      tag: "Step 2",
      title: "Send a Replacement",
      summary:
        "After receiving the Halo ticket RMA form, ProdOps sends a replacement device when necessary to minimize disruption to the client workflow. This occurs before receiving and investigating the returned device.",
      media: [
        {
          type: "image",
          src: "./sections/sin-wi-3023/images/rma-form.svg",
          alt: "RMA Form: Submit RMA for Ray Devices",
          height: "11rem",
          fit: "contain",
        },
      ],
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
      tag: "Step 3",
      title: "Receive and Investigate",
      summary:
        "When the returned device arrives, ProdOps records damage and defects, determines its disposition, and works with Growth/Customer Success on warranty coverage and client communication.",
    },
    {
      tag: "Step 4",
      title: "Record Results and Fees",
      summary:
        "Upload investigation results to SharePoint as a copy of the Swift Ray 1 Failure Analysis Form. If warranty is voided, Finance, Growth, or the Account Executive advises the customer that a fee is required.",
    },
    {
      tag: "Step 5",
      title: "Disposition and Closure",
      summary:
        "Assign a device status from the investigation results and update all records and logs. Place the returned Ray 1, box, and contents in the quarantine cabinet unless marked for internal use. Close the Halo ticket after the investigation.",
    },
    {
      tag: "Investigation",
      title: "Initial Examination",
      summary:
        "Before altering the device, photograph and note its condition and reported issues. Record whether it was returned in the original box and which contents were included, such as the alcove or charging cube.",
    },
    {
      tag: "Investigation",
      title: "Functional Check",
      summary:
        "Attempt to fully charge and power on the device, then connect it to the Swift phone application. Record any step that cannot be completed.",
    },
    {
      tag: "Investigation",
      title: "Root Cause Analysis",
      summary:
        "Complete an RCA based on the client-reported issue and the initial examination. Identify possible causes, define actions for each, and perform them to confirm whether a cause resulted in the defect.",
    },
    {
      tag: "Investigation",
      title: "Conclusion and Disposition",
      summary:
        "Document the root cause or confirm that the device has no observable defects and works as expected. Mark it operational for internal testing or defective and place it in Quarantine, as applicable.",
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
