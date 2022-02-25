import * as React from "react";
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar";
import TimeLine from "../components/timeline";
import Tracks from "../components/tracks";
import About from "../components/about";
import Footer from "../components/footer";
import CentralComponents from "../components/centralComponents";
import FrequentlyAskedQuestions from "../components/faq";
import Sponsors from "../components/sponsors";
import Prizes from "../components/prizes";
import Judges from "../components/judges";
import Speakers from "../components/speakers";
import Loader from "../components/loader";
import NavProvider from '../helpers/NavContext';
// import Background from "../components/background";

const IndexPage = () => {

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3100)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HackHub</title>
      </Helmet>
      {
        loading ?
          (<Loader />) :
          <></>}
      <NavProvider>
        <Navbar />
        <div className=" bg-cover bg-fixed z-0">
          {/* <div className="bg-bgimage bg-fixed"> */}
          {/* <Background /> */}
          <CentralComponents />
          <About />
          <Tracks />
          <TimeLine />
          <Prizes />
          <Speakers />
          <Judges />
          <Sponsors />
          <FrequentlyAskedQuestions />
          <Footer />
        </div>
        {/* </div> */}
      </NavProvider>
    </>
  );
};

export default IndexPage;
