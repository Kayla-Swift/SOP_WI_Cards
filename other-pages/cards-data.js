window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["cluster-wounds-skin-wound"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Cluster Wounds and Skin & Wound",
  description: "Quick refresher on cluster wound imaging and treatment decisions.",
  theme: {
    accent: "#4f5fa8",
    surface: "#ffffff",
    background: "#f5f7ff",
    text: "#1e2a44",
  },
  cards: [
    {
      tag: "Title",
      title: "Cluster Wounds and Skin & Wound",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "How to Image Cluster Wounds",
      summary: "Capture a clear image that includes all relevant wound edges.",
      body: "Image the cluster so the wound boundaries are visible and clinically useful for assessment.",
    },
    {
      tag: "Basic",
      title: "When to Treat Separately",
      summary: "Identify when wounds should be documented as separate findings.",
      body: "Treat and document wounds separately when they are clinically distinct and require separate monitoring.",
    },
  ],
};

window.sopCardSets["completing-documentation-best-practices"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Completing Documentation Best Practices",
  description: "Best practices for complete, timely wound documentation.",
  theme: {
    accent: "#5b2f76",
    surface: "#ffffff",
    background: "#f9f4ff",
    text: "#2d1f45",
  },
  cards: [
    {
      tag: "Title",
      title: "Completing Documentation Best Practices",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Document with Swift",
      summary: "Core components to document in Swift.",
      body: "Documenting in Swift can include wound location, wound images, wound measurements, and clinical documentation related to the wound. This may vary by organization and can include exudate, periwound, wound edges, dressings, infection risk, and treatment.",
    },
    {
      tag: "Basic",
      title: "Full Workflow",
      summary: "High-level sequence for complete documentation.",
      body: "1. Apply HealX and image wound\n2. Trace wound (determines measurements)\n3. Add depth points (deepest point, undermining, tunneling)\n4. Add clinical documentation required\n5. Sign evaluation at bedside",
    },
    {
      tag: "Basic",
      title: "When to Document",
      summary: "Complete documentation as early as possible.",
      body: "Documenting events promptly improves accuracy because memory fades over time. Real-time documentation also improves cognitive focus and helps providers assess, consider options, and plan outcomes more methodically.",
    },
    {
      tag: "Quiz",
      title: "Documentation Timing",
      summary: "When should you complete clinical documentation?",
      question: {
        prompt: "When should you complete clinical documentation?",
        choices: [
          {
            label: "As early as possible without interrupting care",
            value: "early",
          },
          {
            label: "After completing all evaluations on patients for the day",
            value: "end-day",
          },
          { label: "At the end of the week", value: "end-week" },
        ],
        correctAnswer: "early",
        comment:
          "Complete documentation as early as possible for the most accurate documentation. This reduces the risk of complications and legal issues in the future.",
      },
    },
  ],
};

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

window.sopCardSets["effective-wound-tracing"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Effective Wound Tracing",
  description: "How to refine AutoTrace using Trace, Erase, and Zoom.",
  theme: {
    accent: "#a34f73",
    surface: "#ffffff",
    background: "#fff1f6",
    text: "#452132",
  },
  cards: [
    {
      tag: "Title",
      title: "Effective Wound Tracing",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "1. Check AutoTrace",
      summary: "Confirm the green trace fully covers the wound edge.",
      body: "After imaging, check if the green outline fully covers the wound. Green should cover the outside edge of the wound.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/06238a27-0d58-4377-99f4-93462a4b29ad",
          alt: "AutoTrace example",
        },
      ],
    },
    {
      tag: "Basic",
      title: "2. Adding to a Trace",
      summary: "Use Trace to add missing boundary areas.",
      body: "If part of the wound trace is missing, press Trace and circle the missing area. Press Refine to snap traces to the wound edge.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/05dbc4e1-7003-4560-adab-c2aa7be545b5",
          alt: "Adding to trace example",
        },
      ],
    },
    {
      tag: "Basic",
      title: "2. Erasing",
      summary: "Remove extra trace areas.",
      body: "In some wounds, AutoTrace can include extra space. Press Erase, pinch to zoom in, and swipe through the extra space.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/5bdc14db-e1c8-4ecb-8d7f-ca8ffc99ec2b",
          alt: "Erasing trace example",
        },
      ],
    },
    {
      tag: "Basic",
      title: "3. Detailed Trace",
      summary: "Make small refinements for edge accuracy.",
      body: "If the trace mostly fits but could be closer, use zoom, erase, and trace to make small adjustments.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/317c43d6-1b88-4f98-8762-75ad9a053d78",
          alt: "Detailed trace example",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Detailed Trace Tools",
      summary: "Which features should you use to remove extra trace from a cluster wound?",
      question: {
        prompt:
          "Which features should you use to remove extra trace from a cluster wound? Select all correct answers.",
        choices: [
          { label: "Trace", value: "trace" },
          { label: "Erase", value: "erase" },
          { label: "Zoom", value: "zoom" },
        ],
        correctAnswers: ["erase", "zoom"],
        comment:
          "Using Erase and Zoom makes detailed tracing easier and helps you stay at the wound edge.",
      },
    },
  ],
};

