import React from "react";
import "../styles/cards.css";
import "../styles/navbar.css";
import { useNav } from "../helpers/customHooks/useNav";
import medical from "../images/track/medical.png";
import cash from "../images/track/cash.png";
import education from "../images/track/education.png";
import agriculture from "../images/track/sunrise.png";
import fitness from "../images/track/fitness.png";
import bulb from "../images/track/bulb.png";

const Cards = ({ imgsource, title, content }) => {
  return (
    <>
      <section className="py-2">
        <section
          className={`grid lg:grid-cols-2 lg:gap-4  sm:grid-cols-1 w-auto h-auto`}
        >
          <section className="col-start-1 lg:col-span-1 w-auto">
            <img src={imgsource} />
          </section>
          <section className="lg:col-start-2 lg:col-span-1">
            <section className="uppercase font-Sansation text-3xl font-semibold">
              {title}
            </section>
            <section className="background-card font-Sansation font-regular text-lg text-left uppercase">
              {content}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

const Tracks = () => {
  const tracksRef = useNav("Tracks");
  const Content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem mauris. Duis molestie finibus magna";
  return (
    <>
      <div
        className="mt-24 px-8 sm:px-0 mb-40"
        ref={tracksRef}
        id="tracksContainer"
      >
        <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            TRACKS
          </section>
          <div class="h-1 w-full rounded-lg bg-white" />
        </section>
        <section className="text-white font-Sansation font-bold text-4xl text-center">
          <section className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 md:gap-2 sm:grid-cols-1">
            <section className="px-4 lg:col-start-1 md:col-start-1 col-span-1 my-2">
              <section className="my-4 bg-gradPink">
                <Cards title="Title" content={Content} imgsource={medical} />
              </section>
              <section className="my-4 bg-[#960000]">
                <Cards title="Title" content={Content} imgsource={cash} />
              </section>
            </section>
            <section className="px-4 lg:col-start-2 md:col-start-2 col-span-1">
              <section className="my-4 bg-[#5915B0]">
                <Cards title="Title" content={Content} imgsource={education} />
              </section>
              <section className="my-4 bg-[#597800]">
                <Cards
                  title="Title"
                  content={Content}
                  imgsource={agriculture}
                />
              </section>
            </section>
            <section className="px-4 lg:col-start-3 md:col-start-3 col-span-1">
              <section className="my-4 bg-[#DD962A]">
                <Cards title="Title" content={Content} imgsource={fitness} />
              </section>
              <section className="my-4 bg-[#388787]">
                <Cards title="Title" content={Content} imgsource={bulb} />
              </section>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Tracks;
