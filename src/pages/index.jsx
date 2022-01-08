import * as React from "react";
import CountDown from "../components/countdown";
import Navbar from "../components/navbar";
import TimeLine from "../components/timeline";
import About from "../components/about";


const IndexPage = () => {
  return (
    <>

      <Navbar />
      <CountDown />
      <About /> 
      <TimeLine />
    </>
  );
};

export default IndexPage;
