import React from "react";
import line from "../images/svgs/line_1.svg";
import "../styles/styles.css";

const Component = ({ Heading, Link }) => {
  return (
    <>
      <section className="uppercase items-center cursor-pointer text-center text-gray-400 bg-clip-text hover:text-transparent bg-gradient-to-r hover:from-gradPink hover:to-gradViolet">
        <a href={Link}>{Heading}</a>
      </section>
    </>
  );
};

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <section className="font-Sansation font-bold relative z-10">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-3 lg:px-0">
          <div className="text-sm mt-6 font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase lg:hidden" >
            {/* <img src={hackhubsquarelogo} alt="HackHub Logo" className="h-16"></img> */}
          </div>
          <button
            className="cursor-pointer text-xl leading-none py-2 block lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="url(#gradient)">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FF005D" />
                  <stop offset="100%" stop-color="#440089" />
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <section className={"py-2 lg:grid lg:grid-cols-12 gap-4" + (navbarOpen ? " grid" : " hidden")}>
          <section className="lg:col-start-4 col-span-1">
            <Component Heading="Home" link="#" />
          </section>
          <section className="lg:col-start-5 col-span-1">
            <Component Heading="About" link="#" />
          </section>
          <section className="lg:col-start-6 col-span-1">
            <Component Heading="Timeline" link="#" />
          </section>
          <section className="lg:col-start-7 col-span-1">
            <Component Heading="Sponsors" link="#" />
          </section>
          <section className="lg:col-start-8 col-span-1">
            <Component Heading="FAQs" link="#" />
          </section>
          <section className="lg:col-start-9 col-span-1">
            <Component Heading="Contact" link="#" />
          </section>
        </section>
      </section>
      {/* <img src={line} alt="line" /> */}
      <div class="h-1 w-full bg-gradient-to-r from-gradPink to-gradViolet"></div>
    </>
  );
};

export default Navbar;
