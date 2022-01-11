import * as React from "react";
import CountDown from "./countdown";
import hackhublogo from "../images/hackhublogo.png";
import discordlogo from "../images/footer/discord.png";
import aries from "../images/svgs/aries.svg";
import libra from "../images/svgs/libra.svg";
import virgo from "../images/svgs/virgo.svg";
import aquaris from "../images/svgs/Aquaris.svg";
import pisces from "../images/svgs/pisces.svg";
import leo from "../images/svgs/leo.svg";
import group22 from "../images/svgs/Group_22.svg";


const CentralComponents = () => {
  return (
    <>
      <div className="h-screen relative">
        <section className="z-0">
          <section className="absolute opacity-0 hover:opacity-100 transition duration-500 top-10">
            <img src={libra} alt="libra" className="w-2/3" />
          </section>
          <section className="absolute opacity-0 hover:opacity-100 transition duration-500 -top-10 left-1/3">
            <img src={virgo} alt="virgo" className="w-5/6" />
          </section>
          <section className="absolute opacity-0 hover:opacity-100 transition duration-500 top-6 right-20">
            <img src={aquaris} alt="aquaris" className="w-5/6" />
          </section>
          <section className="absolute opacity-0 hover:opacity-100 transition duration-500 bottom-1/4 right-0">
            <img src={pisces} alt="pisces" className="w-3/4 ml-auto" />
          </section>
          <section className="absolute opacity-0 hover:opacity-100 transition duration-500 bottom-14 right-1/3">
            <img src={aries} alt="aries" className="w-2/3 ml-16" />
          </section>
          <section className="absolute opacity-0 hover:opacity-100 transition duration-500 bottom-1/4 ">
            <img src={leo} alt="leo" className="w-3/4" />
          </section>
          <section className="absolute opacity-0 hover:opacity-100 transition duration-500 top-1/4 left-1/4">
            <img src={group22} alt="group22" className="w-2/3" />
          </section>
        </section>
        <div className="w-full pt-28 px-10 md:p-20 md:pb-12">
          <div className="md:w-2/3 mx-auto">
            <img src={hackhublogo} alt="Hackhub 2022" />
          </div>
          <div className="mt-2 md:mt-6 text-center">
            <h1 className="text-4xl md:text-6xl font-Atmos mx-auto text-gray-300">
              2022
            </h1>
          </div>
        </div>
        <CountDown />
        <div className="mt-12 md:px-36 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="cursor-pointer mx-auto order-1 md:order-1 md:mx-0 md:ml-auto font-SanBold font-bold bg-gradient-to-r w-80 from-gradViolet to-gradPink flex items-center justify-center text-xl text-center text-white shadow-xl hover:shadow-md rounded-2xl py-4 md:py-0">
            <button>REGISTER ON DEVFOLIO</button>
          </div>
          <div className="relative z-40 cursor-pointer mx-auto order-3 md:order-2 mt-12 md:mt-0 drop-shadow-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="url(#gradientarrow)" >
              <defs>
                <linearGradient id="gradientarrow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#440089" />
                  <stop offset="100%" stop-color="#FF005D" />
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
          </div>
          <div className="cursor-pointer mx-auto order-2 md:order-3 md:mx-0 drop-shadow-2xl font-SanBold font-bold bg-gradient-to-r w-80 from-gradViolet to-gradPink flex items-center justify-center text-xl text-center text-white shadow-xl hover:shadow-md rounded-2xl py-4 md:py-0">
            <img src={discordlogo} alt="Discord" className="w-8 mr-4" />
            <button>JOIN US ON DISCORD</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentralComponents;
