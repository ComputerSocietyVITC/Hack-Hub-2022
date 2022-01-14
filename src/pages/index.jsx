import * as React from "react";
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar";
import TimeLine from "../components/timeline";
import About from "../components/about";
import Footer from "../components/footer";
import CentralComponents from "../components/centralComponents";
import FAQ from "../components/faq";
import Sponsors from "../components/sponsors";
import NavProvider from '../helpers/NavContext';
// import Background from "../components/background";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HackHub</title>
      </Helmet>
      <NavProvider>
        <Navbar />
        <div className="bg-images z-0">
          <div className="bg-bgimage bg-center">
            {/* <Background /> */}
            <CentralComponents />
            <About />
            <TimeLine />
            <Sponsors />
            <FAQ />
            <Footer />
          </div>
        </div>
      </NavProvider>
    </>
  );
};

export default IndexPage;
