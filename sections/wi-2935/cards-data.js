window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2935"] = {
  documentType: "WI",
  documentNumber: "2935",
  documentTitle: "Setting Up Client iPhones for MDM",
  documentUrl: "",
  linkLabel: "",
  description: "Step-by-step setup flow after MDM enrollment for client iPhones.",
  theme: {
    accent: "#4f84b7",
    surface: "#ffffff",
    background: "#eef6fd",
    text: "#274f73",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2935",
      summary: "Work Instructions for Setting Up Client iPhones for MDM",
    },
    {
      tag: "Steps",
      title: "Basic Steps",
      summary:
        "1) Set language. 2) Select country/region. 3) Set appearance to default.",
    },
    {
      tag: "Enrollment",
      title: "Pull Enrol iPhone",
      summary:
        "At setup, select Set Up without Another Device, connect to Wi-Fi, wait for configuration, choose Enroll this iPhone under Swift Medical, and wait for install.",
    },
    {
      tag: "Security",
      title: "Password / Security",
      summary:
        "Face ID setup is optional (Set Up Later). Select and confirm a six-digit passcode.",
    },
    {
      tag: "Additional",
      title: "Additional Steps",
      summary:
        "Choose auto-update preference, skip Location Services if needed, skip eSIM setup, choose Light/Dark display, and optionally customize Action button.",
    },
    {
      tag: "Additional",
      title: "Additional Steps",
      summary:
        "Acknowledge Emergency SOS by selecting Continue, then complete setup with Get Started.",
    },
    {
      tag: "Final",
      title: "Final Screen",
      summary:
        "Verify the final home screen appears correctly. If not, wait a few minutes for full configuration and app installation, then restart if needed.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/0a40602f-c465-4089-8877-52e180d9c2a4",
          alt: "Expected final configured screen",
        },
      ],
    },
  ],
};
