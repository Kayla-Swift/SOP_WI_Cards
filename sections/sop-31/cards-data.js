window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-31"] = {
  documentType: "SOP",
  documentNumber: "31",
  documentTitle: "Feedback and Customer Satisfaction",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0031-SOP-Feedback-andCustomer-Satisfaction-[QMS-SOP-0031_C]-8238303208.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#9D4EDD",
    surface: "#ffffff",
    background: "#F3E5FF",
    text: "#263238",
  },
  cards: [
    { tag: "Title", title: "SOP 31", summary: "Feedback and Customer Satisfaction" },
    {
      tag: "Button",
      title: "Introduction",
      summary:
        "This procedure provides a system and instructions for gathering and analyzing post-production feedback and customer satisfaction, as well as early warning of quality problems and input into corrective and preventive action processes.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0031-SOP-Feedback-andCustomer-Satisfaction-[QMS-SOP-0031_C]-8238303208.aspx",
          buttonLabel: "Open SOP in SharePoint",
          caption: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Feedback System",
      summary:
        "The feedback system collects/analyzes information about the post-production performance of products. Let's explore the parts.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1534841090574-cba2d662b62e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw1fHxiYWNrZ3JvdW5kJTIwZGFya3xlbnwwfHx8fDE2ODkxNjI4MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Feedback System",
        },
      ],
    },
    {
      tag: "Standards",
      title: "Feedback System Components",
      summary:
        "It includes: customer/user complaints, product feedback sessions, nonconforming or defective returned product, clinical evaluations, reviews and articles in trade and professional publications, unsolicited customer feedback, and product returns.",
    },
    {
      tag: "Standards",
      title: "Complaints",
      summary:
        "Complaints are collected, classified, and analyzed by Customer Success, and the data is periodically compiled and analyzed by Customer Success. Product returns are handled by Customer Success and the reason for each return request or claim is recorded. Feedback collected by users is recorded and inputted into the Product Team's IDEAS board.",
    },
    {
      tag: "Standards",
      title: "Process Monitoring",
      summary:
        "Process monitoring analyzes customer feedback results and presents them to executive management at Management Review meetings. Quality Records include complaint logs, product returns, and quality records.",
    },
    {
      tag: "Quiz",
      title: "Analysis Results",
      summary: "Are results of the analysis presented to executive management?",
      question: {
        prompt: "Results of the analysis are presented to executive management at Management Review meetings.",
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
        comment: "Results of the analysis are presented to executive management at Management Review meetings.",
      },
    },
    { tag: "Complete", title: "Complete!", summary: "You can explore the full SOP and save the link to the page for reference as needed." },
  ],
};
