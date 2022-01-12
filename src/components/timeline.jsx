import * as React from "react";
import hex1 from "../images/hex1.png";
import hex2 from "../images/hex2.png";
import arrow1 from "../images/arrow1.png";
import arrow2 from "../images/arrow2.png";
import libra from "../images/svgs/libra.svg";
import aries from "../images/svgs/aries.svg";
import trophy from "../images/svgs/trophy.svg";
import leo from "../images/svgs/leo.svg";
import group22 from "../images/svgs/Group_22.svg";
import { useRef } from "react";

const TimeLine = () => {

  const timelineRef = useRef(null);

  React.useEffect(() => {
    const onScroll = e => {
      console.log(timelineRef.current.offsetTop)
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="h-screen px-8 sm:px-0" ref={timelineRef}>
        <section className="sm:w-1/3 lg:w-1/5 py-8">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            TIMELINE
          </section>
          <div class="h-1 w-full rounded-lg bg-white"></div>
        </section>
        <div className="container bg-transaparent mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden md:p-10 h-full">
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="shadow-xl md:w-5/12 relative">
                <div>
                  <div className="ml-auto w-32 md:w-72">
                    <img src={arrow1} alt="arrow1" />
                  </div>
                  <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya absolute top-2 right-6 md:top-4 md:right-16">
                    Registration Starts
                  </div>
                </div>
              </div>
              <div className="z-20 flex items-center shadow-xl">
                <div className="text-9xl text-black relative mx-auto">
                  <div className="md:w-24 w-14">
                    <img src={hex1} alt="hex1" />
                  </div>
                  <section className="absolute top-3 md:top-5 left-1 md:left-2 md:w-24 w-14 z-30">
                    <img src={libra} alt="Libra" />
                  </section>
                </div>
              </div>
              <div className="w-32 md:w-5/12">
                <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya text-left">
                  14th Febraury 2022
                </div>
              </div>
            </div>
            <div class="h-8 lg:h-12 w-1 bg-gradient-to-b mx-auto from-gradPink to-gradViolet"></div>
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="w-32 md:w-5/12">
                <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya text-right">
                  14th Febraury 2022
                </div>
              </div>
              <div className="z-20 flex items-center shadow-xl">
                <div className="text-9xl text-black relative mx-auto">
                  <div className="md:w-24 w-14">
                    <img src={hex2} alt="hex2" />
                  </div>
                  <section className="absolute top-3 md:w-24 w-14 z-30">
                    <img src={group22} alt="group22" />
                  </section>
                </div>
              </div>
              <div className="shadow-xl md:w-5/12 relative">
                <div>
                  <div className="mr-auto w-32 md:w-72">
                    <img src={arrow2} alt="arrow2" />
                  </div>
                  <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya absolute top-2 left-7 md:top-4 md:left-20">
                    Registration Ends
                  </div>
                </div>
              </div>
            </div>
            <div class="h-8 lg:h-12 w-1 bg-gradient-to-b mx-auto from-gradPink to-gradViolet"></div>
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="shadow-xl md:w-5/12 relative">
                <div className="ml-auto">
                  <div className="ml-auto w-32 md:w-72">
                    <img src={arrow1} alt="arrow1" />
                  </div>
                  <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya absolute top-2 right-6 md:top-4 md:right-16">
                    Submission Starts
                  </div>
                </div>
              </div>
              <div className="z-20 flex items-center shadow-xl">
                <div className="text-9xl text-black relative mx-auto">
                  <div className="md:w-24 w-14">
                    <img src={hex1} alt="hex1" />
                  </div>
                  <section className="absolute top-3 left-1 md:left-2 md:w-24 w-14 z-30">
                    <img src={aries} alt="aries" />
                  </section>
                </div>
              </div>
              <div className="w-32 md:w-5/12">
                <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya text-left">
                  14th Febraury 2022
                </div>
              </div>
            </div>
            <div class="h-8 lg:h-12 w-1 bg-gradient-to-b mx-auto from-gradPink to-gradViolet"></div>
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="w-32 md:w-5/12">
                <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya text-right">
                  14th Febraury 2022
                </div>
              </div>
              <div className="z-20 flex items-center shadow-xl">
                <div className="text-9xl text-black relative mx-auto">
                  <div className="md:w-24 w-14">
                    <img src={hex2} alt="hex2" />
                  </div>
                  <section className="absolute top-3 md:top-8 md:w-24 w-14 z-30">
                    <img src={leo} alt="leo" />
                  </section>
                </div>
              </div>
              <div className="shadow-xl md:w-5/12 relative">
                <div>
                  <div className="mr-auto w-32 md:w-72">
                    <img src={arrow2} alt="arrow2" />
                  </div>
                  <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya absolute top-2 left-7 md:top-4 md:left-20">
                    Submission Ends
                  </div>
                </div>
              </div>
            </div>
            <div class="h-8 lg:h-12 w-1 bg-gradient-to-b mx-auto from-gradPink to-gradViolet"></div>
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="shadow-xl md:w-5/12 relative">
                <div className="ml-auto ">
                  <div className="ml-auto w-32 md:w-72">
                    <img src={arrow1} alt="arrow1" />
                  </div>
                  <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya absolute top-2 right-12 md:top-4 md:right-32">
                    Results
                  </div>
                </div>
              </div>
              <div className="z-20 flex items-center shadow-xl">
                <div className="text-9xl text-black relative mx-auto">
                  <div className="md:w-24 w-14">
                    <img src={hex1} alt="hex1" />
                  </div>
                  <section className="absolute top-3 md:top-6 left-1 md:w-24 w-14 z-30">
                    <img src={trophy} alt="trophy" />
                  </section>
                </div>
              </div>
              <div className="w-32 md:w-5/12">
                <div className="uppercase text-white text-bold md:text-xl text-xxs font-Arya text-left">
                  14th Febraury 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
