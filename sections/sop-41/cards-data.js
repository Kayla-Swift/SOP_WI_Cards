const cards = [
  {
    type: 'title-card',
    title: 'SOP 41',
    description: 'Corrective and Preventative Action (CAPA)'
  },
  {
    type: 'button',
    title: 'Introduction',
    description: 'This procedure describes the system, instructions and responsibilities for opening, managing, tracking, and closing out corrective and preventative actions at Swift.',
    button: {
      label: 'Open SOP in SharePoint',
      url: 'https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0041-SOP-Corrective-and-Preventative-Action-[QMS-SOP0041_C]-8247877478.aspx'
    }
  },
  {
    type: 'basic-card',
    title: '6 Sections',
    description: '1. Identification of device failures/process findings.\n2. Root cause analysis, development of a proposed corrective or preventative action plan.\n3. Implementation of approved corrective or preventative action plans.\n4. Closure of CAPA following implementation of corrective or preventative action plans.\n5. Verification of effectiveness of corrective and preventative actions.\n6. Check that actions do not adversely affect the ability to meet applicable regulatory requirements or safety and performance.'
  },
  {
    type: 'basic-card',
    title: 'Containment Actions',
    description: 'Containment actions are the short-term steps taken to control and mitigate the impact of nonconformity and protect Swift\'s customer operation.\n\nThis is done to stop the problem from getting worse and protect Swift customer\'s operations.',
    imageUrl: 'https://images.unsplash.com/photo1561201792-f47f3814c177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHw3N3x8c3RlcHN8ZW58MHx8fHwxNjg3NDMzMjE4fDA&ixlib=rb4.0.3&q=80&w=1080'
  },
  {
    type: 'basic-card',
    title: 'Corrective Actions',
    description: 'Corrective actions are the actions that are to be taken to address the root cause and prevent recurrence.\n\nRoot cause analysis is the responsibility of the CAPA Owner, who must perform a risk assessment and document all risks identified in the "Risk Assessment" section of the CAPA form.'
  },
  {
    type: 'basic-card',
    title: 'Action Plan',
    description: 'Action plan development is the responsibility of the CAPA Owner, who must identify and document the action(s) needed to correct the occurrence and/or prevent the recurrence of non-conformances.\n\nImplementation of corrective and preventative actions is the responsibility of the CAPA Owner, who must notify the CAPA Administrator and provide rationale of why the CAPA is/will be delinquent.'
  },
  {
    type: 'basic-card',
    title: 'CAPA Administrator',
    description: 'The CAPA Administrator must compile all CAPA documentation and review for closure, verify the implementation of all changes/corrections, update the CAPA Log to reflect that the CAPA is closed, and are informed if the implementation date is missed.\n\nThe CAPA originator is responsible for filling out the \'Summary\' and \'Details\' in the CAPA form.'
  },
  {
    type: 'basic-card',
    title: 'CAPA Verification',
    description: 'Verification of effectiveness must be performed based on the Effectiveness check plan determined within the CAPA form. Process monitoring is reviewed at a monthly Complaint review meeting, and CAPA information is reported in Management Review.'
  },
  {
    type: 'quiz',
    title: 'Where are the Quality Records recorded?',
    options: [
      { text: 'On a personal computer', correct: false },
      { text: 'The CAPA Form', correct: true },
      { text: 'Via Email', correct: false }
    ],
    comment: 'It is recorded in the CAPA form. The CAPA owner identifies and documents action(s) needed to correct non-conformances and prevent recurrence.'
  },
  {
    type: 'basic-card',
    title: 'Complete!',
    description: 'You can explore the full SOP and save the link to the page for reference as needed.',
    imageUrl: 'https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938'
  }
];

module.exports = cards;
