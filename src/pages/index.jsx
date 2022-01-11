import * as React from "react";
import Navbar from "../components/navbar";
import TimeLine from "../components/timeline";
import About from "../components/about";
import Footer from "../components/footer";
import CentralComponents from "../components/centralComponents";
import FAQ from "../components/faq";
import Background from "../components/background";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-images z-0">
        <div className="bg-bgimage bg-center">
          {/* <Background /> */}
          <CentralComponents />
          <About />
          <TimeLine />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
