import React from "react";
import "../styles/navbar.css";
import "../styles/cards.css";
import { useNav } from "../helpers/customHooks/useNav";
import aylmer from "../images/judges/aylmer.jpeg";
import mansi from "../images/judges/mansi.jpeg";

const Judges = () => {

  const judgesRef = useNav("Judges");

  const judgeDetails = [
    {
      id: 1,
      image: aylmer,
      name: "Aylmer Britto R",
      designation: "Research Consultant, Reality AI",
      linkedin: "https://www.linkedin.com/in/aylmer-britto-800950130/",
    },
    {
      id: 2,
      image: mansi,
      name: "Mansi Parashar",
      designation: "Software Development Intern, Amazon",
      linkedin: "https://www.linkedin.com/in/mansi-parashar-4bb713173",
    }
  ];

  return (
    <>
      <div
        className="mt-0 px-8 sm:px-0 mb-28"
        ref={judgesRef}
        id="judgesContainer"
      />
      <section className="sm:w-1/3 lg:w-1/5 my-8 pb-12 mx-auto">
        <section className="text-gradPink font-Sansation font-bold text-5xl md:text-6xl text-center">
          JUDGES
        </section>
        {/* <div class="h-1 w-full rounded-lg bg-white" /> */}
      </section>
      <div className="mt-16 grid gap-8 px-4 sm:px-40 lg:grid-cols-3 md:gap-12 xl:gap-28 sm:grid-cols-1">
        {judgeDetails.map((judge) => (
          <a href={judge.linkedin} target="_blank" rel="noreferrer">
            <article className="judgecard">
              <header className="judgecard__thumb">
                <img src={judge.image} alt={judge.name} />
              </header>
              <div className="judgecard__body">
                <h2 className="judgecard__title text-gradPink">{judge.name}</h2>
                <h4 className="text-white text-lg mt-1 mb-3">{judge.designation}</h4>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  );
};

export default Judges;
