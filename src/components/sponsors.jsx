import React, { useState } from "react";
import "../styles/styles.css";

const page = [
  {
    id: 1,
    textHeader: "SPONSORS",
    sponsor: [
      {
        id: 1,
        title: "Platinum",
        content: [],
      },
      {
        id: 2,
        title: "Gold",
        content: [],
      },
      {
        id: 3,
        title: "Silver",
        content: [],
      },
    ]
  }
]

const SponsorTag = ( {Text} ) => {
  return (
      <p id={Text} className="col-span-4 font-Atmospheric text-white px-10 sponsor_gradient flex justify-center items-center">
        {Text}
      </p>
  );
}

const Sponsors = () => {
  return (
    <section className="grid grid-cols-4 gap-10">
      <div className="
        col-span-2 pt-20 pl-10 text-white 
        font-Sansation font-bold text-4xl border-b-2
      ">
        SPONSORS 
      </div>
      {
        (page.filter((item) => {
          return item.textHeader === "SPONSORS"
        })[0]).sponsor.map((item) => {
          return <SponsorTag Text={item.title} />
        })
      }
    </section>
  );
}

export default Sponsors;
