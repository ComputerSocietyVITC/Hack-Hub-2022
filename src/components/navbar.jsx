import React from "react";
import line from "../images/svgs/line_1.svg";
import "../styles/styles.css";

const Component = ({ Heading, Link }) => {
  return (
    <>
      <section className="uppercase  items-center text-center text-gray-400 underline_hover">
        <a href={Link}>{Heading}</a>
      </section>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <section className="font-Sansation font-bold">
        <section className="py-2 grid grid-cols-12 gap-4">
          <section className="col-start-4 col-span-1">
            <Component Heading="Home" link="#" />
          </section>
          <section className="col-start-5 col-span-1">
            <Component Heading="About" link="#" />
          </section>
          <section className="col-start-6 col-span-1">
            <Component Heading="Timeline" link="#" />
          </section>
          <section className="col-start-7 col-span-1">
            <Component Heading="Sponsors" link="#" />
          </section>
          <section className="col-start-8 col-span-1">
            <Component Heading="FAQs" link="#" />
          </section>
          <section className="col-start-9 col-span-1">
            <Component Heading="Contact" link="#" />
          </section>
        </section>
      </section>
      <img src={line} alt="line"/>
    </>
  );
};

export default Navbar;
