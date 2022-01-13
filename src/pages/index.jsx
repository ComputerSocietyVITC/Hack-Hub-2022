import React from "react";
import Navbar from "../components/navbar/navbar";
import MainPage from "../components/core/main";
import Footer from "../components/footer/footer";
import About from "../components/about/about";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <About />
      <Footer />
    </>
  );
};
export default IndexPage;
