const cards = [
  {
    type: 'title-card',
    title: 'SOP 39',
    description: 'Post Market Surveillance (PMS)'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'This SOP describes the system for collecting and critically evaluating relevant data on an ongoing basis throughout the post production phase of all products manufactured by Swift in order to monitor their clinical performance.',
    button: {
      label: 'Open SOP in SharePoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0039-SOP-Post-MarketSurveillance-[QMS-SOP0039_E]-8355643393.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'Summary',
    description: 'The SOP includes both reactive and proactive surveillance activities, which involve post-market clinical studies, customer feedback data, and risk management activities.\n\nThese activities are discussed in detail in the product specific Risk Management SOP.'
  },
  {
    type: 'basic-card',
    title: 'Swift Actions',
    description: 'Swift will do the following:\n• report any adverse events discovered during post-market surveillance operations to Health Canada and/or the FDA\n• periodically perform thorough clinical evaluations and critically examine results, as determined by the level of risk associated with each Swift device'
  },
  {
    type: 'basic-card',
    title: 'Documenting',
    description: 'Swift may only limit these clinical evaluation methods to scientific literature review activities if equivalence can be demonstrated between related devices.\n\nSwift shall document and update data generated from the clinical evaluation process from the planning to reporting stages, and include the supporting documentation in technical documentation as relevant.'
  },
  {
    type: 'basic-card',
    title: 'Investigations',
    description: 'Swift must conduct a Clinical Investigation as part of a PMS plan in accordance with ISO 14155 (1 & 2).\n\nEthical principles must be followed throughout investigations, and the evaluator must have knowledge of the device technology, research methodology, and diagnosis and management of the conditions intended to be treated by the device.'
  },
  {
    type: 'quiz',
    title: 'What does PMS stand for?',
    options: [
      { text: 'Post Market Surveillance', correct: true },
      { text: 'Post Medial Source', correct: false },
      { text: 'Pre-Medical Surveillance', correct: false }
    ]
  },
  {
    type: 'basic-card',
    title: 'PMS',
    description: 'Swift runs post-market surveillance strategies to monitor, manage, and present feedback.\n\nSwift will periodically review the performance and safety characteristics of devices through a clinical evaluation.\n\nVariables affecting the scope of post-market surveillance are considered when choosing the scope of post-marketing surveillance activities.'
  },
  {
    type: 'basic-card',
    title: 'Report',
    description: 'Swift prepares a summary report on an annual or biennial basis for devices sold in Canada with a MDL.\n\nIt must cover:\n• adverse effects, complaints\n• incident reportable to Health Canada\n• foreign risks of injury to human health\n\nNotify Health Canada if changes are identified.'
  },
  {
    type: 'basic-card',
    title: 'Compliance Data',
    description: 'Data that demonstrates compliance can be from:\n• safety reports\n• published literature\n• expert user groups\n• customer surveys\n• complaint/warranty claim\n• post-market clinical trials\n• user feedback\n• user reactions during training programs\n• experience with similar devices made by the same or different vendor\n• maintenance/service reports\n• in-house testing failure analysis'
  },
  {
    type: 'basic-card',
    title: 'Using Compliance Data',
    description: 'This will be used with the essential principles of design verification and validation documentation, device description information, labeling information, risk analysis information, and manufacturer information.',
    imageUrl: 'https://images.unsplash.com/photo1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw2fHxkYXRhfGVufDB8fHx8MTY4ODc1NTcwNXww&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'Options for Data',
    description: 'Implement one of the three options:\n1. literature review\n2. clinical (real world) experience analysis\n3. clinical investigation\n\nSwift shall evaluate the merits and limitations of clinical data to support claims about the performance and safety characteristics of the device.'
  },
  {
    type: 'basic-card',
    title: 'Surveillance Reports for Can',
    description: 'The summary report content is described in Section 61.4 of SOR/98-282 and Health Canada [Guidance on summary reports and issue-related analyses for medical devices], and shall cover the following matters...'
  },
  {
    type: 'basic-card',
    title: 'Surveillance Reports for Canada',
    description: 'It aims to determine if the information has changed, if the benefits are less, if the risks are more likely to occur, or if a new risk has been identified.\n\nSwift must notify Health Canada within 72 hours of preparing the summary report if they conclude that the benefits and risks have changed.\n\nNotification methods include applying for medical device license amendment, notifying of a recall, or submitting the summary report.'
  },
  {
    type: 'basic-card',
    title: 'Evaluation Report',
    description: 'The Swift designated evaluator shall consider factors such as:\n• such as number of patients exposed\n• type/adequacy of patient monitoring\n• adverse events.\n\nThey must produce a Clinical Evaluation Report that the device conforms to the relevant Essential Principles of safety and performance of medical devices.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'You can explore the full SOP and save the link to the page for reference as needed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;
