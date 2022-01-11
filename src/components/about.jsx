import React from "react";
import "../styles/about.css";

function About() {

  return (
    <section className="my-12 px-8 sm:px-0">
      <section className="sm:w-1/3 lg:w-1/5">
        <section className="text-white font-Sansation font-bold text-5xl text-center">
          ABOUT
        </section>
        <div class="h-1 w-full rounded-lg bg-white"></div>
      </section>
      <section className="font-Arya text-bold text-2xl text-white my-16 sm:mx-24 lg:mx-40 text-justify leading-loose">
        HackHub is the flagship hackathon conducted by IEEE Computer Society VIT Chennai every year to encourage tech enthusiasts from across the country to apply their technical skills to develop solutions for the future. HackHub aims to provide a platform for students to ideate, develop and present their solutions to challenging real-world problems. It is a platform to compete and network with like-minded and skilled students from all walks of life.
        <br /><br />
        HackHub'22 brings you a multitude of areas to test your minds and wits, keeping in mind the IEEE CS ideals to discover, develop, and deploy. So gather your teams and get ready for the ultimate technical-skills showdown from March 29 to March 30, 2022.
      </section>
    </section>
  );
};

export default About;
