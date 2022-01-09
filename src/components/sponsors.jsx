import React, { useState } from "react";
import "../styles/navbar.css";

const page = [
  {
    id: 1,
    textHeader: "SPONSORS",
    sponsor: [
      {
        id: 1,
        title: "Platinum",
        content: [
          {
            key: 1,
            src: "images/sponsors/platinum_1.png",
          },
        ],
      },
      {
        id: 2,
        title: "Gold",
        content: [
          {
            key: 1,
            src: "images/sponsors/gold_1.png",
          },
        ],
      },
      {
        id: 3,
        title: "Silver",
        content: [
          {
            key: 1,
            src: "images/sponsors/silver_1.png",
          },
        ],
      },
    ],
  },
];

const SponsorTag = ({ Text }) => {
  return (
    <div className="text-2xl col-span-4 font-Sansation font-bold text-white px-10 flex justify-center items-center">
      {Text}
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="grid grid-cols-4 gap-10">
      <div
        className="
        col-span-2 pt-20 pl-10 text-white 
        font-Sansation font-bold text-4xl border-b-2
      "
      >
        SPONSORS
      </div>
      {page
        .filter((item) => {
          return item.textHeader === "SPONSORS";
        })[0]
        .sponsor.map((item) => {
          return (
            <div id={item.title} className="bigCont col-span-4" key={item.id}>
              <div id="grid">
                <SponsorTag Text={item.title} />
                {item.content.map((item) => {
                  console.log(item.src.default);
                  return (
                    <img
                      className="px-10 flex justify-center items-center"
                      key={item.key}
                      src={item.src}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Sponsors;
