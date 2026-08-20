window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-14"] = {
  documentType: "SOP",
  documentNumber: "14",
  documentTitle: "QMS Training Procedure",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0014-SOP-Competence,-Awareness-and-Training-[QMS-SOP-0014_F]-8640888833.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#2F3B6E",
    surface: "#ffffff",
    background: "#EEF1FA",
    text: "#2A2F45",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 14",
      summary: "Quality Management System (QMS) Training Procedure",
    },
    {
      tag: "Button",
      title: "Open SOP in SharePoint",
      summary: "Applies to all training programs and all Swift personnel.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0014-SOP-Competence,-Awareness-and-Training-[QMS-SOP-0014_F]-8640888833.aspx",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Hiring",
      title: "Hiring Assessment",
      summary:
        "Employees are assessed for qualifications, experience, and competency and documented in HR files.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw0fHxlbXBsb3llZXxlbnwwfHx8fDE2ODkwMDA1NTV8MA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Hiring assessment",
        },
      ],
    },
    {
      tag: "Orientation",
      title: "QMS Orientation",
      summary:
        "Employees are assessed, training needs are identified, required training is delivered, and awareness of quality contributions is maintained.",
    },
    {
      tag: "Plan",
      title: "Training Plan",
      summary:
        "The Personnel Training Matrix (QMS-REC-0086) defines mandatory QMS and job-specific training by function. The matrix is maintained and required LMS training is assigned.",
      body: "Includes quality policy, quality objectives, security and privacy policy training, and job specific training.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxfHxibGFja3xlbnwwfHx8fDE2ODg5OTcwNjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Training plan",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Purpose Check",
      summary: "What is the purpose of the training procedure?",
      question: {
        prompt: "What is the purpose of the training procedure?",
        choices: [
          {
            label:
              "To ensure employees are competent and aware of their contribution to product quality",
            value: "competent-aware",
          },
          { label: "To provide all training for employees", value: "all-training" },
          {
            label: "To assess qualifications and experience of full-time employees",
            value: "full-time-only",
          },
        ],
        correctAnswer: "competent-aware",
      },
    },
    {
      tag: "Additional",
      title: "Additional Training",
      summary:
        "Functional managers determine additional training needed and ensure completion within timelines.",
    },
    {
      tag: "Records",
      title: "Training Records",
      summary:
        "Training effectiveness is evaluated at minimum during performance reviews and on an ongoing basis through assessments, course quizzes, internal audits, CAPA investigations, or other suitable methods. Training records are maintained in the LMS and personnel files.",
    },
    {
      tag: "Group",
      title: "Group Training",
      summary:
        "Group and individual training records are maintained as quality records with attendee and completion details (1 month).",
      body:
        "Operations training often includes demonstration and shadowing of task execution.",

    },
    {
      tag: "Waivers",
      title: "Skipping Training",
      summary:
        "Authors, approvers, and training creators of controlled documents do not require training.",
    },
    {
      tag: "Retraining",
      title: "Retraining",
      summary:
        "Retraining is required before updated procedure effective dates and before working on affected processes/systems. You have 1 month to complete retraining after a procedure update.",
    },
    {
      tag: "Quiz",
      title: "Manager Responsibility",
      summary: "What is the responsibility of functional managers regarding training?",
      question: {
        prompt: "What is the responsibility of functional managers regarding training?",
        choices: [
          {
            label:
              "Determine additional training needed and ensure completion within specified time frames",
            value: "determine-training",
          },
          {
            label: "Maintain group and individual training records",
            value: "maintain-records",
          },
          {
            label: "Grant waivers for employees who do not want training",
            value: "skip-training",
          },
        ],
        correctAnswer: "determine-training",
      },
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link for reference.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938",
          alt: "Complete",
        },
      ],
    },
  ],
};
