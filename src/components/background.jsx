import React from "react";
import "../styles/bg.css";
import aries from "../images/svgs/aries.svg";
import libra from "../images/svgs/libra.svg";
import virgo from "../images/svgs/virgo.svg";
import aquaris from "../images/svgs/Aquaris.svg";
import pisces from "../images/svgs/pisces.svg";
import leo from "../images/svgs/leo.svg";
import unknown from "../images/svgs/Group_22.svg";

const Background = () => {
  return (
    <>
      <section className="md: left-top-libra">
        <img src={libra} />
      </section>
      <section className="lg: virgo">
        <img src={virgo} />
      </section>
      <section className="md: left-bottom-leo">
        <img src={leo} />
      </section>

      <section className="md: right-top-aquaris">
        <img src={aquaris} />
      </section>
      <section className="md: pisces">
        <img src={pisces} />
      </section>
      <section className="md: aries">
        <img src={aries} />
      </section>
    </>
  );
};

export default Background;