window.sopCardSets["how-to-order-swift-healx-online"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "How to Order Swift HealX online",
  description: "Step-by-step ordering workflow in the Swift Store.",
  theme: {
    accent: "#246a78",
    surface: "#ffffff",
    background: "#eef8fa",
    text: "#1f3940",
  },
  cards: [
    {
      tag: "Title",
      title: "How to Order Swift HealX online",
      summary: "Online ordering quick guide",
    },
    {
      tag: "Button",
      title: "Swift Store",
      summary: "Swift HealX can be easily ordered online.",
      body: "Click to visit the Swift Store.",
      media: [
        {
          type: "button",
          src: "https://store.swiftmedical.com/",
          caption: "Open Swift Store",
          buttonLabel: "Swift Store",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Login to Store",
      summary: "Login or create an account.",
      body: "Login or create an account for the Swift Medical Store. Create account is available in the top-right of the screen.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/d68a4b0f-c8e5-4c57-ad08-a749eb47b2e9",
          alt: "Login to store",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Choose the Product",
      summary: "Select the HealX product to purchase.",
      body: "Choose the Swift HealX product you want to buy. Product option examples are shown.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/14db2275-881a-4725-b964-539364a7349d",
          alt: "Choose product",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Add to Cart",
      summary: "Set quantity and proceed to checkout.",
      body: "Add the product to your cart and proceed to the checkout page. Add the quantity you would like.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/cb468804-98a5-4f67-a2a8-dba870df1d11",
          alt: "Add to cart",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Select your shipping address",
      summary: "Confirm shipping details.",
      body: "After adding items, confirm your shipping address and review details like shipping costs.",
    },
    {
      tag: "Basic",
      title: "Enter Payment Details",
      summary: "Complete your purchase.",
      body: "Enter payment details and complete the order.",
    },
    {
      tag: "Quiz",
      title: "First Step",
      summary: "What is the first step to ordering Swift HealX online?",
      question: {
        prompt: "What is the first step to ordering Swift HealX online?",
        choices: [
          {
            label: "Create an account or login on the Swift HealX website",
            value: "login",
          },
          { label: "Place your order", value: "order" },
          { label: "Choose a payment method", value: "payment" },
          { label: "Download the product", value: "download" },
        ],
        correctAnswer: "login",
        comment:
          "The first step is registering or logging in on the Swift HealX website. If you are in the US, provide your TAX code number.",
      },
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/service/503990dd-4ee4-40c8-8150-e6ad289651c1-thumb",
          alt: "Quiz visual",
        },
      ],
    },
    {
      tag: "Poll",
      title: "Confidence Poll",
      summary: "Do you feel comfortable ordering Swift HealX online?",
      question: {
        prompt: "Do you feel comfortable ordering Swift HealX online?",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        thanksMessage: "Thanks for your response.",
      },
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/service/b78dcaad-7c71-47ad-a07a-2615116daa26-thumb",
          alt: "Poll visual",
        },
      ],
    },
  ],
};

