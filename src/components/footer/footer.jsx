import React from "react";
import Socials from "./socials";

const Footer = () => {
  return (
    <>
      <section className="footer bg-bgBrand">
        <Socials />
        <section className="w-full">
          <section className="h-1 w-auto bg-gradient-to-r from-[#094E63] via-[#B02558] to-[#EC521A]"></section>
        </section>
        <section className="py-2 text-Ally lg:text-2xl md:text-xl sm:text-lg text-white font-bold text-center">
          Made with 💝 using Gatsby
        </section>
      </section>
    </>
  );
};

export default Footer;
