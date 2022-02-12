import React from "react";
import icon from "../images/icon.png";
import "../styles/navbar.css";
import { useNav } from "../helpers/customHooks/useNav";

const Cards = ({ source }) => {
  return (
    <>
      <section className="">
        <section className="py-2 w-auto">
          <img src={source} />
        </section>
      </section>
    </>
  );
};

const Speakers = () => {
  const speakersRef = useNav("Speakers");

  return (
    <>
      <div
        className="mt-24 px-8 sm:px-0 mb-40"
        ref={speakersRef}
        id="speakersContainer"
      />
      <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
        <section className="text-white font-Sansation font-bold text-5xl text-center">
          SPEAKERS
        </section>
        <div class="h-1 w-full rounded-lg bg-white" />
      </section>
      <h1 className="text-white font-Sansation font-bold text-4xl text-center">To Be Announced...</h1>
      {/* <section>
        <section className="md:pl-5 lg:pl-10 grid lg:grid-cols-3 lg:gap-6 md:grid-cols-3 md:gap-4 sm:grid-cols-1 gap-2 text-center items-center">
          <section className="md:col-start-1 lg:col-start-1 lg:col-span-1 md:col-span-1">
            <Cards source={icon} />
          </section>
          <section className="md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1">
            <Cards source={icon} />
          </section>
          <section className="md:col-start-3 md:col-span-1 lg:col-start-3 lg:col-span-1">
            <Cards source={icon} />
          </section>
        </section>
      </section> */}
    </>
  );
};

export default Speakers;
