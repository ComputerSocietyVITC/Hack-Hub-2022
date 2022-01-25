import React from "react";
import Navbar from "../components/navbar/navbar";
import MainPage from "../components/core/main";
import Footer from "../components/footer/footer";
import {Skills,About} from "../components/core/skills";
import WhitePageOne from "../components/wrappers/about-framework";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <WhitePageOne />
      <Skills/>
      {/* <About/> */}
      <Footer />
    </>
  );
};
export default IndexPage;
