import React, { useContext, useState } from "react";
import logo from "../svgs/A Logo.svg";
import "../../styles/gradients.css";

const styles = {
  width: "3.5rem",
  height: "3.5rem",
  padding: 2,
};

const HeaderContent = ({ Item, Reference }) => {
  // const NavContext = React.createContext();
  // const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
  // const handleClick = () => {
  //   setActiveNavLinkId(Item);
  //   document
  //     .getElementById(Reference)
  //     .scrollIntoView({ behavior: "smooth", block: "start" });
  // };
  return (
    <>
      <section className="text-2xl text-Ally text-gray-400 font-bold underline_hover">
        <a href={Reference}>{Item}</a>
      </section>
    </>
  );
};

const Navbar = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <section className="Navbar">
        <section className="bg-bgBrand py-2 grid grid-cols-6 gap-2">
          <section className="col-start-1 col-span-1">
            <section className="py-2 flex place-content-center text-center align-center">
              <a href="/#">
                <img src={logo} style={styles} alt="Logo" />
              </a>
            </section>
          </section>
          <section className="col-start-4 col-span-3">
            <section className="py-4 px-2 flex justify-center align-middle gap-8">
              <HeaderContent Item="About" Reference="#" />
              <HeaderContent Item="Timeline" Reference="#" />
              <HeaderContent Item="Projects" Reference="#" />
              <HeaderContent Item="Tools and Tech" Reference="#" />
            </section>
          </section>
        </section>
        <section className="w-full">
          <section className="h-1 w-auto bg-gradient-to-r from-[#094E63] via-[#B02558] to-[#EC521A]"></section>
        </section>
      </section>
    </>
  );
};

export default Navbar;
