window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2934"] = {
  documentType: "WI",
  documentNumber: "2934",
  documentTitle: "Registering Client Phones under Swift MDM",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Registering.aspx",
  linkLabel: "Open WI in SharePoint",
  description: "Process for registering client iPhones under Swift Mobile Device Management.",
  theme: {
    accent: "#3b76ad",
    surface: "#ffffff",
    background: "#edf5fd",
    text: "#234d74",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2934",
      summary: "Registering Client Phones under Swift MDM",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This document outlines registration of client phones under Swift MDM for use with the Swift app and Swift Ray 1.",
    },
    {
      tag: "Step 1",
      title: "Step 1",
      summary:
        "On an iOS 16.0+ Apple device, download Apple Configurator from the App Store.",
      media: [
        {
          type: "button",
          src: "https://apps.apple.com/ca/app/apple-configurator/id1037126344?mt=12",
          buttonLabel: "App Store Page",
          caption: "Apple Configurator",
        },
      ],
    },
    {
      tag: "Step 2",
      title: "Step 2",
      summary:
        "Open Apple Configurator and sign in with your Apple Business Manager account. Contact IT if you do not have access.",
    },
    {
      tag: "Note",
      title: "Note",
      summary:
        "If the sign-in menu does not appear, restart the app and/or the device.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/6499a5bf-289d-45a4-9d6b-d6c0879147ba",
          alt: "Apple Configurator sign-in screen",
        },
      ],
    },
    {
      tag: "Step 3",
      title: "Step 3",
      summary:
        "Open the Settings menu (cog icon) at the bottom-left of Apple Configurator if it is not already open.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/1327f2bd-c158-414e-8390-cc8b677151c1",
          alt: "Settings menu location",
        },
      ],
    },
    {
      tag: "Step 4",
      title: "Step 4",
      summary:
        "In Settings, ensure Share Wi-Fi is enabled and connected to Wi-Fi. Under MDM Server Assignment, select Specific and choose Client - MDM Server.",
    },
    {
      tag: "Step 5",
      title: "Step 5",
      summary:
        "Close Settings and return to the camera screen. Configurator now scans for a phone setup screen.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/1327f2bd-c158-414e-8390-cc8b677151c1",
          alt: "Return to scan screen",
        },
      ],
    },
    {
      tag: "Step 6",
      title: "Step 6",
      summary:
        "Power on the iPhone to be registered and proceed through setup only until the Wi-Fi screen. Do not connect to Wi-Fi yet.",
      body:
        "Important: do not go past the Wi-Fi screen or registration under Swift MDM will fail and require a full reset.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/e61c4d7d-301a-404c-aad0-03ead6659b00",
          alt: "Initial setup Wi-Fi screen",
        },
      ],
    },
    {
      tag: "Step 7",
      title: "Step 7",
      summary:
        "Use Configurator camera to scan the pattern on the iPhone Wi-Fi screen. The iPhone should transition to an Erase iPhone option.",
      body: "Do not select Erase iPhone yet.",
    },
    {
      tag: "Step 8",
      title: "Step 8",
      summary:
        "Contact the Swift IT team member on standby and provide the iPhone serial number shown on the box.",
    },
    {
      tag: "Step 9",
      title: "Step 9",
      summary:
        "After IT confirms readiness, select Erase iPhone to reset and restart the phone.",
    },
    {
      tag: "Step 10",
      title: "Step 10",
      summary:
        "After restart, run setup again and this time continue past the Wi-Fi connection screen.",
    },
    {
      tag: "Success",
      title: "Success Criteria",
      summary:
        "Immediately after Wi-Fi, you should see Remote Management showing Swift Medical ownership. If shown, registration is successful and the phone can be powered off.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/5bd70fae-ed7a-4e6b-a6a4-3f0344fb98e7",
          alt: "Remote management success screen",
        },
      ],
    },
    {
      tag: "WI",
      title: "WI 2934",
      summary: "Click to Open Full WI",
      action: {
        label: "WI 2934",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Registering.aspx",
      },
    },
  ],
};
