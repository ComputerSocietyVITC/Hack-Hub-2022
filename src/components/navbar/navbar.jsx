import React from "react";
import logo from "../svgs/A Logo.svg";
import header from "../svgs/Header.svg";
import "../../styles/gradients.css";

const styles = {
  width: "3.5rem",
  height: "3.5rem",
  padding: 2,
};

const HeaderContent = ({ Item, Reference }) => {
  return (
    <>
      <section className="text-2xl text-Ally text-gray-400 font-bold underline_hover">
        <a href={Reference}>{Item}</a>
      </section>
    </>
  );
};

const Navbar = () => {
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
            <section className="py-4 flex justify-center align-middle gap-8">
              <HeaderContent Item="New Text" Reference="#" />
              <HeaderContent Item="New Text" Reference="#" />
              <HeaderContent Item="New Text" Reference="#" />
              <HeaderContent Item="New Text" Reference="#" />
            </section>
          </section>
        </section>
        <section className="w-full">
          <img src={header} style={{ width: "100%" }} alt="Line" />
        </section>
      </section>
    </>
  );
};

export default Navbar;
