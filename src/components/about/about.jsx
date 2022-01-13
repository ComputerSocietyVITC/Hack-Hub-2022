import "../../styles/shadows.css";
import React from "react";

const message = [
  "I am an undergrad computer science major👩‍💻, currently pursuing my Freshman year at VIT Chennai. I also happen to be interested about Data Science and I am pursuing a course on the same.📅",
  "In the era of speed, I also happen to be a massive Formula One fan and I love spending my weekends seeing cars racing around various circuits across the World. Apart from F1, Like any Indian, I'm a massive Cricket fan too (Don't tell me you aren't though ⚠️.)",
  "Apart from Tech and Sports, I cook (not very frequently though 🧑‍🍳) and work-out, I can cook enough to survive and I do explore whenever I get the energy and time to do it. I love exploring but unfortunately time and energy is not ubiquitous⌛",
];

const Elements = ({ data }) => {
  return (
    <section className="grid grid-rows gap-2">
      {data.map((i) => {
        return <section>{i}</section>;
      })}
    </section>
  );
};
const About = () => {
  return (
    <>
      <section className="bg-white">
        <section className="grid grid-cols-12 lg:pl-24 py-4">
          <section className="col-start-1 col-span-10 Box-shadow bg-bgBrand rounded-large">
            <section className="text-white text-3xl font-Ally font-black mx-4">
              About
            </section>
            <section className="m-2 text-white font-Cons text-lg">
              <Elements data={message} />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
