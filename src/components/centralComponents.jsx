import * as React from "react";
import CountDown from "./countdown";
import hackhublogo from "../images/logo.svg";
import discordlogo from "../images/footer/discord.png";
import aries from "../images/svgs/Aries.png";
import libra from "../images/svgs/libra.png";
import virgo from "../images/svgs/virgo.png";
import aquaris from "../images/svgs/Aquaris.png";
import pisces from "../images/svgs/pisces.png";
import leo from "../images/svgs/leo.png";
import group22 from "../images/svgs/Group_22.png";
import { useNav } from '../helpers/customHooks/useNav';

const CentralComponents = () => {

  const homeRef = useNav('Home');

  // const handleClickArrow = () => {
  //   document.getElementById("aboutContainer").scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <div className="min-h-screen relative pt-12" ref={homeRef} id='homeContainer'>
        <section className="z-0">
          <section className="absolute opacity-0 hidden lg:block hover:opacity-100 transition duration-500 top-20 left-20">
            <img src={libra} alt="libra" className="w-2/3" />
          </section>
          <section className="absolute opacity-0 hidden lg:block hover:opacity-100 transition duration-500 top-0 left-1/3">
            <img src={virgo} alt="virgo" className="w-2/3" />
          </section>
          <section className="absolute opacity-0 hidden lg:block hover:opacity-100 transition duration-500 top-6 right-20">
            <img src={aquaris} alt="aquaris" className="w-2/3" />
          </section>
          <section className="absolute opacity-0 hidden lg:block hover:opacity-100 transition duration-500 bottom-1/4 right-0">
            <img src={pisces} alt="pisces" className="w-2/3 ml-auto" />
          </section>
          <section className="absolute opacity-0 hidden lg:block hover:opacity-100 transition duration-500 bottom-0 right-1/4">
            <img src={aries} alt="aries" className="w-1/2 ml-16" />
          </section>
          <section className="absolute opacity-0 hidden lg:block hover:opacity-100 transition duration-500 bottom-40 ">
            <img src={leo} alt="leo" className="w-full" />
          </section>
          <section className="absolute opacity-0 hidden lg:block hover:opacity-100 transition duration-500 top-1/3 left-1/4">
            <img src={group22} alt="group22" className="w-1/2" />
          </section>
        </section>
        <div className="w-full pt-28 px-10 lg:p-16 pb-12">
          <div className="lg:w-1/2 mx-auto">
            <img src={hackhublogo} alt="Hackhub 2022" />
          </div>
          {/* <div className="mt-2 lg:mt-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-Atmos mx-auto text-gray-300">
              2022
            </h1>
          </div> */}
        </div>
        <CountDown />
        <div className="mt-28 lg:mt-16 lg:px-36 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-60">
          <div className="mx-auto lg:mx-0 lg:ml-auto z-20">
            <div
              className="apply-button ml-auto"
              data-hackathon-slug="hackhub2022"
              data-button-theme="light"
            />
          </div>
          {/* <div className="relative mx-auto order-3 lg:order-2 mt-12 lg:mt-0 opacity-0" onClick={handleClickArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 lg:h-14 lg:w-14" fill="none" viewBox="0 0 24 24" stroke="url(#gradientarrow)" >
              <defs>
                <linearGradient id="gradientarrow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#440089" />
                  <stop offset="100%" stop-color="#FF005D" />
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
          </div> */}
          <div className="z-20 cursor-pointer">
            <a href="https://discord.gg/UeGSd6fKNW" target="_blank" rel="noreferrer">
              <div className="mx-auto lg:mx-0 drop-shadow-2xl flex items-center justify-center text-xl font-NunitoSans text-center text-white shadow-xl hover:shadow-sm rounded py-2" style={{ "backgroundColor": "#5865F2", "width": "312px" }}>
                <img src={discordlogo} alt="Discord" className="w-8 mr-3" />
                <button>Join us on Discord</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentralComponents;
