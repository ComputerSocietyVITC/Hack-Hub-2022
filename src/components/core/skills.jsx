import "../../styles/shadows.css";
import React from "react";

import { FaLinux } from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiRust,
  SiFlask,
  SiMaterialui,
  SiReact,
  SiPurgecss,
  SiTailwindcss,
  SiFigma,
  SiPostcss,
  SiKubernetes,
  SiDocker,
  SiHeroku,
  SiApachecassandra,
  SiPrometheus,
  SiNginx,
  SiPostgresql,
  SiGrafana,
} from "react-icons/si";

import { RiGatsbyLine } from "react-icons/ri";

const Skills = () => {
  return (
    <section className="bg-bgBrand">
      <section className="py-10 bg-light_bg dark:bg-darkBrand grid grid-cols-12">
        <section
          id="Frameworks"
          className="col-start-2 text-4xl mt-3 pt-8 text-white font-extrabold font-Ally"
        >
          Technologies
          <section className="text-white">
            <section className="mt-2 w-full h-1.5 rounded-lg bg-gradient-to-r from-purple-800 to-pink-600" />
          </section>
        </section>
      </section>
      <section className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
        <section className="py-10 lg:col-start-2 md:col-start-2 sm:px-10 sm:col-start-1 sm:col-span-3 md:col-span-4 lg:col-span-3 text-white font-Ally sm:text-xl md:text-xl lg:text-2xl">
          I've worked with various tools, frameworks and Languages that cover
          Back-end to Front-end and design.
        </section>
        <section className="sm:col-start-1 sm:col-span-3 md:col-start-2 md:col-span-4 lg:col-start-5 lg:col-span-3 shadow-two sm:m-2  lg:text-4xl md:text-xl sm:text-md">
          <section className="pt-4 flex flex-row justify-around text-white gap-2">
            <SiMaterialui />
            <SiReact />
            <SiTailwindcss />
            <SiPurgecss />
            <SiPostcss />
            <RiGatsbyLine />
            <SiFigma />
          </section>
          <section className="py-6 flex flex-row justify-around text-white gap-3">
            <SiDjango />
            <SiRust />
            <SiFastapi />
            <FaLinux/>
            <SiFlask />
            <SiApachecassandra />
          </section>
          <section className="pb-4 flex flex-row justify-around text-white gap-3">
            <SiKubernetes />
            <SiDocker />
            <SiPrometheus />
            <SiGrafana />
            <SiPostgresql />
            <SiNginx />
            <SiHeroku />
          </section>
        </section>
      </section>
    </section>
  );
};

export { Skills };
