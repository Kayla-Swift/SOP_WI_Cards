const cards = [
  {
    type: "title",
    title: "WI 2130",
    description: "Sinatra Assembly Work Instruction"
  },
  {
    type: "button",
    title: "The document is a detailed work instruction for the assembly of the Sinatra (Ray 1) device, a product of Swift. The instruction is authored by Trevor Folska-Fung, a Manufacturing and Procurement Engineer, and edited by Shadman Mahfuz, a Hardware Engineer.",
    button: "Open WI in Sharepoint",
    target: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work Instructions/Work Instruction - Ray 1- Sinatra/DMS-[DRAFT]-WorkInstruction-Ray-1-Assembly-WorkInstruction-(Hardware--Electrical)-[SIN-WI2130_J]-10180526082.aspx"
  },
  {
    type: "basic",
    title: "Tools & Supplies",
    description: "The assembly process requires specific tools and supplies, including an anti-static mat, ESD lab coat, ESD wrist wrap, Gorilla Glue, Lee Valley Glue, a suction pickup tool, isopropyl alcohol, a microfiber cloth, tweezers, scissors, a screwdriver, an ESD kitting tray, Kimtech wipes, gloves, and a mini detail brush."
  },
  {
    type: "basic",
    title: "Place Button",
    description: "The assembly process involves several steps, including preparing and cleaning the work area, retrieving the necessary parts for assembly, placing a protective silicone mat on top of the ESD mat, placing the button on the housing back face cover, and using the suction pickup tool to handle the GE window.",
    image: "https://cdn1.7taps.com/Production/18397/470ee7b9-ed63-43a2-8852-d8d36d5ed474"
  },
  {
    type: "basic",
    title: "Glue Window",
    description: "The document provides detailed instructions on how to glue the GE window to the front face, how to clean the GE window if any super glue is visible, and how to remove the black silicone mat to expose the blue ESD mat."
  },
  {
    type: "basic",
    title: "Insert Battery",
    description: "The assembly process also involves inserting the battery holder into the main body on top of the housing diaphragm, placing the lepton sensor into its connector on the ring board, noting the serial number on the back of the ring board, and taping a small piece of paper with the serial number to the back face cover.",
    image: "https://cdn1.7taps.com/Production/18397/ab1f20d6-15d6-47b0-adaa-db2a8f098f38"
  },
  {
    type: "quiz",
    title: "What tools and supplies are necessary for the assembly process?",
    options: [
      {
        text: "An anti-static mat",
        correct: true
      },
      {
        text: "Gorilla Glue"
      },
      {
        text: "Isopropyl alcohol"
      }
    ],
    comment: "The assembly process requires specific tools and supplies, including an anti-static mat, ESD lab coat, ESD wrist wrap, Gorilla Glue, Lee Valley Glue, a suction pickup tool, isopropyl alcohol, a microfiber cloth, tweezers, scissors, a screwdriver, an ESD kitting tray, Kimtech wipes, gloves, and a mini detail brush."
  },
  {
    type: "basic",
    title: "Connect Battery",
    description: "The document provides instructions on how to connect the battery to the driver board, place the battery into the battery holder, place the driver board on top of the battery holder, and screw down the sides of the driver board into the battery holder."
  },
  {
    type: "basic",
    title: "Insert FFC",
    description: "The assembly process also involves inserting the FFC cable into the driver board and ring board, ensuring the ring board is sitting flat on the main body of the device, fitting the back cover into place, placing the foam fitting onto the lepton, placing the filter into the hole at the center of the main body, and placing the front cover."
  },
  {
    type: "basic",
    title: "Place in Bin",
    description: "The document provides instructions on how to place the completed Sinatra device into the finished pre-inventory bin, record the serial number on the Sinatra Inventory Sheet, and ensure there are no leftover parts left in the ESD Kitting Tray.",
    image: "https://cdn1.7taps.com/Production/18397/2bf9380f-3b57-4f90-83ce-d0c69b0f8f89"
  },
  {
    type: "basic",
    title: "Revision History",
    description: "The document also includes a revision history, which shows that the work instruction has undergone several revisions, with changes including updated numbering on step 17, removal of OLD PORON from step 18, addition of steps on how to glue the GE window to the front face, and addition of wording on step 30 for the operator to ensure there are no leftover parts in the ESD kitting tray."
  },
  {
    type: "basic",
    title: "Cleanliness Emphasis",
    description: "The document emphasizes the importance of cleanliness and precision in the assembly process, with several steps involving the use of Kimtech wipes to remove dust and other particulate, gloves to maintain cleanliness for the product, and isopropyl alcohol to clean the GE window."
  },
  {
    type: "quiz",
    title: "What is the document about?",
    options: [
      {
        text: "Instructions on how to assemble the Sinatra device",
        correct: true
      },
      {
        text: "A revision history of the work instruction"
      },
      {
        text: "The importance of cleanliness and precision"
      }
    ],
    comment: "The document provides instructions on how to assemble the Sinatra device, including connecting the battery to the driver board, inserting the FFC cable, placing the back and front covers, and placing the device into the finished pre-inventory bin."
  },
  {
    type: "basic",
    title: "Complete!",
    description: "You can explore the full SOP and save the link to the page for reference as needed.",
    image: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938"
  }
];

export default cards;
