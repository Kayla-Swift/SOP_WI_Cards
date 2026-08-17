window.sopDeck = {
  title: "Machine Startup SOP",
  description:
    "Use this template to create simple, mobile-friendly learning cards with text, images, and videos.",
  theme: {
    accent: "#7c3aed",
    surface: "#ffffff",
    background: "#f5f3ff",
    text: "#1f1637",
  },
  cards: [
    {
      tag: "Step 1",
      title: "Inspect the workstation",
      summary: "Start every shift by checking the area, guards, and supplies.",
      body: "Walk the operator station before startup. Confirm the machine is clear, safety guards are in place, and required materials are available.",
      bullets: [
        "Verify emergency stop access is unobstructed.",
        "Check for spills, loose items, or damaged cables.",
        "Confirm labels, batch sheets, and PPE are ready.",
      ],
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1581092921461-eab10380b194?auto=format&fit=crop&w=1200&q=80",
          alt: "Operator reviewing an industrial workstation",
          caption: "Example inspection view",
        },
      ],
    },
    {
      tag: "Step 2",
      title: "Power on and confirm settings",
      summary: "Turn on the equipment and confirm the programmed job matches the order.",
      body: "Use the standard startup sequence shown by your team. Once powered on, verify the selected program, target settings, and status indicators before running product.",
      bullets: [
        "Match the work order to the machine program.",
        "Confirm temperature, speed, or pressure setpoints.",
        "Record any warning messages before continuing.",
      ],
      media: [
        {
          type: "video",
          format: "file",
          src: "https://www.w3schools.com/html/mov_bbb.mp4",
          poster:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
          caption: "Replace with your training clip or local MP4.",
        },
      ],
    },
    {
      tag: "Step 3",
      title: "Run the first-piece check",
      summary: "Validate the first output before releasing the machine to production.",
      body: "Create the first piece, compare it with the approved standard, and escalate any mismatch before continuing. This card shows that embedded videos can also be used.",
      bullets: [
        "Measure the required dimensions or attributes.",
        "Confirm the reference sample is current.",
        "Capture results according to your SOP.",
      ],
      media: [
        {
          type: "video",
          format: "embed",
          src: "https://www.youtube.com/embed/ysz5S6PUM-U",
          title: "Embedded setup example",
          caption: "Replace with your own hosted embed URL.",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
          alt: "Quality check on a manufactured part",
          caption: "Reference image example",
        },
      ],
    },
  ],
};
