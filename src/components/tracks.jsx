import React from "react";
import "../styles/cards.css";
import "../styles/navbar.css";
import { useNav } from "../helpers/customHooks/useNav";
import medical from "../images/track/medical.png";
import finance from "../images/track/finance.png";
import education from "../images/track/education.png";
import agriculture from "../images/track/agriculture.png";
import lifestyle from "../images/track/lifestyle.jpg";
import openinnovation from "../images/track/openinnovation.png";

// const Cards = ({ imgsource, title, content }) => {
//   return (
//     <>
//       <section className="py-2">
//         <section
//           className={`grid lg:grid-cols-2 lg:gap-4  sm:grid-cols-1 w-auto h-auto`}
//         >
//           <section className="col-start-1 lg:col-span-1 w-auto">
//             <img src={imgsource} />
//           </section>
//           <section className="lg:col-start-2 lg:col-span-1">
//             <section className="uppercase font-Sansation text-3xl font-semibold">
//               {title}
//             </section>
//             <section className="background-card font-Sansation font-regular text-lg text-left uppercase">
//               {content}
//             </section>
//           </section>
//         </section>
//       </section>
//     </>
//   );
// };

const Tracks = () => {

  const trackDetails = [
    {
      id: 1,
      image: medical,
      name: "Healthcare",
      description: "Create innovative solutions that address various health-related issues and challenges such as the COVID19 pandemic, mental health, obesity, cardiovascular diseases and many more.",
    },
    {
      id: 2,
      image: education,
      name: "Education",
      description: "Tackle issues in the education sector by coming up with ideas that cater to the needs of teachers and/or students. Code with an aim to make education accessible, efficient, innovative.",
    },
    {
      id: 3,
      image: lifestyle,
      name: "Lifestyle",
      description: "Use technology to improve lifestyle, better everyday habits, enhance psychological well being. Elevate the living quality of the users by helping them to lead active healthy lives.",
    },
    {
      id: 4,
      image: finance,
      name: "Finance",
      description: "Solve intriguing challenges faced by the Fin-tech industry by automating, securing and enhancing the delivery and operation of financial technology.",
    },
    {
      id: 5,
      image: agriculture,
      name: "Agriculture",
      description: "Use technology to improve agricultural productivity, ensuring sustainable food security, come up with innovative solutions for the largest employer sector in India.",
    },
    {
      id: 6,
      image: openinnovation,
      name: "Open Innovation",
      description: "This track allows limitless scope and is intended for those who may be new to the developer headspace and/or have an amazing new idea in mind and desire to build on the concept.",
    }
  ];
  const tracksRef = useNav("Tracks");
  // const Content =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem mauris. Duis molestie finibus magna";
  return (
    <>
      <div
        className="mt-24 px-8 sm:px-0 mb-40"
        ref={tracksRef}
        id="tracksContainer"
      >
        <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            TRACKS
          </section>
          <div className="h-1 w-full rounded-lg bg-white" />
        </section>

        {/*
        <section className="text-white font-Sansation font-bold text-4xl text-center">
          <section className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 md:gap-2 sm:grid-cols-1">
            <section className="px-4 lg:col-start-1 md:col-start-1 col-span-1 my-2">
              <section className="my-4 bg-gradPink">
                <Cards title="Title" content={Content} imgsource={medical} />
              </section>
              <section className="my-4 bg-[#960000]">
                <Cards title="Title" content={Content} imgsource={cash} />
              </section>
            </section>
            <section className="px-4 lg:col-start-2 md:col-start-2 col-span-1">
              <section className="my-4 bg-[#5915B0]">
                <Cards title="Title" content={Content} imgsource={education} />
              </section>
              <section className="my-4 bg-[#597800]">
                <Cards
                  title="Title"
                  content={Content}
                  imgsource={agriculture}
                />
              </section>
            </section>
            <section className="px-4 lg:col-start-3 md:col-start-3 col-span-1">
              <section className="my-4 bg-[#DD962A]">
                <Cards title="Title" content={Content} imgsource={lifestyle} />
              </section>
              <section className="my-4 bg-[#388787]">
                <Cards title="Title" content={Content} imgsource={openinnovation} />
              </section>
            </section>
          </section>
        </section> */}

        <div className="grid gap-8 px-4 sm:px-40 md:px-12 xl:px-32 lg:grid-cols-3 md:gap-12 xl:gap-28 sm:grid-cols-1">
          {trackDetails.map((track) => (
            <article className="trackcard">
              <header className="trackcard__thumb">
                <img src={track.image} alt={track.name} />
              </header>
              <div className="trackcard__body">
                <h2 className="trackcard__title">{track.name}</h2>
                <p className="trackcard__description">{track.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tracks;
