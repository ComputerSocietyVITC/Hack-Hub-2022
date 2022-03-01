import React from "react";
import "../styles/navbar.css";
// import icon from "../images/icon.png";
import { useNav } from "../helpers/customHooks/useNav";

// const Cards = ({ source }) => {
//   return (
//     <>
//       <section className="">
//         <section className="py-2 w-auto">
//           <img src={source} />
//         </section>
//       </section>
//     </>
//   );
// };

const Judges = () => {
  const judgesRef = useNav("Judges");

  return (
    <>
      <div
        className="mt-12 px-8 sm:px-0 mb-24"
        ref={judgesRef}
        id="judgesContainer"
      />
      <section className="sm:w-1/3 lg:w-1/5 my-8 py-12 mx-auto">
        <section className="text-gradPink font-Sansation font-bold text-5xl md:text-6xl text-center">
          JUDGES
        </section>
        {/* <section class="h-1 w-full rounded-lg bg-white" /> */}
      </section>
      <h1 className="text-white font-Sansation font-bold text-4xl text-center">To Be Announced...</h1>
      {/* <section className="md:px-5 lg:px-10 grid lg:grid-cols-3 lg:gap-6 md:grid-cols-3 md:gap-4 sm:grid-cols-1 gap-2 ">
        <section className="md:col-start-1 lg:col-start-1 lg:col-span-1 md:col-span-1">
          <Cards source={icon} />
        </section>
        <section className="md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1">
          <Cards source={icon} />
        </section>
        <section className="md:col-start-3 md:col-span-1 lg:col-start-3 lg:col-span-1">
          <Cards source={icon} />
        </section>
      </section> */}

    </>
  );
};

export default Judges;
