import React from "react";
import items from "./data";
import { Chrono } from "react-chrono";

const TimeLine = () => {
  return (
    <section className="py-4 grid sm:grid-cols-3 lg:grid-cols-12">
      <section className="sm:col-start-1 lg:col-start-2 col-span-8">
        <section className="py-4 font-Ally text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-oran to-[#9C214D]">
          Timeline
        </section>

        <section style={{ height: "90vh" }} className="border-2">
          <Chrono
            items={items}
            mode="VERTICAL"
            enableOutline={true}
            theme={{
              primary: "#101743",
              secondary:"white",
              cardBgColor:"#efefef"
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