window.sopCardSets["imaging-practices-quick-refresh"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Imaging Practices: Quick Refresh",
  description: "Fast reminders for clean, accurate wound imaging.",
  theme: {
    accent: "#5e698e",
    surface: "#ffffff",
    background: "#f2f5ff",
    text: "#283047",
  },
  cards: [
    {
      tag: "Title",
      title: "Imaging Practices: Quick Refresh",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Apply HealX to Skin",
      summary: "Place HealX on intact skin.",
      body: "Apply HealX parallel and close to the wound on intact skin.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/bc30f7d6-7bff-4877-af54-ae375b411a10",
          alt: "Apply HealX",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Zoom, Use Torch, and Fill Viewfinder box",
      summary: "Stay parallel and frame correctly.",
      body: "Use zoom and torch as needed. Stay parallel to the wound and take your image with the wound and HealX filling the viewfinder.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/a06ea2a3-2e8b-4283-b25d-75e86ade93ce",
          alt: "Viewfinder guidance",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Five Star Images",
      summary: "Meet all five image quality checks.",
      body: "Ensure your images meet each 5-star check: wound in focus, HealX placement on intact skin, appropriate HealX location, large and centered framing, and good lighting.",
    },
    {
      tag: "Quiz",
      title: "Imaging Actions",
      summary: "Which of the following should you do while imaging?",
      question: {
        prompt: "Which of the following should you do while imaging? Select all that apply.",
        choices: [
          { label: "Use zoom", value: "zoom" },
          { label: "Use the torch", value: "torch" },
          { label: "Keep moving", value: "moving" },
          {
            label: "Wound and HealX fill the viewfinder box",
            value: "fill-box",
          },
        ],
        correctAnswers: ["zoom", "torch", "fill-box"],
        comment:
          "The most common issue is not using the torch or zoom feature.",
      },
    },
    {
      tag: "Basic",
      title: "Summary",
      summary: "Three reminders.",
      body: "1. Apply HealX to intact skin\n2. Remember your 5 stars while imaging\n3. Ensure your trace covers the wound",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/384a3d5c-e7fc-4994-908b-1d1ab4a96d32",
          alt: "Imaging summary",
        },
      ],
    },
  ],
};

window.sopCardSets["infection-control-in-wound-care"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Infection Control in Wound Care",
  description: "Infection control reminders during wound care visits.",
  theme: {
    accent: "#34734d",
    surface: "#ffffff",
    background: "#eefaf1",
    text: "#1f3d2a",
  },
  cards: [
    {
      tag: "Title",
      title: "Infection Control in Wound Care",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "1. General Summary",
      summary: "Follow organization infection control procedures.",
      body: "Follow all site procedures during visits, including glove changes, hand washing, wiping surfaces, use of barriers, wound cleanliness, and closing products.",
    },
    {
      tag: "Basic",
      title: "Quick steps",
      summary: "Typical sterile workflow sequence.",
      body: "1. Arrange dressing pack close to patient\n2. Set up materials and barriers in sterile field\n3. Wash hands and put on gloves\n4. Remove dressing\n5. Wash hands and complete wound imaging\n6. Wash hands and change gloves\n7. Dress wound while keeping sterile areas separate\n8. Remove gloves, dispose items, and wash hands",
    },
    {
      tag: "Quiz",
      title: "Hand Hygiene",
      summary: "Should you sanitize or hand wash between glove changes?",
      question: {
        prompt: "Should you sanitize or hand wash between glove changes?",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        correctAnswer: "yes",
        comment: "Always clean your hands between glove changes.",
      },
    },
    {
      tag: "Quiz",
      title: "Product Caps",
      summary: "When should products have caps replaced?",
      question: {
        prompt:
          "During a wound care visit, when should products have their caps replaced?",
        choices: [
          { label: "After use", value: "after-use" },
          { label: "Only if previously closed", value: "closed-only" },
          { label: "Never", value: "never" },
        ],
        correctAnswer: "after-use",
        comment:
          "Ensure all products are closed and caps replaced after use, including products that were previously open.",
      },
    },
    {
      tag: "Quiz",
      title: "Pre-Imaging Prep",
      summary: "Should you remove dressings and clear exudate before imaging?",
      question: {
        prompt:
          "Should you remove dressings and clear exudate or drainage prior to imaging your wound?",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        correctAnswer: "yes",
        comment:
          "Yes. Remove dressings and ensure the area is clean and dry to simplify wound imaging.",
      },
    },
  ],
};

