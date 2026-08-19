window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2829"] = {
  documentType: "WI",
  documentNumber: "2829",
  documentTitle: "Temperature and Humidity Monitor Usage and Data Export",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/%5bQMS-WI-2829_A%5d-Temperature-and-Humidity-Monitor-Usage-and-Data-Export.aspx",
  linkLabel: "Open WI in SharePoint",
  description: "How to use monitor devices, export environmental CSV data, and configure alarm settings.",
  theme: {
    accent: "#3e79ad",
    surface: "#ffffff",
    background: "#edf5fd",
    text: "#234e75",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2829",
      summary: "Temperature and Humidity Monitor Usage and Data Export",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This document describes usage of temperature and humidity monitors at Swift Medical locations and the process for exporting recorded readings.",
      sectionButtons: [
        { label: "Exporting Data", targetTag: "Export Step 1" },
        { label: "Alarm Settings", targetTag: "Alarm Step 1" }
      ],
    },
    {
      tag: "Export Step 1",
      title: "Exporting Data Step 1",
      summary:
        "Install the SwitchBot mobile application on an iOS or Android device.",
      body: "Success criteria: SwitchBot application is downloaded.",
      media: [
        {
          type: "button",
          src: "https://play.google.com/store/apps/details?id=com.theswitchbot.switchbot&hl=en",
          buttonLabel: "Google Play",
          caption: "SwitchBot on Google Play",
        },
        {
          type: "button",
          src: "https://apps.apple.com/ca/app/switchbot/id1087374760",
          buttonLabel: "App Store",
          caption: "SwitchBot on App Store",
        }
      ],
    },
    {
      tag: "Export Step 2",
      title: "Step 2",
      summary:
        "Log into the SwitchBot app using the Swift Medical account already connected to the monitoring device.",
      body: "Use approved account credentials from internal documentation.",
    },
    {
      tag: "Export Step 3",
      title: "Step 3",
      summary:
        "Select the connected SwitchBot device under Storage. If missing, use Add device and reconnect via Bluetooth.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/56798c7e-77e9-491a-a046-a88a16364fce",
          alt: "SwitchBot device list",
        },
      ],
    },
    {
      tag: "Export Step 4",
      title: "Step 4",
      summary:
        "After selecting the device, view temperature and humidity recordings, including charted minimum, maximum, average, and dates.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/3dd46423-878e-472d-ae17-6e007a3daeac",
          alt: "SwitchBot readings chart",
        },
      ],
    },
    {
      tag: "Export Step 5",
      title: "Step 5",
      summary:
        "Scroll to the bottom of the page and select Export Data.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/33588c52-41c8-49aa-bc3e-02622fecc303",
          alt: "Export data button",
        },
      ],
    },
    {
      tag: "Export Step 6",
      title: "Step 6",
      summary:
        "Set interval and date-range parameters, then click Export. The monitor collects data every minute.",
    },
    {
      tag: "Export Step 7",
      title: "Step 7",
      summary:
        "Data exports as CSV. Save or email the file to the proper location and export monthly for recordkeeping.",
    },
    {
      tag: "Alarm Step 1",
      title: "Alarm Settings Step 1",
      summary:
        "EQUIP-028A can provide audible alarms for temperature/humidity thresholds. Open device settings using the top-right gear icon.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/a264cfdb-2b9f-4fe7-9709-f7f9b465cc49",
          alt: "Alarm settings entry",
        },
      ],
    },
    {
      tag: "Alarm Step 2",
      title: "Step 2",
      summary: "Select Alert Conditions from the settings menu.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/0fafa9d3-6b93-4f73-9e63-01663fb2a91f",
          alt: "Alert Conditions menu",
        },
      ],
    },
    {
      tag: "Alarm Step 3",
      title: "Step 3",
      summary:
        "Set alert type and upper/lower threshold ranges that trigger alarms.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/714ee618-439b-410d-8d05-139cdf43606a",
          alt: "Alert range configuration",
        },
      ],
    },
    {
      tag: "WI",
      title: "WI 2829",
      summary: "Click to Open the Full WI",
      action: {
        label: "WI 2829",
        url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/%5bQMS-WI-2829_A%5d-Temperature-and-Humidity-Monitor-Usage-and-Data-Export.aspx",
      },
    },
  ],
};
