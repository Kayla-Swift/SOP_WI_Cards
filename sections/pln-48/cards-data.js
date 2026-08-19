window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["pln-48"] = {
  documentType: "PLN",
  documentNumber: "48",
  documentTitle: "Product Development Plan",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-0048-WCM-Product-Development-Plan-[WCM-PLN-0048_G]-8755576936.aspx",
  linkLabel: "Open SOP in SharePoint",
  description: "WCM product development plan overview",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "PLN 48",
      summary: "Product Development Plan",
      body: "PLN 48 - Product Development Plan",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Open the complete product development plan.",
      body:
        "Introduction: This plan defines the development of Swift Skin and Wound (SSW) at Swift Medical.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-0048-WCM-Product-Development-Plan-[WCM-PLN-0048_G]-8755576936.aspx",
          caption: "Open SOP in SharePoint",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Updated SSW",
      title: "Updated SSW",
      summary:
        "A reboot of SSW was planned for Q4 2023 to Q1 2024 to improve speed, security, stability, and EMR connectivity.",
      body:
        "The application was updated to improve speed, security, stability, and ability to connect to EMRs.",
    },
    {
      tag: "Products",
      title: "Products",
      summary:
        "SSW runs on mobile and browser and uses HealX fiducial markers for scale.",
      body:
        "Swift intends to offer white-label SSW versions to third-party organizations. Validation and verification, risk management, usability engineering, regulatory and quality, marketing, operations and distribution, and maintenance activities are included in this SOP.",
    },
    {
      tag: "Software Dev",
      title: "Software Development",
      summary:
        "Software development follows the Software Development SOP and WCM is Class B (non-serious injury possible).",
      body:
        "Software requirements are sourced from the WCM App Software Requirements Specification.",
    },
    {
      tag: "Requirements",
      title: "Release Requirements",
      summary: "Key deliverables are required for each release.",
      body:
        "Documentation and approvals are completed per Document Controls SOP.\n1. Software testing follows the Software Development SOP and Class-B safety rules.\n2. Integration test planning occurs at Epic and Release levels.\n3. Change control issues are managed per applicable SOPs.",
    },
    {
      tag: "Hot Fixes",
      title: "Hot Fixes",
      summary:
        "Minor SSW changes are controlled through patch releases across mobile platforms.",
      body:
        "The Transition to Production Checklist (QMS-FRM-0057) is the final technical gate before release and includes a Release Readiness Meeting and System Verification Plan with QA lead verification testing.",
    },
    {
      tag: "Quiz",
      title: "Hot Fix Check",
      summary: "What is a Hot Fix or Patch?",
      question: {
        prompt: "What is a Hot Fix or Patch?",
        choices: [
          {
            label: "A small update to the app to fix a bug or issue",
            value: "small-update",
          },
          {
            label: "A warm patch applied to a product to fix it",
            value: "warm-patch",
          },
          {
            label: "A large update or new feature for the market",
            value: "large-update",
          },
        ],
        correctAnswer: "small-update",
        correctMessage: "Correct.",
        incorrectMessage: "Review the Hot Fix definition.",
      },
    },
    {
      tag: "Verification",
      title: "Verification Plans",
      summary: "For SSW, the software test plan is considered the verification plan.",
      body:
        "Verification can include smoke testing, regression testing, stress testing, and functionality testing.",
    },
    {
      tag: "Test Cases",
      title: "Test Plan and Cases",
      summary:
        "To create a test plan, evaluate the functionality being fixed or implemented.",
      body:
        "Test plan scope is determined by the QA lead with engineering input and approval. The QA lead specifies devices, operating systems, and browsers. Test cases include preconditions, steps to perform, and acceptance criteria (expected results).",
    },
    {
      tag: "Approvals",
      title: "Test Plans",
      summary:
        "All test plans must be approved by the Engineering Manager, Component Lead, and Product Manager.",
      body:
        "After successful software verification testing, the Transition to Validation Checklist must be completed by the QA lead and approved by QA-RA.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1600267147646-33cf514b5f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw3fHx0ZXN0aW5nJTIwfGVufDB8fHx8MTY4OTA5MTI1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Test plans card image",
          caption: "Test plan approvals",
        },
      ],
    },
    {
      tag: "Validation",
      title: "Validation and Release",
      summary:
        "SSW is validated through clinical studies, usability testing, UAT, and informal clinical validation.",
      body:
        "All releases use staged rollout after QA testing. The release owner records and assesses performance metrics for the new version.",
    },
    {
      tag: "APIs and UAT",
      title: "APIs and UAT",
      summary:
        "If successful, an API hotfix is deployed to prevent logins to terminated versions.",
      body:
        "The UAT user group must be clinically qualified and validate the release candidate against mandatory criteria such as frame uploads, assessment image upload time, patient data upload time, and patient list load times.",
    },
    {
      tag: "Poll",
      title: "Acronym Check",
      summary: "Do you know what APIs and UATs are?",
      question: {
        prompt: "Do you know what APIs and UATs are?",
        choices: [
          { label: "Yes.", value: "yes" },
          {
            label: "No, but I now know what they stand for.",
            value: "learned",
          },
          {
            label: "No, but I can look up the basics if needed.",
            value: "lookup",
          },
        ],
        thanksMessage: "Thanks for your response.",
      },
    },
    {
      tag: "Plans",
      title: "Plans",
      summary:
        "Swift maintains documentation, translation, regulatory, clinical, quality, and UDI plans for each distinct WCM and HealX brand.",
      body:
        "Quality plans are maintained across the product lifecycle. Swift has a QMS for production, validated release processes, service and operations plans, HealX production, and order intake and distribution.",
    },
    {
      tag: "Purchasing",
      title: "Purchasing HealX",
      summary: "Customers can purchase directly on the web store.",
      body:
        "Swift gathers requirements through discovery meetings, evaluates projects or contracts needing technical development, and hands off integration-heavy accounts to the Implementation Manager.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/7f6df79a-33dd-4124-b4c6-987edc0a9041",
          alt: "Purchasing HealX",
          caption: "Purchasing HealX",
        },
      ],
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "You can explore the full SOP and save the link to the page for reference as needed.",
      body: "Open the full SOP for deeper reference at any time.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938",
          alt: "Complete card image",
          caption: "Complete",
        },
      ],
    },
  ],
};