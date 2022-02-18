import React from "react";
import "../styles/navbar.css";
import { useNav } from '../helpers/customHooks/useNav';
import devFolio from "../images/sponsors/platinum/devfolio.png";
import polygon from "../images/sponsors/platinum/polygon.png";
import digitalocean from "../images/sponsors/platinum/digitalocean.png";
import celo from "../images/sponsors/gold/celo.png";
import tezos from "../images/sponsors/gold/tezos.png";
import filecoin from "../images/sponsors/gold/filecoin.png";
import koii from "../images/sponsors/gold/koii.png"
import gfg from "../images/sponsors/gold/gfg.png"
import certopus from "../images/sponsors/silver/certopus.png";
import echo from "../images/sponsors/silver/echo.png";
import badeLog from "../images/sponsors/silver/badelog.png";
import xyz from "../images/sponsors/silver/xyz.png";
import leadinglearners from "../images/sponsors/silver/leadinglearners.png";
import taskade from "../images/sponsors/silver/taskade.png";
import axure from "../images/sponsors/silver/axure.png";
import clerky from "../images/sponsors/silver/clerky.png";
import codingninjas from "../images/sponsors/silver/codingninjas.png";
import raahee from "../images/sponsors/silver/raahee.png";

const page = [
  {
    id: 1,
    textHeader: "SPONSORS",
    sponsor: [
      {
        id: 1,
        title: "Platinum",
        border: "border-gray-200",
        headingColor: "bg-clip-text text-transparent bg-gradient-to-t from-gray-100 to-gray-300",
        content: [
          {
            key: 1,
            src: devFolio,
            href: 'https://devfolio.co/'
          },
          {
            key: 2,
            src: polygon,
            href: 'https://polygon.technology/'
          },
          {
            key: 3,
            src: digitalocean,
            href: 'https://www.digitalocean.com/'
          }
        ],
      },
      {
        id: 2,
        title: "Gold",
        border: "border-yellow-400",
        headingColor: "bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 to-yellow-500",
        content: [
          {
            key: 1,
            src: celo,
            href: 'https://celo.org/'
          },
          {
            key: 2,
            src: tezos,
            href: 'https://tezos.com/'
          },
          {
            key: 3,
            src: filecoin,
            href: 'https://filecoin.io/'
          },
          {
            key: 4,
            src: koii,
            href: 'https://koii.network/'
          },
          {
            key: 5,
            src: gfg,
            href: 'https://www.geeksforgeeks.org/'
          }
        ],
      },
      {
        id: 3,
        title: "Silver",
        border: "border-gray-400",
        headingColor: "bg-clip-text text-transparent bg-gradient-to-t from-gray-300 to-gray-500",
        content: [
          {
            key: 1,
            src: certopus,
            href: 'https://certopus.com/'
          },
          {
            key: 2,
            src: echo,
            href: 'https://www.echo3d.co/'
          },
          {
            key: 3,
            src: badeLog,
            href: 'https://badelog.co.in/'
          },
          {
            key: 4,
            src: xyz,
            href: 'https://gen.xyz/'
          },
          {
            key: 5,
            src: taskade,
            href: 'https://taskade.com/'
          },
          {
            key: 6,
            src: leadinglearners,
            href: 'https://linktr.ee/leadinglearners'
          },
          {
            key: 7,
            src: axure,
            href: 'https://www.axure.com/'
          },
          {
            key: 8,
            src: clerky,
            href: 'https://www.clerky.com/'
          },
          {
            key: 9,
            src: codingninjas,
            href: 'https://codingninjas.com/'
          },
          {
            key: 10,
            src: raahee,
            href: 'https://raahee.in/'
          }
        ],
      },
    ],
  },
];

const SponsorTag = ({ Text, headingColor }) => {
  return (
    <div className={"text-3xl font-Sansation font-bold uppercase text-center my-3 " + headingColor}>
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
        {<section className="sm:mx-24 lg:mx-36">
          {page
            .filter((item) => {
              return item.textHeader === "SPONSORS";
            })[0]
            .sponsor.map((item) => {
              return (
                <div className={"col-span-4 rounded-3xl my-10 py-2 "} key={item.id}>
                  <SponsorTag Text={item.title} headingColor={item.headingColor} />
                  <div className="lg:flex lg:flex-wrap lg:justify-around bg-transparent mx-8" >
                    {item.content.map((item) => {
                      return (
                        <a href={item.href} target="_blank" rel="noreferrer" style={{ "flexBasis": "33%" }}>
                          <div className="h-20 bg-white hover:bg-gray-200 m-6 rounded-xl">
                            <img
                              className="object-contain p-3 h-full w-full"
                              key={item.key}
                              src={item.src}
                              alt={item.href}
                            />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </section>}
      </div>
    </>
  );
};

export default Sponsors;
