const cards = [
  {
    type: 'title-card',
    title: 'WI 74',
    description: 'Rolled HealX Acceptance Test'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'The document is a work instruction for the acceptance testing and incoming inspection of the HealX product, specifically the Rolled HealX product: HLX001-001.',
    button: {
      label: 'Open WI in Sharepoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-HealX-Acceptance-Test-[HLX-WI-0074_G]-9383837697.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'Revisions Made',
    description: 'The document has undergone several revisions, with changes including updates to adhesive and color requirements, inspection procedures, and the addition of new testing steps.'
  },
  {
    type: 'basic-card',
    title: 'Operator Training',
    description: 'The work instruction requires operators to be trained on the document and have a record of the training.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/48ba48e5-de37-42ad-856d-bc47b879cdf4'
  },
  {
    type: 'basic-card',
    title: 'Inspection Steps',
    description: 'The document provides detailed work instructions for various aspects of the HealX product inspection, including dimensional inspection, physical inspection, physical review of design, physical demonstration and test, color and finish review of design, biological review of design, and cleanliness and sterilization review of design.'
  },
  {
    type: 'basic-card',
    title: 'Tools & Tasks',
    description: 'The document also provides specific tools and items required for each inspection and test, as well as the specific tasks and sub-tasks to be performed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/0b3edf2b-bd29-402d-a69f-c83bb6c8f0db'
  },
  {
    type: 'basic-card',
    title: 'Applicable Standards',
    description: 'The document includes a section on the applicable standards and reference documents, which include ANSI/ASQ Z1.4-2003 EXT-STD-0075, HealX Validation and Verification Plan HLX-PLN-0073, HealX Fiducial Component Specification HLX-CS-0071, Healx Acceptance Test Sampling Form HLX-FRM-2203, and SOP: Control of Records QMS-SOP-0012.'
  },
  {
    type: 'basic-card',
    title: 'Incoming Inspection',
    description: 'The document specifies that the inspection of incoming HealX product should be performed prior to production, and for each lot, an inspection lot should be sampled throughout the received lot as per the HealX Verification and Validation plan.'
  },
  {
    type: 'basic-card',
    title: 'Product Requirements',
    description: 'The document provides specific requirements for the HealX product, such as the requirement for specific colors (PANTONE 2935 C blue and PANTONE Cool Gray 2 C), the requirement for vinyl face stock, the requirement for non-cytotoxicity, non-sensitization, and non-irritation, and the requirement for cleanliness and freedom from foreign object debris.'
  },
  {
    type: 'basic-card',
    title: 'Testing Procedures',
    description: 'The document also provides specific procedures for testing the HealX product, such as affixing HealX samples to a printed Healx Acceptance Test Sampling Form, scanning the HealX sampling sheet at 1200 dpi using a scanner, running the HealX Acceptance Test software application to generate dimensional metrics for the collected samples, and manipulating the HealX strip in various ways to ensure the HealX fiducial remain affixed to the strip.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/2779195l-c152-4387-8762-add6de2ba366'
  },
  {
    type: 'quiz',
    title: 'What is the document about?',
    options: [
      { text: 'It provides specific tools and items for each inspection and test', correct: false },
      { text: 'It outlines the applicable standards and reference documents', correct: false },
      { text: 'It provides specific requirements for HealX product', correct: true }
    ],
    comment: 'The document provides specific requirements for the HealX product, such as the requirement for specific colors, the requirement for vinyl face stock, the requirement for non-cytotoxicity, non-sensitization, and non-irritation, and the requirement for cleanliness and freedom from foreign object debris.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'It is important to open up a work instruction and use it while completing the task until you feel comfortable and understand the process.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;