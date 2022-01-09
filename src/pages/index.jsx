import * as React from "react";
import CountDown from "../components/countdown";
import Navbar from "../components/navbar";
import TimeLine from "../components/timeline";
import About from "../components/about";
import CentralComponents from "../components/centralComponents";
import FAQ from "../components/faq";

const IndexPage = () => {
  return (
    <>

      <Navbar />
      <CentralComponents />
      <CountDown />
      <About />
      <TimeLine />
      <FAQ />
    </>
  );
};

export default IndexPage;
