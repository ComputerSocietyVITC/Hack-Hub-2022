import React from "react";
import Projects from "../components/core/projects/projects";
import Navbar from "../components/navbar/navbar";
import MainPage from "../components/core/main";
import Footer from "../components/footer/footer";
import {Skills} from "../components/core/skills";
import WhitePageOne from "../components/wrappers/about-framework";
const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <MainPage />
      <WhitePageOne />
      <Skills/>
      <Projects/>
      <Footer />
    </>
  );
};
export default IndexPage;
