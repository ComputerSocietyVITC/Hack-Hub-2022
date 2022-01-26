import React from "react";
import "../../styles/shadows.css";
import {
  SiTailwindcss,
  SiReact,
  SiGatsby,
  SiMaterialui,
  SiChakraui,
  SiFigma,
} from "react-icons/si";
import "../../styles/gradients.css";

const ContentOne = [
  <section className="flex gap-2">
    <SiTailwindcss />
    <SiReact />
    <SiGatsby />
    <SiMaterialui />
    <SiChakraui />
    <SiFigma />
  </section>,
];

const FrameWorks = () => {
  return (
    <>
      <section className="m-4 Box-shadow bg-bgBrand rounded-large">
        <section className="mx-2 font-Ally text-white font-bold text-3xl">
          Technologies
        </section>
      </section>
    </>
  );
};

export default FrameWorks;
