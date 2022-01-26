import React from "react";
import "../../../styles/shadows.css";
import data from "./data";
import { RiFolderLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const dataset_one = data.slice(0, 2);
const dataset_two = data.slice(2, 4);
const dataset_three = data.slice(4, 6);

const Card = ({ Title, Tools, Link, Content }) => {
  return (
    <>
      <div className="lg:h-96 md:mx-6 sm:mx-6 bg-bgBrand border-1 shadow-three font-semibold p-10">
        <section className="flex flex-row justify-between">
          <section className="text-4xl text-oran">
            <RiFolderLine />
          </section>
          <section className="text-3xl">
            <a href={Link}>
              <FiExternalLink className="text-gray-400 hover:text-white transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:transform-none"/>
            </a>
          </section>
        </section>
        <h1 className="text-xl font-Ally text-white">{Title}</h1>
        <section className="text-md font-Ally font-normal text-gray-200 mt-4">
          {Content}
        </section>
        <section className="text-lg text-gray-400 font-Cons text-normal">
          Languages and tools:
          <section>
            {Tools.map((i) => {
              return <li>{i}</li>;
            })}
          </section>
        </section>
      </div>
    </>
  );
};
const Projects = () => {
  return (
    <>
      <section id="Projects" className="bg-bgBrand">
        <section className="grid grid-rows-2">
          <section className="row-start-1 grid grid-cols-12">
            <section className="col-start-2">
              <section className="py-2 font-Ally font-bold text-white text-4xl">
                Projects
                <section className="mt-4 w-full h-1.5 rounded-lg bg-gradient-to-r from-oran to-[#21a4c9]" />
              </section>
            </section>
          </section>
        </section>
        <section className="text-white">
          <section className="grid grid-cols-1 lg:grid-cols-8 gap-6">
            <section className="lg:col-start-2 col-span-2">
              {dataset_one.map((card) => {
                return (
                  <>
                    <Card
                      Title={card.title}
                      Tools={card.tools}
                      Link={card.src}
                      Content={card.info}
                    />
                    <br />
                  </>
                );
              })}
            </section>
            <section className="lg:col-start-4 col-span-2 bg-bgBrand">
              {dataset_two.map((card) => {
                return (
                  <>
                    <Card
                      Title={card.title}
                      Tools={card.tools}
                      Link={card.src}
                      Content={card.info}
                    />
                    <br />
                  </>
                );
              })}
            </section>
            <section className="lg:col-start-6 col-span-2 bg-bgBrand">
              {dataset_three.map((card) => {
                return (
                  <>
                    <Card
                      Title={card.title}
                      Tools={card.tools}
                      Link={card.src}
                      Content={card.info}
                    />
                    <br />
                  </>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
