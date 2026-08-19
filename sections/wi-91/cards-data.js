const cards = [
  {
    type: 'title-card',
    title: 'WI 91',
    description: 'Facility Controls'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'This work instruction describes the controls for set-up and maintenance of the Swift work environment. This outlines the facility and workstation controls, inventory controls, environmental controls, and ongoing cleaning, monitoring, and maintenance tasks.',
    button: {
      label: 'Open SOP in SharePoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-[DRAFT]-Facility-Controls-[QMS-WI-0091_G]-10171973633.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'Scope',
    description: 'The WI applies to the Production area and covers controls related to the facility, work environment, inventory, equipment, and tools. The Chief Operating Officer is responsible for following the contamination control processes and for the ongoing monitoring of the production facility and reporting any abnormal conditions in the work environment.'
  },
  {
    type: 'basic-card',
    title: 'Storage Labels',
    description: 'There are yellow, green, and red labels found within storage. Read the chart below to learn what these mean.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/7d5f45e4-6a31-4f58-bc1d-c8b49b9fabe3'
  },
  {
    type: 'basic-card',
    title: 'Key Points',
    description: '1. Workstations are cleaned\n2. Regular maintenance tasks happen on a regular basis\n3. Special maintenance activities will be performed on an "as needed" basis.\n\nSpecial maintenance activities that impact the quality or security of Swift products/processes are approved by the Operation Representative prior to work.'
  },
  {
    type: 'basic-card',
    title: 'Production Area',
    description: 'The production area is used for the production, inspection, storage and packaging of Swift Medical hardware products. It is closed with controlled access and is only accessible by Operations, R&D and QA-RA personnel.',
    imageUrl: 'https://images.unsplash.com/photo-1689071594539-a273ffe8dfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4OTA4OTUwOXw&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'Controls',
    description: 'Cleanliness/contamination controls include no eating or drinking in the production area, animals kept out, workstations clear of debris and hazards, and cleaning of tools and equipment at the beginning and end of each batch production.\n\nStorage area controls prevent adulteration, contamination/damage to parts/products, ensure inspection, and ensure non-conforming parts/products are not used in production.'
  },
  {
    type: 'basic-card',
    title: 'Control Markers',
    description: 'Controls consist of clearly marked shelves and colored markers, and any production processes that are likely to create an environment with high particulate and contaminant exposure should be outsourced.\n\nIf special production activity must be conducted in the Swift Products Production area, the following controls will be implemented:'
  },
  {
    type: 'quiz',
    title: 'Who is involved in the production of Swift Products are responsible for ensuring that appropriate personal hygiene practices are followed to minimize product contamination?',
    options: [
      { text: 'Operational Developer', correct: false },
      { text: 'Operation personnel', correct: true },
      { text: 'Operation Chief Executive', correct: false }
    ],
    comment: 'Operation personnel are responsible for ensuring that appropriate personal hygiene practices are followed to minimize product contamination in Swift Products production.'
  },
  {
    type: 'basic-card',
    title: 'Physical Controls',
    description: 'This includes:\n• using appropriate footwear\n• non-latex powder-free gloves\n• safety goggles\n• long hair tied back\n• proper training\n• regular maintenance tasks\n\nSpecial maintenance is performed as a result of a corrective or preventive action.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'You can explore the full SOP and save the link to the page for reference as needed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;