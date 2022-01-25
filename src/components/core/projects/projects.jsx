import React from "react";
import "../../../styles/shadows.css";
import { RiFolderLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const Card = ({ Title, Tools }) => {
  return (
    <>
      <div className="md:mx-6 sm:mx-6 bg-bgBrand border-1 shadow-three font-semibold p-10">
        <section className="flex flex-row justify-between">
          <section className="text-4xl text-oran">
            <RiFolderLine />
          </section>
          <section className="text-3xl">
            <a href="#Link">
              <FiExternalLink />
            </a>
          </section>
        </section>
        <h1 className="text-xl font-Ally text-white">{Title}</h1>
        <p className="text-md font-Ally font-normal text-gray-200 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <p className="text-lg text-gray-400 font-Cons text-normal">
          Languages and tools:
          <p>
            {Tools.map((i) => {
              return <li>{i}</li>;
            })}
          </p>
        </p>
      </div>
    </>
  );
};
const Projects = () => {
  return (
    <>
      <section className="bg-bgBrand">
        <section className="grid grid-rows-2">
          <section className="row-start-1 grid grid-cols-12">
            <section className="col-start-2">
              <section className="font-Ally font-bold text-white text-4xl">
                Projects
                <section className="mt-2 w-full h-1.5 rounded-lg bg-gradient-to-r from-oran to-[#21a4c9]" />
              </section>
            </section>
          </section>
        </section>
        <section className="text-white">
          <section className="grid grid-cols-1 lg:grid-cols-8 gap-6">
              
            <section className="lg:col-start-2 col-span-2">
              <Card Title={"Lorem"} Tools={["Flask", "Python"]} />
              <br />
              <Card Title={"Lorem"} Tools={["Flask", "Python"]} />
            </section>
            <section className="lg:col-start-4 col-span-2 bg-bgBrand">
              <Card Title={"Lorem"} Tools={["Flask", "Python"]} />
              <br />
              <Card Title={"Lorem"} Tools={["Flask", "Python"]} />
            </section>
            <section className="lg:col-start-6 col-span-2 bg-bgBrand">
              <Card Title={"Lorem"} Tools={["Flask", "Python"]} />
              <br />
              <Card Title={"Lorem"} Tools={["Flask", "Python"]} />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