window.sopCardSets["managing-compliance-skin-wound"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Managing Compliance with Skin & Wound",
  description: "Common compliance gaps and focus areas for coaching.",
  theme: {
    accent: "#4a668f",
    surface: "#ffffff",
    background: "#f3f7ff",
    text: "#243550",
  },
  cards: [
    {
      tag: "Title",
      title: "Managing Compliance with Skin & Wound",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Why Manage Compliance",
      summary: "Consistency improves outcomes.",
      body: "Wound clinics should manage compliance to ensure consistent and effective treatment, promote faster healing, and reduce complications. Understanding common issues helps target key issues and provide effective feedback.",
    },
    {
      tag: "Basic",
      title: "1. Effective/Accurate Documentation",
      summary: "Complete documentation based on policy.",
      body: "Users should complete all required documentation according to policies and procedures. Common issues include misunderstanding procedures, documenting at end of day instead of bedside, and low motivation to complete workflows correctly.",
    },
    {
      tag: "Basic",
      title: "2. Clinical Knowledge Gaps",
      summary: "Clinical understanding affects documentation quality.",
      body: "Users may be unfamiliar with wound care procedures or specific documentation such as periwound, wound edges, tissue typing, and wound typing. Common gaps include infection control, wound knowledge, and wound best practices.",
    },
    {
      tag: "Basic",
      title: "3. Skin & Wound Technical Problems",
      summary: "Technical workflow gaps are common.",
      body: "Users may be missing key skills related to preparing effectively, imaging practices, HealX application, AutoDepth, wound tracing, and finishing documentation.",
    },
  ],
};

window.sopCardSets["manual-depth-measurements"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Manual Depth Measurements",
  description: "When and how to validate depth manually.",
  theme: {
    accent: "#6c5f9a",
    surface: "#ffffff",
    background: "#f4f2ff",
    text: "#2d2a47",
  },
  cards: [
    {
      tag: "Title",
      title: "Manual Depth Measurements",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Why Manually Add Depth",
      summary: "Use manual method when AutoDepth is not enough.",
      body: "In some cases, depth cannot be reliably determined automatically. Follow organizational policy to determine depth, usually with a sterile cotton-tip swab and a disposable wound ruler.",
    },
    {
      tag: "Basic",
      title: "Confirming Depth",
      summary: "Validate AutoDepth with manual depth when needed.",
      body: "You may disagree with AutoDepth or need to add a manual depth value. Follow your organization policy for depth measurement. A common method is shown below.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/fcd7f1e5-0285-4909-9270-b8f4783440bd",
          alt: "Confirming depth",
        },
      ],
    },
    {
      tag: "Basic",
      title: "Undermining & Tunneling",
      summary: "Record direction and values clearly.",
      body: "Add undermining and tunneling on the depth screen. Measure depth or undermining, draw direction, enter values, and save.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/2201f085-67e8-43c0-a568-cf139886107f",
          alt: "Undermining and tunneling",
        },
      ],
    },
    {
      tag: "Quiz",
      title: "Depth Method",
      summary: "How should you measure wound depth?",
      question: {
        prompt:
          "What is a method to measure the depth of a wound, tunnel, or location of undermining?",
        choices: [
          { label: "Guess the value based on what you see", value: "guess" },
          {
            label: "Use a cotton tip swab and disposable ruler",
            value: "swab-ruler",
          },
          {
            label: "Put a wound ruler into the area of depth and measure directly",
            value: "ruler-direct",
          },
        ],
        correctAnswer: "swab-ruler",
        comment:
          "A common method is a cotton tip swab with a disposable ruler. Do not guess depth values.",
      },
    },
  ],
};

window.sopCardSets["quality-objectives-2022"] = {
  documentType: "Quality",
  documentNumber: "2022",
  documentTitle: "Quality Objectives 2022",
  description: "Draft objective cards.",
  theme: {
    accent: "#35638a",
    surface: "#ffffff",
    background: "#eef6fb",
    text: "#1f3850",
  },
  cards: [
    {
      tag: "Title",
      title: "Quality Objectives 2022",
      summary: "Quality Objectives",
    },
    {
      tag: "Objective",
      title: "OBJECTIVE 01:",
      summary: "Implement MRP for production readiness.",
      body: "Implement an MRP system to allow optimal tracking and traceability as we get production-ready for the Ray 1 hardware device.",
    },
    {
      tag: "Objective",
      title: "OBJECTIVE 02:",
      summary: "Implement MRP for production readiness.",
      body: "Implement an MRP system to allow optimal tracking and traceability as we get production-ready for the Ray 1 hardware device.",
    },
    {
      tag: "Objective",
      title: "OBJECTIVE 03:",
      summary: "Implement MRP for production readiness.",
      body: "Implement an MRP system to allow optimal tracking and traceability as we get production-ready for the Ray 1 hardware device.",
    },
    {
      tag: "Objective",
      title: "OBJECTIVE 04:",
      summary: "Implement MRP for production readiness.",
      body: "Implement an MRP system to allow optimal tracking and traceability as we get production-ready for the Ray 1 hardware device.",
    },
    {
      tag: "Objective",
      title: "OBJECTIVE 05:",
      summary: "Implement MRP for production readiness.",
      body: "Implement an MRP system to allow optimal tracking and traceability as we get production-ready for the Ray 1 hardware device.",
    },
  ],
};

