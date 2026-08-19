const cards = [
  {
    type: 'title-card',
    title: 'SOP 35',
    description: 'Complaint Handling'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'This course provides instructions and a system for handling, initiating, receiving, resolving and maintaining records of customer complaints and other customer feedback relating to the quality of Swift products.',
    button: {
      label: 'Open SOP in SharePoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0035-SOP-ComplaintHandling-[QMS-SOP0035_K]-9379218301.aspx'
    }
  },
  {
    type: 'basic-card',
    title: 'Complaint Handling Steps',
    description: '1. Receiving and recording complaints\n2. Device complaint processing\n3. Reportable complaint\n4. Complaint closure\n5. Complaint trending'
  },
  {
    type: 'basic-card',
    title: '1. Receiving and Recording Complaints',
    description: 'Complaints are recorded and documented electronically in Swift\'s Complaint Handling System.\n\nSwift will investigate and respond to complaints within 2 business days for critical issues and 10 business days for serious issues.'
  },
  {
    type: 'basic-card',
    title: '2. Device Complaint Processing',
    description: 'Upon receipt of the complaint, all device complaints are evaluated by the Customer Success team (input from engineering/product as needed).\n\nSeverity classification is shown below.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/1105131f-c879-4e99-b376-0184d588a4ce'
  },
  {
    type: 'basic-card',
    title: '3. Reportable Complaint',
    description: 'A complaint is considered "REPORTABLE" if it meets device reporting criteria.\n\nReportable complaints open a complaint form and initiate a formal investigation.\n\nThey must assess if there was a failure to meet specifications, if the device was used for treatment or diagnosis, and if the incident or adverse effect was related to the device.'
  },
  {
    type: 'basic-card',
    title: '4. Complaint Closure',
    description: 'General complaints are closed by the person responsible for follow-up, and the report is recorded in the Complaint Log.\n\nDevice complaints are handled according to the WI non-conforming product control, and corrective and preventive action.\n\nIf a customer fails to respond within 10 business days, Swift may close the ticket with the response text.'
  },
  {
    type: 'basic-card',
    title: '5. Complaint Trending',
    description: 'Device complaints must be reviewed periodically by RA/Operations/Customer Success to identify adverse trends in product quality and customer satisfaction.\n\nAdverse trends are reviewed for Corrective and Preventive Action (CAPA).'
  },
  {
    type: 'basic-card',
    title: 'Customer Success',
    description: 'Customer Success reviews and processes general complaints and logs them in the Complaint Handling Software.\n\nReportable complaints must assess failure to meet specifications, device utilization, and reported incident or adverse effect.'
  },
  {
    type: 'basic-card',
    title: 'Send Complaints in 1 Day',
    description: 'Complaints that are potentially reportable must be sent to the Swift Regulatory team within 1 working day of reaching determination, and all records and results of the investigation must be maintained.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'You can explore the full SOP and save the link to the page for reference as needed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;
