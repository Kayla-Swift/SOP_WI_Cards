const cards = [
  {
    type: "title",
    title: "WI 1959",
    description: "Unique Device Identifier"
  },
  {
    type: "button",
    title: "The document discusses the Unique Device Identifier (UDI), a unique numeric or alphanumeric code required by the FDA and European Commissioner to identify medical devices sold from manufacturing through distribution to patient use.",
    button: "Open WI in Sharepoint",
    target: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-WI-Unique-Device-Identifier-[QMS-WI-1959_A]-8241025823.aspx"
  },
  {
    type: "basic",
    title: "UDI Components",
    description: ""
  },
  {
    type: "basic",
    title: "GS1 Accreditation",
    description: "UDIs are issued under a system operated by an FDA-accredited issuing agency. Swift Medical has chosen GS1 as their Accredited UDI Issuing Agency."
  },
  {
    type: "basic",
    title: "GTIN Registration",
    description: "Swift Medical is required to register and obtain a new Global Trade Identification Number (GTIN) for each product and each different type of package configuration."
  },
  {
    type: "basic",
    title: "GUDID Account",
    description: "The document outlines the process for requesting a GUDID account, which is used to submit information to the FDA's Global Unique Device Identification Database (GUDID). This includes providing the Labeller Organization DUNS Number, Regulatory Contact Information, and preferred submission option."
  },
  {
    type: "quiz",
    title: "What is the GUDID used for?",
    options: [
      {
        text: "To register and obtain a new Global Trade Identification Number (GTIN)"
      },
      {
        text: "To identify medical devices sold from manufacturing through distribution to patient use"
      },
      {
        text: "To submit information to the FDA's Global Unique Device Identification Database",
        correct: true
      }
    ],
    comment: "The GUDID is used to submit information to the FDA's Global Unique Device Identification Database (GUDID)."
  },
  {
    type: "basic",
    title: "DI Submission",
    description: "Labellers are required to enter DIs along with additional device attribute information to the GUDID, as specified in the final rule, unless subject to an exception or alternative.",
    image: "https://cdn1.7taps.com/Production/18397/c64aae40-53bd-4b4d-8ac1-36e46d0ca675"
  },
  {
    type: "basic",
    title: "Base Package",
    description: "Each different type of package configuration must have a unique identifier. The primary DI record identifies the lowest level of medical package containing a full UDI, known as the base package."
  },
  {
    type: "basic",
    title: "Plain-Text/AIDC",
    description: "The UDI must be presented in two forms: easily readable plain-text, and Automatic Identification and Data Capture (AIDC) technology."
  },
  {
    type: "basic",
    title: "Stand-Alone Software",
    description: "For stand-alone software, not distributed in a packaged form, the software product must display a plain text statement of the UDI when the software is started or a plain text statement displayed through a menu command.",
    image: "https://cdn1.7taps.com/Production/18397/1fa0ed95-b307-423c-88a0-69ef9a16f8b4"
  },
  {
    type: "basic",
    title: "UDI Dates",
    description: "The document provides specific dates by which UDIs must be placed on different classes of devices. For instance, by September 24, 2020, UDI must be placed on class I devices. In the EU, UDI must be placed on class IIa and class IIb devices by May 26, 2023, and on class I devices by May 26, 2025."
  },
  {
    type: "basic",
    title: "Complete!",
    description: "You can explore the full SOP and save the link to the page for reference as needed.",
    image: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938"
  }
];

export default cards;
