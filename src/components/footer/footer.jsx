import React from "react";
import header from "../svgs/Header.svg";
import Socials from "./socials";

const Footer = () => {
  return (
    <>
      <section className="footer bg-bgBrand">
        <Socials />
        <section className="w-full">
          <img src={header} style={{ width: "100%" }} alt="Line" />
        </section>
        <section className="text-Ally text-2xl  text-white font-bold text-center">
          Made with 💝 using Gatsby
        </section>
      </section>
    </>
  );
};

export default Footer;
