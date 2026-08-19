const cards = [
  {
    type: 'title-card',
    title: 'TMP 2575',
    description: 'HealX Customer Response Email Templates'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'The document is a guide for HealX customer response email templates.',
    button: {
      label: 'Open TMP in Confluence',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-HealX-Customer-ResponseEmail-Templates-[QMS-TMP2575_A]-8701640713.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'Email Templates',
    description: 'The email inbox orderhealx@swiftmedical.com is used to answer customer queries and send notifications about HealX, with many responses being templated.'
  },
  {
    type: 'basic-card',
    title: 'Positive Order',
    description: 'The document serves as a library for these email templates and is intended for use in customer response emails related to HealX.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/bf8cdada-5122-4b0b-9b10-44ffdae762f0'
  },
  {
    type: 'basic-card',
    title: 'Training Records',
    description: 'All users using the email templates must be trained on HealX/positive order fulfillment and have a record of that training on file.'
  },
  {
    type: 'basic-card',
    title: 'Order Confirmations',
    description: 'The document includes templates for various customer interactions, including order confirmations, password resets, invoice requests, and order tracking.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/d4bacad2-2714-4b74-8568-72578e760efc'
  },
  {
    type: 'quiz',
    title: 'What is the purpose of the document?',
    options: [
      { text: 'To provide email templates for customer response emails related to HealX', correct: true },
      { text: 'To provide a library of customer responses for HealX', correct: false },
      { text: 'To provide training on HealX/positive order fulfillment', correct: false }
    ],
    comment: 'The document serves as a library of email templates for customer response emails related to HealX.'
  },
  {
    type: 'basic-card',
    title: 'Password Resets',
    description: 'The document also provides templates for specific scenarios such as customers forgetting their password, requesting an invoice, or needing a W9 or W8 form.'
  },
  {
    type: 'basic-card',
    title: 'Purchase Orders',
    description: 'For customers who require purchase order (PO) documents, the document provides templates for situations where the facility does not have its own account, has an existing account that is not activated, or has an existing account that has been previously activated.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/c1900ed4-0380-4489-b6e6-9e1ebeae3a5b'
  },
  {
    type: 'basic-card',
    title: 'Incorrect Pricing',
    description: 'The document also provides templates for addressing issues such as incorrect pricing on a PO, missing tax ID, and orders returned due to incorrect address.'
  },
  {
    type: 'basic-card',
    title: 'HealX Pricing',
    description: 'The document includes a pricing table for HealX, which is sold as a unit of 2 boxes of 500 markers.'
  },
  {
    type: 'basic-card',
    title: 'Accurate Information',
    description: 'The document emphasizes the importance of providing accurate and timely information to customers, and maintaining a record of all customer interactions.'
  },
  {
    type: 'quiz',
    title: 'What does the document provide templates for?',
    options: [
      { text: 'Requesting an invoice', correct: false },
      { text: 'Forgetting their password', correct: false },
      { text: 'Needing a W9 or W8 form', correct: true }
    ],
    comment: 'The document provides templates for specific scenarios such as customers needing a W9 or W8 form, forgetting their password, or requesting an invoice.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'It is important to open up a work instruction and use it while completing the task until you feel comfortable and understand the process.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;
