import React from "react";
import "../styles/navbar.css";
import "../styles/cards.css";
import { useNav } from "../helpers/customHooks/useNav";
import kriti from "../images/speakers/kriti.jpeg";

const Speakers = () => {

  const speakersRef = useNav("Speakers");

  const speakerDetails = [
    {
      id: 1,
      image: kriti,
      name: "Kriti Gera",
      details: {
        "Topic": "Roadmap to DSA",
        "Date": "3rd March 2022",
        "Time": "6:00 PM",
        "Platform": "Microsoft Teams"
      },
      designation: "Course Mentor, GeeksforGeeks",
    }
  ];

  return (
    <>
      <div
        className="mt-0 px-8 sm:px-0 mb-28"
        ref={speakersRef}
        id="speakersContainer"
      />
      <section className="sm:w-1/3 lg:w-1/5 my-8 pb-12 mx-auto">
        <section className="text-gradPink font-Sansation font-bold text-5xl md:text-6xl text-center">
          SPEAKERS
        </section>
        {/* <div class="h-1 w-full rounded-lg bg-white" /> */}
      </section>
      <div className="mt-16 grid gap-8 px-4 sm:px-40 lg:grid-cols-3 md:gap-12 xl:gap-28 sm:grid-cols-1">
        {speakerDetails.map((speaker) => (
          <article className="speakercard">
            <header className="speakercard__thumb">
              <img src={speaker.image} alt={speaker.name} />
            </header>
            <div className="speakercard__body">
              <h2 className="speakercard__title text-gradPink">{speaker.name}</h2>
              <h4 className="text-white text-lg mt-1 mb-3">{speaker.designation}</h4>
              <div className="speakercard__description">
                {Object.keys(speaker.details).map((key) => (
                  <p className="text-white font-medium text-base">
                    <span className="text-gradPink">{key} : </span>
                    <span>{speaker.details[key]}</span>
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Speakers;
