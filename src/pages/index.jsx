import React from "react";
import "@themesberg/flowbite";
import Navbar from "../components/navbar/navbar";
import MainPage from "../components/core/main";
import Footer from "../components/footer/footer";
import AboutFramework from "../components/wrappers/about-framework";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <AboutFramework />
      <Footer />
    </>
  );
};
export default IndexPage;
