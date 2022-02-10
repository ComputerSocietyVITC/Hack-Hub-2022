import React from "react";
// import line from "../images/svgs/line_1.svg";
import "../styles/styles.css";
import NavLink from "../helpers/NavLink";
import hackhubsquarelogo from "../images/hackhubsquarelogo.png";

// const Component = ({ Heading, Link }) => {
//   return (
//     <>
//       <section className="uppercase items-center cursor-pointer text-center text-gray-400 bg-clip-text hover:text-transparent bg-gradient-to-r hover:from-gradPink hover:to-gradViolet">
//         <a href={Link}>{Heading}</a>
//       </section>
//     </>
//   );
// };

const Navbar = () => {
  const navLinks = [
    { navLinkId: 'Home', scrollToId: 'homeContainer' },
    // { navLinkId: 'About', scrollToId: 'aboutContainer' },
    { navLinkId: 'Tracks', scrollToId: 'tracksContainer' },
    { navLinkId: 'Timeline', scrollToId: 'timelineContainer' },
    { navLinkId: 'Prizes', scrollToId: 'prizesContainer' },
    // { navLinkId: 'Speakers', scrollToId: 'speakersContainer' },
    // { navLinkId: 'Judges', scrollToId: 'judgesContainer' },
    { navLinkId: 'Sponsors', scrollToId: 'sponsContainer' },
    { navLinkId: 'Faqs', scrollToId: 'faqsContainer' },
    { navLinkId: 'Contact', scrollToId: 'contactContainer' },
  ];

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <div className="fixed w-full z-30 bg-black">
        <section className="font-Sansation font-bold relative z-10">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-3 lg:px-0">
            <div className="py-2 lg:hidden">
              <img
                src={hackhubsquarelogo}
                alt="HackHub Logo"
                className="h-16"
              ></img>
            </div>
            <button
              className="cursor-pointer text-xl leading-none py-2 block lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="url(#gradientnav)"
              >
                <defs>
                  <linearGradient
                    id="gradientnav"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#FF005D" />
                    <stop offset="100%" stop-color="#440089" />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <section
            className={
              "py-2 lg:flex lg:justify-evenly lg:mx-40" +
              (navbarOpen ? " grid gap-4" : " hidden")
            }
          >
            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
              <NavLink
                key={idx}
                navLinkId={navLinkId}
                scrollToId={scrollToId}
              />
            ))}
          </section>
        </section>
        <div class="h-1 w-full bg-gradient-to-r from-gradPink to-gradViolet"></div>
      </div>
    </>
  );
};

export default Navbar;
