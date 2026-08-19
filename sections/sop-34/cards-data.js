const cards = [
  {
    type: 'title-card',
    title: 'SOP 34',
    description: 'Analysis of Data'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'This procedure provides a system and instructions for collecting, analyzing and reporting data on the performance of the Swift Quality Management System.',
    button: {
      label: 'Open SOP in SharePoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0034-SOP-Analysis-ofData-[QMS-SOP0034_D]-8238303228.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'What is in the SOP?',
    description: 'It governs the recording, compilation, and analysis of Customer Feedback, Quality System Audits, Conformity to product and process requirements, Characteristics of processes and products, Supplier quality performance Service reports, as appropriate.',
    imageUrl: 'https://images.unsplash.com/photo1633613286848-e6f43bbafb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaH8zfHxxdWVzdGlvbnxlbnwwfHx8fDE2ODkxNzA3OTl8MA&ixlib=rb4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'Data Collection',
    description: 'Data may be collected from various sources, such as feedback, conformity to product requirements, characteristics, trends of processes, and product Suppliers Audits Service reports.\n\nSwift uses multiple sources to track and collect data for software products.'
  },
  {
    type: 'basic-card',
    title: 'Data Collection',
    description: 'Tools and services chosen for data collection are geared towards providing advanced mobile & web analytics to help collect a wealth of data.\n\nAll data collection and analytic tools and services are subject to supplier evaluation prior to use.\n\nOnce data is collected, characteristics and trends of products shall be generated through business intelligence tools.'
  },
  {
    type: 'quiz',
    title: 'Does Swift use reliable and reputable software for monitoring website performance and availability.',
    options: [
      { text: 'Yes! It is required.', correct: true },
      { text: 'Sometimes', correct: false },
      { text: 'No, its optional.', correct: false }
    ],
    comment: 'All data and trends collected shall be reviewed by the appropriate department to determine performance of the product, and to be used as input to enhance product features.'
  },
  {
    type: 'basic-card',
    title: 'Product Data',
    description: 'Analyzing product conformance may be assessed using sampling plans and documented in accordance with the appropriate Work Instruction (WI) and in the product Verification and Validation (V&V) plan.',
    imageUrl: 'https://images.unsplash.com/photo1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaH8zfHxwcm9kdWN0JTIwZGF0YXxlbnwwfHx8fDE2ODkxNzA3NDV8MA&ixlib=rb4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'QA/RA and Data',
    description: 'Process Monitoring: QA/RA personnel shall coordinate all data analysis activities, including the compilation of all data and reporting conclusions and trends to the top management.',
    imageUrl: 'https://images.unsplash.com/photo1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxfHxkYXRhfGVufDB8fHx8MTY4NzQzMTQ2M3ww&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'You can explore the full SOP and save the link to the page for reference as needed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;
