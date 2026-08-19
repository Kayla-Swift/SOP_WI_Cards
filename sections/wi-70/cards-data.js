const cards = [
  {
    type: 'title-card',
    title: 'WI 70',
    description: 'HealX Packaging'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'The document is a work instruction for the packaging of HealX products.',
    button: {
      label: 'Open WI in Confluence',
      url: 'https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8634269697/'
    }
  },
  {
    type: 'basic-card',
    title: 'Component Specification',
    description: 'The HealX product is governed by the HealX component specification and is intended for sale/use in Canada and the United States.'
  },
  {
    type: 'basic-card',
    title: 'Equipment List',
    description: 'The work instruction has undergone several revisions, with changes including the addition of new steps, removal of unnecessary steps, and updates to the equipment list.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/80cab59c-387a-43ec-ab11-e29515e45248'
  },
  {
    type: 'basic-card',
    title: 'Step Tasks',
    description: 'The packaging process involves several steps, including box assembly, dot counting, sealing, and shrink tunnel operation. Each step has specific tasks and success criteria.'
  },
  {
    type: 'basic-card',
    title: 'Equipment Operation',
    description: 'The document also provides detailed instructions for operating various equipment such as the L-Bar Sealer and Shrink Tunnel.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/4f2de59f-ce2d-470d-a1fd-24ebfa3baf4f'
  },
  {
    type: 'quiz',
    title: 'What is the document about?',
    options: [
      { text: 'A work instruction for the packaging of HealX products', correct: true },
      { text: 'A component specification for HealX products', correct: false },
      { text: 'The sale and use of HealX products', correct: false }
    ],
    comment: 'The document is a work instruction for the packaging of HealX products. It provides detailed instructions for operating various equipment such as the L-Bar Sealer and Shrink Tunnel.'
  },
  {
    type: 'basic-card',
    title: 'Tools & Items',
    description: 'The packaging process requires a clean work area and the use of specific tools and items, including scissors, a dot counter, a shrink tunnel, an L-Bar sealer, alcohol wipes, and HealX boxes.'
  },
  {
    type: 'basic-card',
    title: 'Training Requirements',
    description: 'The document emphasizes the importance of training, stating that all personnel are required to complete training provided by the Operations Manager before commencing HealX production.'
  },
  {
    type: 'basic-card',
    title: 'Non-Conforming Product',
    description: 'The document also includes instructions for handling non-conforming products, stating that the SOP: Control of Non-Conforming Product should be followed in such cases.'
  },
  {
    type: 'basic-card',
    title: 'Diagrams & Illustrations',
    description: 'The document provides diagrams to illustrate the setup and operation of various equipment and the appearance of the final product.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/c4fb3d40-bf44-4926-94f7-3e9b16d8402a'
  },
  {
    type: 'basic-card',
    title: 'Revision History',
    description: 'The document also includes a revision history, detailing the changes made in each revision, the authors of the changes, the approvers, and the effective dates of the changes.'
  },
  {
    type: 'quiz',
    title: 'What does the document include instructions for?',
    options: [
      { text: 'Handling non-conforming products', correct: true },
      { text: 'The packaging process', correct: false },
      { text: 'Training personnel', correct: false }
    ],
    comment: 'The document includes instructions for handling non-conforming products, as stated in the sentence "The document also includes instructions for handling non-conforming products, stating that the SOP: Control of Non-Conforming Product should be followed in such cases."'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'It is important to open up a work instruction and use it while completing the task until you feel comfortable and understand the process.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;