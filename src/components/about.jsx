import React from "react";
import "../styles/about.css";
import { useNav } from '../helpers/customHooks/useNav';

function About() {

  const aboutRef = useNav('About');

  return (
    <section className="pt-12 px-8 sm:px-0" ref={aboutRef} id='aboutContainer'>
      <section className="sm:w-1/2 mx-auto">
        <section className="text-gradPink font-Sansation font-bold text-5xl md:text-6xl text-center">
          WHAT IS HACKHUB
        </section>
        {/* <div class="h-1 w-full rounded-lg bg-white"></div> */}
      </section>
      <section className="bg-indigo-900/30 p-8 rounded-2xl font-Sansation text-bold text-lg md:text-2xl text-white my-16 sm:mx-24 lg:mx-32 text-center md:leading-loose">
        HackHub is the flagship hackathon conducted by IEEE Computer Society VIT Chennai every year to encourage tech enthusiasts from across the country to apply their technical skills to develop solutions for the future. HackHub aims to provide a platform for students to ideate, develop and present their solutions to challenging real-world problems. It is a platform to compete and network with like-minded and skilled students from all walks of life.
        <br /><br />
        HackHub'22 brings you a multitude of areas to test your minds and wits, keeping in mind the IEEE CS ideals to discover, develop, and deploy. So gather your teams and get ready for the ultimate technical-skills showdown from March 4 to March 6, 2022.
      </section>
    </section>
  );
};

export default About;
