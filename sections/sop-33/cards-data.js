const cards = [
  {
    type: 'title-card',
    title: 'SOP 33',
    description: 'Control of Non-Conforming Product'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'This procedure governs the handling of non-conforming products, both produced and received by Swift, to ensure quality of input and output. Quality of input = quality of output to meet customer specifications.',
    button: {
      label: 'Open SOP in SharePoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0033-SOP-Control-ofNon-Conforming-Product-[QMS-SOPOp0033_E]-8747679745.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'QA Actions',
    description: `1. performs initial evaluation
2. reports active concessions / open non-conformances
3. notifies customer if concession request impacts customer
4. oversees recommended rework
5. approves or rejects concession requests.

Responsible Manager oversees recommended rework and reviews method of rework with QA-RA.`
  },
  {
    type: 'basic-card',
    title: 'Rework Methods',
    description: 'Rework methods must be documented in a work instruction, re-inspected, labeled as CLEAR (Green), and returned to non-segregated storage or inventory.\n\nScrap operations must be documented in the DHR or LHR, and returns to suppliers must be documented in the DHR or LHR.'
  },
  {
    type: 'basic-card',
    title: 'Concessions',
    description: 'Accept by concession may be permitted.\n\nQA-RA reviews Swift Initiated Concessions and Supplier Initiated Concessions to determine validity and approve or reject requests.',
    imageUrl: 'https://images.unsplash.com/photo1594392175511-30eca83d51c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyfHxyZXR1cm58ZW58MHx8fHwxNjg5MTY5ODAyfDA&ixlib=rb4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'Returning Products',
    description: 'Swift requires customers to return medical devices to the manufacturer\'s address if they identify a non-conforming product after delivery or use.\n\nShelf-life testing must be performed on all products within one year of the expiry date, and failed products must be placed in the "Non-Conforming Products" storage area and scrapped.'
  },
  {
    type: 'quiz',
    title: 'Return products can be kept and used by employees.',
    options: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    type: 'basic-card',
    title: 'Note:',
    description: 'It is important to consider the shipment duration when scoping out the potentiality of the product being used before the expiration date.\n\nSwift must store all products within six months of expiry in the "Non-Conforming Products: Shelf-life Testing" storage area and not be shipped to customers. Results of shelf-life testing must be recorded in the Shelf-life Testing Log.',
    imageUrl: 'https://images.unsplash.com/photo1579800790234-cb5bd473ebe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaH8xfHxibGFjayUyMHBhcGVyfGVufDB8fHx8MTY4OTE3MDAwNHww&ixlib=rb4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'Process Monitoring',
    description: 'Process Monitoring QA-RA must report on any open Non-Conformances and active Concessions at each Quality System Management Review.\n\nQuality Records include rework operations, concession requests, supplier non-conformance records, scrap operations documents, and the Shelf-life Testing Log.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'You can explore the full SOP and save the link to the page for reference as needed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;