window.sopCardSets["reference-wis-external-healx-production"] = {
  documentType: "Reference",
  documentNumber: "WI 2731/2732/2737",
  documentTitle: "Reference WIs for External HealX Production",
  description: "Reference cards and links for external HealX production verification.",
  theme: {
    accent: "#3b6f92",
    surface: "#ffffff",
    background: "#eff7fc",
    text: "#20384d",
  },
  cards: [
    {
      tag: "Title",
      title: "Reference WIs for External HealX Production",
      summary: "WI 2731, WI 2732, WI 2737",
    },
    {
      tag: "Basic",
      title: "What are these WIs",
      summary: "Purpose of the reference documents.",
      body: "These documents are used to verify HealX production at an external site.",
    },
    {
      tag: "Button",
      title: "WI Links",
      summary: "Open the WI references.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work Instructions/Work Instruction - HealX/DMS-Work-Instruction-HealX-Production-Packaging-at-Ameripac%5bHLX-WI-2731_A%5d-9377185839.aspx",
          buttonLabel: "WI 2731",
          caption: "Open WI 2731",
        },
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work Instructions/Work Instruction - HealX/Sheeted HealX - G-WI-HS/DMS-Work-Instruction-Sheeted-HealX-Production-Packaging-at-Ameripac-%5bHLX-WI-2732_A%5d-9378234416.aspx",
          buttonLabel: "WI 2732",
          caption: "Open WI 2732",
        },
        {
          type: "button",
          src: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work Instructions/Work Instruction - HealX/DMS-Work-Instruction-HealX-Acceptance-Test---Outsourced-Vendor-%5bHLX-WI-2737-A%5d-9033252865.aspx",
          buttonLabel: "WI 2737",
          caption: "Open WI 2737",
        },
      ],
    },
    {
      tag: "Basic",
      title: "WI 2731",
      summary: "Rolled HealX production and packaging.",
      body: "Highlights: verify training completion, use powder-free nitrile gloves, sanitize work surfaces, verify lot-code matching, create 500-count roll, remove first four dots, package and shrink units, and complete shipper packaging.",
    },
    {
      tag: "Basic",
      title: "WI 2731 Pictures",
      summary: "Pictures for WI 2731.",
      body: "Pictures for WI found below.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/9f64f88b-572e-431d-96d1-e2352204f2c3",
          alt: "WI 2731 images",
        },
      ],
    },
    {
      tag: "Basic",
      title: "WI 2732",
      summary: "Sheeted HealX packaging flow.",
      body: "Highlights: verify training, gloves and cleaning, erect envelope with correct orientation, insert 3 sheets with required facing, apply velcro stickers, verify lot codes, shrink 15 units, and label and seal shipper.",
    },
    {
      tag: "Basic",
      title: "WI 2732 Pictures",
      summary: "Pictures for WI 2732.",
      body: "Pictures for WI found below. Shipper label not included.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/490637e4-a66d-4e68-8006-bebb07ce77b2",
          alt: "WI 2732 images",
        },
      ],
    },
    {
      tag: "Basic",
      title: "WI 2737",
      summary: "Acceptance testing sampling process.",
      body: "Collect HealX dots for the lot under test according to L2 AQL4 sampling plan, affix samples to HLX-FRM-2203, scan the sampling sheet at 1200 dpi, and send scanned sheets to Swift Medical.",
    },
  ],
};

window.sopCardSets["showing-patient-progress-success-skin-wound"] = {
  documentType: "Microlearning",
  documentNumber: "",
  documentTitle: "Showing Patient Progress/Success via Skin & Wound",
  description: "Title page set imported from source content.",
  theme: {
    accent: "#416b83",
    surface: "#ffffff",
    background: "#eef6fa",
    text: "#223848",
  },
  cards: [
    {
      tag: "Title",
      title: "Showing Patient Progress/Success via Skin & Wound",
      summary: "Swift Microlearning",
    },
    {
      tag: "Basic",
      title: "Overview",
      summary: "Showing Patient Progress/Success via Skin & Wound",
      body: "This set currently includes title content only.",
    },
  ],
};