window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2471"] = {
  documentType: "WI",
  documentNumber: "2471",
  documentTitle: "Device Validation Testing",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-[QMS-WI-2471_A]-Device-Validation-Testing-WI-8530165771.aspx",
  linkLabel: "Open WI in SharePoint",
  description: "Validation testing for mobile devices with Swift Skin and Wound 2 and Ray 1.",
  theme: {
    accent: "#2f6ca3",
    surface: "#ffffff",
    background: "#eef5fb",
    text: "#21445f",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2471",
      summary: "Device Validation Testing",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction is used to conduct validation tests on mobile devices to determine if a device can be used with Swift Skin and Wound 2 and/or the Ray 1.",
    },
    {
      tag: "Step 1-4",
      title: "Step 1-4: Open a Swift Record in Skin and Wound 2",
      summary:
        "Download and open Skin and Wound 2, log in with a Microsoft account, then select an existing patient or add a new patient if none exist.",
    },
    {
      tag: "Step 5-6",
      title: "Step 5-6: Start Evaluation",
      summary:
        "Select + New Skin/Wound, pick any body location, and select that the wound does have measurable depth.",
    },
    {
      tag: "Step 7",
      title: "Step 7: Perform Zoom and Flash Testing",
      summary:
        "Use white, well-lit ambient lighting and white backgrounds. Confirm zoom options 1.0x, 1.5x, and 2.0x work correctly and that Torch turns on the flashlight.",
    },
    {
      tag: "Step 8",
      title: "Step 8: HealX Detection and Camera Focus Testing",
      summary:
        "With a sample wound box and HealX sticker on white background, test detection and focus quality at 10 cm, 20 cm, and 40 cm, and record results in the Device Validation Test sheet.",
    },
    {
      tag: "Step 9",
      title: "Step 9: AutoDepth and AutoTrace Testing",
      summary:
        "Capture sample wound images, complete AutoDepth tilt flow, verify AutoTrace, time AutoDepth calculation, and repeat for 5 total measurements.",
    },
    {
      tag: "Ray 1",
      title: "Ray 1 Device Validation",
      summary:
        "Download/open Skin and Wound 2 on the test device and log in before completing Ray 1 validation steps.",
    },
    {
      tag: "Step 3",
      title: "Step 3: Get Ray",
      summary:
        "Obtain a validated/passed Ray 1 from storage containers labeled with green Available SW2 stickers and ensure it is sufficiently charged.",
    },
    {
      tag: "Step 4-5",
      title: "Step 4-5: Profile",
      summary:
        "Open Profile, confirm Device Management appears, and enter it. If missing, confirm the phone model is enabled in GrowthBook with technical support.",
    },
    {
      tag: "Step 6-7",
      title: "Step 6-7: Bluetooth Pair and Physically Connect",
      summary:
        "Turn on Ray 1 and verify connection to the app. Perform fit testing to confirm stable positioning and no obstruction of required app use or camera functionality.",
    },
    {
      tag: "Step 7-10",
      title: "Step 7-10: Start Evaluation",
      summary:
        "Return to Patients, select/add a patient, create a new skin/wound, and select that the wound does not have measurable depth.",
    },
    {
      tag: "Step 11",
      title: "Step 11: Fluoro Image",
      summary:
        "Take a fluorescent image on sample wound and verify workflow success, including correct distance-error messaging for too close (<4 cm) and too far (>10 cm) states.",
    },
    {
      tag: "Step 12",
      title: "Step 12: Thermal",
      summary:
        "Repeat AutoDepth/AutoTrace steps, then capture thermal image on blackbody device. For help, review TC-006 in the Production Release Device Integrated Test Procedure.",
    },
    {
      tag: "Link",
      title: "WI 2471",
      summary: "Click to Open Full WI",
      action: {
        label: "WI 2471",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-[QMS-WI-2471_A]-Device-Validation-Testing-WI-8530165771.aspx",
      },
    },
  ],
};
