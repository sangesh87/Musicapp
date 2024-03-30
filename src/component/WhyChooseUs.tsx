"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
      title: "Discover your sound with us: A personal journey in Music Msatery",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
     
    },

    {
        title: "Discover your sound with us: A personal journey in Music Msatery",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
       
      },

      {
        title: "Discover your sound with us: A personal journey in Music Msatery",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
       
      },

      {
        title: "Discover your sound with us: A personal journey in Music Msatery",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
       
      },

      {
        title: "Discover your sound with us: A personal journey in Music Msatery",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
       
      },

      {
        title: "Discover your sound with us: A personal journey in Music Msatery",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
       
      },
   
  
     
  ];
function WhyChooseUs() {
    return(
        <div>
            <StickyScroll content={musicSchoolContent}/>
        </div>
    )
}
export default WhyChooseUs