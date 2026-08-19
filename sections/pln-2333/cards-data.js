window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["pln-2333"] = {
  documentType: "PLN",
  documentNumber: "2333",
  documentTitle: "Firmware Test Procedure",
  documentUrl: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8631190575/",
  linkLabel: "Open PLN in Confluence",
  description: "Firmware test procedure overview",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "PLN 2333",
      summary: "Firmware Test Procedure",
      body: "PLN 2333 - Firmware Test Procedure",
    },
    {
      tag: "Button",
      title: "Open PLN in Confluence",
      summary: "Open the complete firmware test procedure.",
      body:
        "The document outlines firmware test procedures with specific preconditions, procedures, and expected results.",
      media: [
        {
          type: "button",
          src: "https://swiftmedical.atlassian.net/wiki/spaces/DMS/pages/8631190575/",
          caption: "Open PLN in Confluence",
          buttonLabel: "Open PLN in Confluence",
        },
      ],
    },
    {
      tag: "LED",
      title: "LED Operations",
      summary:
        "Tests cover LED operations, flash patterns, status LED states, Lepton on/off state, firmware version, battery percentage, serial number provisioning, unsafe LED states, device use while charging, and timeout.",
      body:
        "The procedure verifies a wide range of firmware-controlled behaviors and status outputs.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/e819484f-c8c9-4892-b3b4-41ab34fc7ecf",
          alt: "LED operations",
          caption: "LED operations",
        },
      ],
    },
    {
      tag: "Setup",
      title: "Device Setup",
      summary:
        "Each test requires a fully assembled and charged device with latest firmware.",
      body:
        "Some tests also require apps or tools such as nRF Connect or a multimeter.",
    },
    {
      tag: "Results",
      title: "Expected Results",
      summary:
        "Expected outcomes include specific LED behavior, flash sequences, and broadcasting of firmware version and battery percentage characteristics.",
      body: "Each test has clear pass criteria tied to expected device behavior.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/95d3da4c-7b48-416b-abb0-2a10fe97b532",
          alt: "Expected results",
          caption: "Expected results",
        },
      ],
    },
    {
      tag: "Multi-Device",
      title: "Multi-Device Tests",
      summary:
        "Some tests require multiple devices in different states.",
      body:
        "For example, the Status LED States test requires three devices with different battery statuses and assembly conditions.",
    },
    {
      tag: "Quiz",
      title: "Document Purpose",
      summary: "What is the purpose of the document?",
      body:
        "The document outlines a series of firmware test procedures with preconditions, procedures, and expected results.",
      question: {
        prompt: "What is the purpose of the document?",
        choices: [
          {
            label: "To outline a series of firmware test procedures for a device",
            value: "procedures",
          },
          {
            label: "To provide instructions for assembling and charging the device",
            value: "assembly",
          },
          {
            label: "To provide expected results for each test",
            value: "results",
          },
        ],
        correctAnswer: "procedures",
        comment:
          "The document outlines a series of firmware test procedures for a device, each with specific preconditions, procedures, and expected results.",
      },
    },
    {
      tag: "Safety",
      title: "Safety Tests",
      summary:
        "Safety-related tests include Unsafe LED States and Inhibit Use While Charging.",
      body:
        "Unsafe LED States checks duration and frequency limits. Inhibit Use While Charging ensures the device goes to sleep when plugged in.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/3dd797d7-0981-4701-a718-7caa0ffbe36f",
          alt: "Safety tests",
          caption: "Safety tests",
        },
      ],
    },
    {
      tag: "Timeout",
      title: "Timeout Test",
      summary:
        "The Timeout test checks that the device sleeps after a period of inactivity.",
      body: "This supports expected power and energy efficiency behavior.",
    },
    {
      tag: "Serial",
      title: "Serial Numbering",
      summary:
        "Serial number provisioning sends a serial number over BLE and verifies it appears in the device Bluetooth name.",
      body:
        "This validates device connectivity and data handling behavior.",
    },
    {
      tag: "Thermal",
      title: "Thermal Image",
      summary:
        "The Thermal Image test sends image byte array data over BLE.",
      body:
        "This test verifies more complex firmware functionality and data transfer behavior.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/41e772ce-4a0e-421b-b2a6-121eb026fffb",
          alt: "Thermal image test",
          caption: "Thermal image test",
        },
      ],
    },
    {
      tag: "Requirements",
      title: "Firmware Requirements",
      summary:
        "Each test is mapped to firmware requirements referenced in the document.",
      body:
        "This ensures tests align with intended functionality and performance standards.",
    },
    {
      tag: "Quiz",
      title: "Thermal Image Check",
      summary: "What is the Thermal Image test?",
      question: {
        prompt: "What is the Thermal Image test?",
        choices: [
          {
            label:
              "It checks that the device only flashes LEDs for a specific duration and frequency",
            value: "led",
          },
          {
            label:
              "It sends a byte array containing image data over Bluetooth Low Energy (BLE)",
            value: "ble-image",
          },
          {
            label:
              "It ensures the device goes to sleep after a period of inactivity",
            value: "sleep",
          },
        ],
        correctAnswer: "ble-image",
        comment:
          "The Thermal Image test involves sending a byte array containing image data over Bluetooth Low Energy (BLE).",
      },
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "You can explore the full form and save the link to the page for reference as needed.",
      body: "Open the full form for detailed reference whenever needed.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938",
          alt: "Complete card image",
          caption: "Complete",
        },
      ],
    },
  ],
};