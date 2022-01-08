import * as React from "react";
import CountDown from "../components/countdown";
import Navbar from "../components/navbar";
import TimeLine from "../components/timeline";
import About from "../components/about";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>

      <Navbar />
      <CountDown />
      <About /> 
      <TimeLine />
      <Footer />
    </>
  );
};

export default IndexPage;
