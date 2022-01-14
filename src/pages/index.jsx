import * as React from "react";
import Navbar from "../components/navbar";
import TimeLine from "../components/timeline";
import About from "../components/about";
import Footer from "../components/footer";
import CentralComponents from "../components/centralComponents";
import FrequentlyAskedQuestions from "../components/faq";
import Sponsors from "../components/sponsors";
import NavProvider from '../helpers/NavContext';
// import Background from "../components/background";

const IndexPage = () => {
  return (
    <>
      <NavProvider>
        <Navbar />
        <div className="bg-images z-0">
          <div className="bg-bgimage bg-center">
            {/* <Background /> */}
            <CentralComponents />
            <About />
            <TimeLine />
            <Sponsors />
            <FrequentlyAskedQuestions />
            <Footer />
          </div>
        </div>
      </NavProvider>
    </>
  );
};

export default IndexPage;
