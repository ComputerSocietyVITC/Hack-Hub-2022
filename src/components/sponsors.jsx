import React, { useState } from "react";
import "../styles/styles.css";

const Sponsor_tag = ( {Text} ) => {
  return (
      <p id={Text} className="col-span-4 font-Atmospheric text-white pl-10 pr-10 sponsor_gradient flex justify-center items-center">
        {Text}
      </p>
  );
}

const Sponsors = () => {

  return (
    <section className="grid grid-cols-4 gap-10">
      <div className="col-span-2 pt-20 pl-10 text-white font-Sansation font-bold text-4xl border-b-2"> SPONSORS </div>
      <Sponsor_tag Text="Platinum" />
      <Sponsor_tag Text="Gold" />
      <Sponsor_tag Text="Silver" />
    </section>
  );
}

export default Sponsors;
