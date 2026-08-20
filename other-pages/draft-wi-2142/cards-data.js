window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["draft-wi-2142"] = {
  documentType: "WI",
  documentNumber: "2142",
  documentTitle: "DRAFT: WI 2142",
  description: "Work Instruction: FFC Conductor Cable Acceptance Procedures.",
  theme: {
    accent: "#1b4f72",
    surface: "#ffffff",
    background: "#f2f8fc",
    text: "#1a2f45",
  },
  cards: [
    {
      tag: "Title",
      title: "DRAFT: WI 2142",
      summary: "Work Instruction: FFC Conductor Cable Acceptance Procedures",
    },
    {
      tag: "Basic",
      title: "Purpose & Scope",
      summary: "Lot-level incoming inspection and validation.",
      body: "Defines how to inspect and validate each lot of incoming FFC conductor cables before release to production. Applies specifically to the Sinatra FFC Conductor Cable.",
    },
    {
      tag: "Basic",
      title: "Reference Materials",
      summary: "Standards and required reference documents.",
      body: "Applicable standard: ANSI/ASQ Z1.4-2003 sampling standard. Reference documents include Procurement Specification (SIN-CS-2139), FFC Drawing (SL-FFC-1XXXXXA01), and Device Verification and Validation Plan (SIN-PLN-2125).",
    },
    {
      tag: "Basic",
      title: "Training & Inspection Process Overview",
      summary: "Training and records requirements.",
      body: "Personnel must be trained before performing inspections. Record all results in the Acceptance Test Record (SIN-FRM-XXXX) and upload them to the Document Management System.",
    },
    {
      tag: "Basic",
      title: "1. Dimensional Inspection (SINF-0010)",
      summary: "Dimension checks by sampling plan.",
      body: "Sample according to the AQL4, S4 plan. Measure cable dimensions with calipers and verify dimensions are within plus or minus 2 mm of specification.",
    },
    {
      tag: "Basic",
      title: "2. Physical Inspection (SINF-0020)",
      summary: "Visual quality and bend checks.",
      body: "Sample using the same AQL plan. Visually inspect each cable to ensure no kinks, the cable is flat, and the cable is not bent more than 90 degrees.",
    },
    {
      tag: "Basic",
      title: "3. Biological Review of Design (SINF-0030)",
      summary: "Re-verify only when specifications change.",
      body: "Review procurement requirements to confirm biological-related specifications have not changed. Re-verify only if specifications change.",
    },
    {
      tag: "Basic",
      title: "4. Cleanliness & Sterilization Review (SINF-0040)",
      summary: "Confirm cleanliness requirements are documented.",
      body: "Review procurement documents to ensure requirements for cleanliness and debris-free condition are present. Repeat review only when procurement requirements change.",
    },
  ],
};
