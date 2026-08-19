const cards = [
  {
    type: 'title-card',
    title: 'SOP 37',
    description: 'Device Recall and Advisory Notes'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'This procedure provides instructions and responsibilities for the recall of distributed Swift devices.',
    button: {
      label: 'Open SOP in SharePoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0037-SOP-Device-Recall-and-Advisory-Notices-[QMS-SOP0037_G]-8284867855.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'Responsibility',
    description: 'Top Management is responsible for ensuring the recall process is understood and implemented.\n\nThe FDA, Health Canada, and Swift Recall Committees are responsible for initiating the recall and coordinating all related activities.\n\nThe CTO/Engineering Manager/QA/RA are authorized to initiate a recall, and Success and QA/RA are responsible for organizing and recall activities.'
  },
  {
    type: 'basic-card',
    title: 'Supplementary Recall',
    description: 'Supplementary Recall Responsibilities include maintaining internal documents and maintaining internal records.\n\nSwift must maintain records of customer contact and conduct checks to ensure effective recall strategy.'
  },
  {
    type: 'basic-card',
    title: 'Swift Recall',
    description: 'Swift has a recall strategy based on careful consideration of the risk associated with the deficiency and distribution.\n\nThe Recall Committee must:\n1. amend the original report in 10-working days of initiating the extension of the correction or removal\n2. submit an initial recall report to the inspectorate within 3 business days.'
  },
  {
    type: 'basic-card',
    title: 'Hazard Level',
    description: 'Swift must inform Health Canada of recalls and assign a hazard level to the device.\n\nA Health Risk Assessment (HRA) will be conducted by Swift personnel to determine the risk type to assign to the malfunctioning device.\n\nType I and Type II recalls require hazard identification, hazard characterization, exposure assessment, and risk characterization.'
  },
  {
    type: 'basic-card',
    title: 'Recall Form',
    description: 'The Medical Device Recall Reporting Form (FRM-0360) will be used for the report.\n\nKey Parts are:\n• device name and identifier\n• manufacturer and importer\n• the rationale for the recall\n• the risk type assigned\n• evaluation of the risks associated with the defective device\n• the number of devices in the marketplace\n• names of people who were sold affected devices\n• a copy of communications issued regarding the recall\n• a proposed strategy for conducting the recall\n• the extent to which device defectiveness is obvious to the consumer and/or user.'
  },
  {
    type: 'basic-card',
    title: 'Considerations',
    description: 'The Swift Recall Committee considers the following:\n• depth of the recall\n• time to initiation and completion\n• communications methods\n• notification of users who are not readily identifiable\n• effectiveness of action\n• initiation date and progress reports to Health Canada\n• proposed action plan for preventing recurrence\n• designated Swift Inc. representative\n• rationale detailing cause of delay\n• submission of progress reports to Health Canada.'
  },
  {
    type: 'quiz',
    title: 'Who decides the disposition of the recalled devices?',
    options: [
      { text: 'Quality Assurance', correct: false },
      { text: 'Recall Committee', correct: true }
    ],
    comment: 'The recall committee decides the disposition of the recalled devices? Quality Assurance designates and prepares an area for the recalled devices.'
  },
  {
    type: 'basic-card',
    title: 'Initial Contact',
    description: 'Swift must ensure consignees receive all necessary recall information, prevent recurrence, and maintain records of instances of disposition.'
  },
  {
    type: 'basic-card',
    title: 'Advisory Notices',
    description: 'Advisory notices are issued via certified mail, and a public warning is issued if continued use poses a high level of health risk.\n\nSwift will send advisory notices via certified mail.\n\nSwift must ensure consignees receive all necessary recall information, prevent recurrence, and maintain records of instances of disposition.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'You can explore the full SOP and save the link to the page for reference as needed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;
