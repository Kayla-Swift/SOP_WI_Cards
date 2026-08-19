window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-30"] = {
  documentType: "SOP",
  documentNumber: "30",
  documentTitle: "Servicing Provisions",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/0030-SOP--ServicingProvisions-[QMS-SOP-0030_F_].aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#52B788",
    surface: "#ffffff",
    background: "#D8F3DC",
    text: "#263238",
  },
  cards: [
    { tag: "Title", title: "SOP 30", summary: "Servicing Provisions" },
    {
      tag: "Button",
      title: "Introduction",
      summary:
        "This provides a system and instructions for servicing provisions at Swift. This procedure applies to all Swift products/devices requiring installation and servicing. This includes installation/service support for Swift manufactured product sold indirectly by channel partners and directly by Swift.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/0030-SOP--ServicingProvisions-[QMS-SOP-0030_F_].aspx",
          buttonLabel: "Open SOP in SharePoint",
          caption: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Product Development Plan",
      summary:
        "The procedure for installation and servicing of Swift Medical's products is outlined in the Product Development Plan. Work instructions are established as required and as specified in the Product Development Plan.",
    },
    {
      tag: "Standards",
      title: "Triaging Complaints",
      summary:
        "All software servicing requests received by Swift are triaged to determine if they will be managed as per SOP: Complaint Handling, SOP: Change Control, and WI: Defect Handling. Swift's Customer Support team will create a Complaint ticket to initiate the servicing process and begin by performing device-specific troubleshooting procedures remotely.",
    },
    {
      tag: "Standards",
      title: "Return Merchandise Authorization",
      summary:
        "Once confirmed, a Return Merchandise Authorization (RMA) number will be created and assigned to the request. Instructions on how to return the device to Swift are provided, along with the RMA Form (QMS-FRM-2371).",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1594392175511-30eca83d51c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyfHxyZXR1cm58ZW58MHx8fHwxNjg3NzQ1MjkxfDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Return Merchandise Authorization",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Serious Harm",
      summary:
        "If a customer report is associated with a serious injury or death, Swift considers the request for servicing as a complaint and records and processes it in accordance with SOP: Complaint Handling. If a new release is required to address an issue, the project manager will decide based on the contractual agreement with the customer.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1555699875-5773b06e8ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyfHxkYW5nZXJ8ZW58MHx8fHwxNjg3NzQ1MzQxfDA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Serious Harm",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Reporting and Returning",
      summary:
        "All service reports must be documented and include the name of the device serviced, device identification and control number used, and the date of the service. Swift does not plan on repairing the returned device to be sent back to the customer.",
    },
    {
      tag: "Quiz",
      title: "Management Review Results",
      summary: "When are results of the periodic review made available to management?",
      question: {
        prompt: "Results of the periodic review are made available to management when?",
        choices: [
          {
            label: "Daily",
            value: "daily",
          },
          {
            label: "Weekly",
            value: "weekly",
          },
          {
            label: "At each Management Quality Review",
            value: "mgmt-review",
          },
        ],
        correctAnswer: "mgmt-review",
        comment: "Results are presented at each Management Quality Review meeting.",
      },
    },
    {
      tag: "Standards",
      title: "Service Outage",
      summary:
        "A service outage notice is sent to channel partners and customers of Swift Medical regarding the operation, use, or maintenance of a released product. Customer Success determines if and when a service outage notice needs to be sent to customers.",
    },
    {
      tag: "Standards",
      title: "Process Validation and Monitoring",
      summary:
        "Process validation is performed for servicing processes where the resulting output cannot be or is not verified by subsequent monitoring and measuring. Process monitoring is conducted to ensure that incoming software servicing requests are reviewed and triaged to determine if the information provided is to be handled as a complaint.",
    },
    { tag: "Complete", title: "Complete!", summary: "You can explore the full SOP and save the link to the page for reference as needed." },
  ],
};
