import React from "react";
import About from "../about/about";
import "../../styles/gradients.css"
import TimeLine from "../core/timeline";

const WhitePageOne = () => {
  return (
    <section className="h-full bg-[#efefef]">
      <About />
      <TimeLine/>
    </section>
  );
};
export default WhitePageOne;
