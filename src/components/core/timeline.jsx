import React from "react";
import items from "./data";
import { Chrono } from "react-chrono";

const ListItem = ({ DateContent, Title, Content }) => {
  return (
    <>
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-black"></div>
        <section class="mb-1 font-Ally text-lg font-normal leading-none text-black">
          {DateContent}
        </section>
        <h3 class="text-lg font-semibold text-gray-900">{Title}</h3>
        <p class="mb-4 font-Ally font-normal text-black">{Content}</p>
      </li>
    </>
  );
};

const TimeLine = () => {
  return (
    <section className="py-4 grid sm:grid-cols-3 lg:grid-cols-12">
      <section className="sm:col-start-1 lg:col-start-2 col-span-8">
        <section className="py-4 font-Ally text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-oran to-[#9C214D]">
          Timeline
        </section>

        <section style={{ height: "90vh" }}>
          <Chrono
            items={items}
            mode="VERTICAL"
            enableOutline={true}
            theme={{
              primary: "#101743",
            }}
            slideShow
            slideItemDuration={4000}
            cardHeight={150}
          />
        </section>
      </section>
    </section>
  );
};

export default TimeLine;
