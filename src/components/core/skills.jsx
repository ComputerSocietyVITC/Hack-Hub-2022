import "../../styles/shadows.css";
import React from "react";
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
  SiKubernetes,
  SiDocker,
  SiApachecassandra,
  SiPrometheus,
  SiPostman,
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
            <section className="mt-2 w-full h-1.5 rounded-lg bg-gradient-to-r from-[#9a5ecc] to-[#21a4c9]" />
          </section>
        </section>
      </section>
      <section className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
        <section className="py-10 lg:col-start-2 md:col-start-2 sm:px-10 sm:col-start-1 sm:col-span-3 md:col-span-4 lg:col-span-5 text-white font-Ally sm:text-xl md:text-xl lg:text-2xl">
          I've worked with various tools, frameworks and Languages. From
          Back-end to Front-end and design.
        </section>
        <section className="sm:col-start-1 sm:col-span-3 md:col-start-2 md:col-span-4 lg:col-start-7 lg:col-span-5">
          <section className="pt-4 flex flex-row justify-around text-white gap-2">
            <SiMaterialui style={{ height: "2em", width: "2em" }} />
            <SiReact style={{ height: "2em", width: "2em" }} />
            <SiTailwindcss style={{ height: "2em", width: "2em" }} />
            <SiPurgecss style={{ height: "2em", width: "2em" }} />
            <RiGatsbyLine style={{ height: "2em", width: "2em" }} />
            <SiFigma style={{ height: "2em", width: "2em" }} />
          </section>
          <section className="py-6 flex flex-row justify-around text-white gap-3">
            <SiDjango style={{ height: "2em", width: "2em" }} />
            <SiRust style={{ height: "2em", width: "2em" }} />
            <SiFastapi style={{ height: "2em", width: "2em" }} />
            <SiFlask style={{ height: "2em", width: "2em" }} />
            <SiApachecassandra style={{ height: "2em", width: "2em" }} />
          </section>
          <section className="pb-4 flex flex-row justify-around text-white gap-3">
            <SiKubernetes style={{ height: "2em", width: "2em" }} />
            <SiDocker style={{ height: "2em", width: "2em" }} />
            <SiPrometheus style={{ height: "2em", width: "2em" }} />
            <SiGrafana style={{ height: "2em", width: "2em" }} />
            <SiPostgresql style={{ height: "2em", width: "2em" }} />
            <SiNginx style={{ height: "2em", width: "2em" }} />
          </section>
        </section>
      </section>
    </section>
  );
};

const About = () => {
  return (
    <>
      <section className="">
        <section className="grid sm:grid-cols-4 md:px-6 grid-cols-6 lg:grid-cols-12 lg:pl-24 py-4">
          <section className="md:col-start-1 md:col-span-5 lg:col-start-1 lg:col-span-10 sm:col-start-1 sm:mx-4 sm:col-span-4 Box-shadow bg-bgBrand rounded-large">
            <section className="text-white text-3xl font-Ally font-black mx-4">
              About
            </section>
            <section className="m-2 text-white font-Cons">
              <Elements data={message} />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
export { Skills, About };
const message = [
  "I am an undergrad computer science major👩‍💻, currently pursuing my Freshman year at VIT Chennai. I also happen to be interested about Data Science and I am pursuing a course on the same.📅",
  "In the era of speed, I also happen to be a massive Formula One fan and I love spending my weekends seeing cars racing around various circuits across the World. Apart from F1, Like any Indian, I'm a massive Cricket fan too (Don't tell me you aren't though ⚠️.)",
  "Apart from Tech and Sports, I cook (not very frequently though 🧑‍🍳) and work-out, I can cook enough to survive and I do explore whenever I get the energy and time to do it. I love exploring but unfortunately time and energy is not ubiquitous⌛",
];

const Elements = ({ data }) => {
  return (
    <section className="grid grid-rows gap-2 lg:text-lg md:text-lg sm:text-md">
      {data.map((i) => {
        return <>{i}</>;
      })}
    </section>
  );
};
