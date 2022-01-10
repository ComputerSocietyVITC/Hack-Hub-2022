import * as React from "react";
import hackhublogo from "../images/hackhublogo.png";

const CentralComponents = () => {
  return (
    <>
      <div className="h-screen">
        <div className="w-full pt-28 px-10 md:p-28">
          <div className="md:w-2/3 mx-auto">
            <img src={hackhublogo} alt="Hackhub 2022" />
          </div>
          <div className="mt-2 md:mt-6 text-center">
            <h1 className="text-4xl md:text-7xl font-Atmos mx-auto text-gray-300">
              2022
            </h1>
          </div>
        </div>
        <div className="mt-28 md:px-36 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="mx-auto order-1 md:order-1 md:mx-0 md:ml-auto font-SanBold font-bold bg-gradient-to-r w-80 from-gradViolet to-gradPink py-3 text-xl text-center text-white shadow-xl hover:shadow-md rounded-2xl">
            <button>REGISTER ON DEVFOLIO</button>
          </div>
          <div className="mx-auto order-3 md:order-2 mt-20 md:mt-0 drop-shadow-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 md:h-14 md:w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="url(#gradient)"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#440089" />
                  <stop offset="100%" stop-color="#FF005D" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
          <div className="mx-auto order-2 md:order-3 md:mx-0 drop-shadow-2xl font-SanBold font-bold bg-gradient-to-r w-80 from-gradViolet to-gradPink py-3 text-xl text-center text-white shadow-xl hover:shadow-md rounded-2xl">
            <button>JOIN US ON DISCORD</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentralComponents;
