import React, { useState } from "react";
import "../styles/navbar.css";
import { useNav } from '../helpers/customHooks/useNav';
import devFolio from "../images/sponsors/platinum/devfolio.png";
import polygon from "../images/sponsors/platinum/polygon.png";
import celo from "../images/sponsors/gold/celo.png"; 
import tezos from "../images/sponsors/gold/tezos.png";
import filecoin from "../images/sponsors/gold/filecoin.png";
import koii from "../images/sponsors/gold/koii.png"
import certopus from "../images/sponsors/silver/certopus.png";
import echo from "../images/sponsors/silver/echo.png";
import badeLog from "../images/sponsors/silver/badelog.png";

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
            src: devFolio,
          },
          {
            key: 2,
            src:polygon,
          }
        ],
      },
      {
        id: 2,
        title: "Gold",
        content: [
          {
            key: 1,
            src: celo,
          },
          {
            key: 2,
            src :tezos,
          },
          {
            key:3,
            src:filecoin,
          },
          {
            key :4,
            src :koii
          }
        ],
      },
      {
        id: 3,
        title: "Silver",
        content: [
          {
            key: 1,
            src: certopus
          },
          {
            key: 2,
            src:echo,
          },
          {
            key :3,
            src : badeLog,
          }
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

  const sponsorsRef = useNav('Sponsors');

  return (
    <>
      <div className="mt-24 px-8 sm:px-0" ref={sponsorsRef} id='sponsContainer'>
        <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            SPONSORS
          </section>
          <div class="h-1 w-full rounded-lg bg-white"></div>
        </section>
        {/*<h1 className="text-white font-Sansation font-bold text-4xl text-center">To Be Announced...</h1>*/}
        {<section className="grid grid-cols-4 gap-10">
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
                      className="px-10 h-16 flex justify-center items-center"
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
    </section> }
      </div>
    </>
  );
};

export default Sponsors;
