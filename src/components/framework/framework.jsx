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

const WhiteBox = ({ Title, Content }) => {
  return (
    <section className="m-4 py-4 bg-[#F3F1F1] rounded-large p-2 drop-shadow-[6px_6px_2px_rgba(236,82,26,100)]">
      <section className="font-Ally font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-400">
        {Title}
      </section>
      <section>{Content}</section>
    </section>
  );
};
const BlueBox = ({ Title }) => {
  return (
    <section className="bg-[#101743] rounded-large drop-shadow-[4px_4px_2px_#08CFE9]">
      <section className="font-Ally font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
        {Title}
      </section>
    </section>
  );
};

const Text =
  "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.";

const TextTitle = "Flowbite Application UI v2.0.0";

const ListItem = ({ Content, Title }) => {
  return (
    <>
      <li class="mb-10 ml-6">
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black">
          {Title}
        </h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-black">
          {Content}
        </p>
      </li>
    </>
  );
};

const FrameWorks = () => {
  return (
    <>
      <section className="m-4 Box-shadow bg-bgBrand rounded-large">
        <section className="mx-2 font-Ally text-white font-bold text-3xl">Technologies</section>
      </section>
    </>
  );
};

export default FrameWorks;
