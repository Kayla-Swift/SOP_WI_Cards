window.sopDeck = {
  documentType: "WI",
  documentNumber: "22471",
  documentTitle: "Device Validation Testing",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-[QMS-WI-2471_A]-Device%E2%80%BFValidation-Testing-WI-8530165771.aspx",
  description: "",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 22471",
      summary: "Device Validation Testing",
      body: "WI 22471 — Device Validation Testing",
    },
    {
      tag: "Intro",
      title: "Introduction",
      summary: "Purpose and scope",
      body:
        "This work instruction is to be used for conducting validation tests on mobile devices to determine if a device can or cannot be used in conjunction with the Swift Skin and Wound 2 application and/or the Ray 1.",
      question: {
        prompt: "Can this work instruction be used to validate a mobile device with Skin & Wound 2?",
        choices: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
        correctAnswer: "true",
        correctMessage: "Correct",
        incorrectMessage: "Incorrect. Review the purpose and scope.",
      },
      media: [
        {
          type: "image",
          src: "./placeholder.svg",
          alt: "Placeholder image for the introduction slide",
          caption: "Placeholder image",
        },
      ],
    },
    {
      tag: "Steps 1-4",
      title: "Step 1-4: Open a Swift Record in Skin & Wound 2",
      summary: "Download, login, select patient",
      body:
        "Download and open Skin & Wound 2 on the new device.\n1. Login to the SW2 app using your Microsoft account.\n2. From the Patients tab, select any existing patient, or add a new patient if none exist.\n3. Proceed to the patient record.",
    },
    {
      tag: "Steps 5-6",
      title: "Step 5-6: Start Evaluation",
      summary: "Create a new skin/wound and select measurable depth",
      body:
        "5. Select '+ New Skin/Wound' and select any location on the body.\n6. Select that the wound DOES have measurable depth.",
    },
    {
      tag: "Step 7",
      title: "Step 7: Perform Zoom and Flash testing",
      summary: "Verify zoom options and torch/flash",
      body:
        "Ensure ambient lighting is white and well lit. Images should be taken on a white background. Verify camera zoom options (1.0x, 1.5x, 2.0x) operate correctly. Select the 'Torch' option and ensure flashlight turns on.",
    },
    {
      tag: "Step 8",
      title: "Step 8: HealX detection and camera focus testing",
      summary: "Detect HealX and confirm focus at multiple distances",
      body:
        "Use the sample wound box with a HealX sticker on a white background. Ensure ambient lighting is white and well lit. Hold the device parallel to the sample wound 10 cm away and allow the camera to focus. Note detection and focus quality in the Device Validation Test sheet. Repeat at 20 cm and 40 cm.",
    },
    {
      tag: "Step 9",
      title: "Step 9: AutoDepth and AutoTrace testing",
      summary: "Capture AutoDepth/AutoTrace performance and timings",
      body:
        "Take an image of the sample wound and follow instructions to tilt the phone for AutoDepth. Verify AutoTrace functions and traces the sample wound. Time how long AutoDepth takes and record results. Repeat five times for five measurements.",
    },
    {
      tag: "Ray 1",
      title: "Ray 1 Device Validation",
      summary: "Ray 1 specific checks",
      body:
        "Obtain or validate a Ray 1 device. Download and open Skin & Wound 2 on the new device and login with your Microsoft account. Verify Ray 1 specific workflows as directed.",
    },
    {
      tag: "Step 3 Ray",
      title: "Step 3: Get Ray",
      summary: "Obtain validated Ray 1",
      body:
        "Obtain a validated/passed Ray 1 device from the storage cabinet. Validated Ray 1s are in containers labelled with a green sticker 'Available SW2'. Ensure the Ray 1 is sufficiently charged before proceeding.",
    },
    {
      tag: "Step 4-5",
      title: "Step 4-5: Profile",
      summary: "Open Profile and Device Management",
      body:
        "Once logged in, navigate to the 'Profile' menu. Ensure the Device Management section appears then enter it. If it does not appear, contact technical support to verify the phone model is enabled in GrowthBook.",
    },
    {
      tag: "Step 6-7",
      title: "Step 6-7: Bluetooth Pair & Physically Connect",
      summary: "Connect and fit test the Ray 1",
      body:
        "Turn on the Ray 1 and observe if it connects to the application (should connect automatically if SW2 is open). Perform a fit test and ensure Ray 1 does not obstruct required app functions and remains stable during movements.",
    },
    {
      tag: "Steps 7-10",
      title: "Step 7-10: Start Evaluation",
      summary: "Create a new skin/wound and select non-measurable depth",
      body:
        "7. Navigate to 'Patients' menu. 8. Select an existing patient or add a new one. 9. Select '+ New Skin/Wound' and choose a location. 10. Select that the wound DOES NOT have measurable depth.",
    },
    {
      tag: "Step 11",
      title: "Step 11: Fluoro Image",
      summary: "Capture fluorescent image and check distance warnings",
      body:
        "Take a fluorescent image on a sample wound and ensure workflow operates as expected. Verify appropriate error messages when device is held too close (<4cm) or too far (>10cm).",
    },
    {
      tag: "Step 12",
      title: "Step 12: Thermal",
      summary: "Thermal imaging on blackbody device",
      body:
        "Repeat AutoDepth/AutoTrace steps and then take a thermal image on a blackbody device to ensure workflow operates as expected. If needed, review TC-006 in the Production Release Device Integrated Test Procedure.",
    },
    {
      tag: "Link",
      title: "Full WI",
      summary: "Open the full Work Instruction",
      body: "Click to open the full WI",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-[QMS-WI-2471_A]-Device%E2%80%BFValidation-Testing-WI-8530165771.aspx",
          caption: "Open full WI",
          buttonLabel: "WI 2471",
        },
      ],
    },
  ],
};

window.sopCardSets = {
  "device-validation": window.sopDeck,
};
