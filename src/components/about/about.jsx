import "../../styles/shadows.css";
import React from "react";

const message = [
  "I am an undergrad computer science major👩‍💻, currently pursuing my Freshman year at VIT Chennai. I also happen to be interested about Data Science and I am pursuing a course on the same.📅",
  "In the era of speed, I also happen to be a massive Formula One fan and I love spending my weekends seeing cars racing around various circuits across the World. Apart from F1, Like any Indian, I'm a massive Cricket fan too (Don't tell me you aren't though ⚠️.)",
  "Apart from Tech and Sports, I cook (not very frequently though 🧑‍🍳) and work-out, I can cook enough to survive and I do explore whenever I get the energy and time to do it. I love exploring but unfortunately time and energy is not ubiquitous⌛",
];

const Elements = ({ data }) => {
  return (
    <section className="h-1/2 grid grid-rows gap-2 lg:text-lg md:text-lg sm:text-sm">
      {data.map((i) => {
        return <>{i}</>;
      })}
    </section>
  );
};
const About = () => {
  return (
    <>
      <section id="About">
        <section className="grid sm:grid-cols-4 md:px-6 grid-cols-6 lg:grid-cols-12 lg:pl-24 py-4">
          <section className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-10 sm:col-start-1 sm:mx-4 sm:col-span-4 Box-shadow bg-bgBrand rounded-large">
            <section className="text-white text-3xl font-Ally font-black mx-4">
              About
              <section className="w-16 mt-2 h-1.5 rounded-lg bg-gradient-to-r from-[#9a5ecc] to-[#21a4c9]" />
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

export default About;
