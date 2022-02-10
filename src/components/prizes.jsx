import React from "react";
import "../styles/gradients.css";
import "../styles/navbar.css";
import { useNav } from "../helpers/customHooks/useNav";

const prizeList = [
  {
    id: 1,
    textHeader: "Prizes",
    prize: [
      {
        id: 1,
        head: "1st Prize",
        border: "border-yellow-400",
        bgclass: " first-place",
        items: [
          "Company Lifetime Package from Clerky",
          "$1000 Digital Ocean Credits",
          "30% Discount from Badelog",
          "1 year License of Axure- RP Team Plan",
          "Lifetime upgrade of Taskade",
          "Leading Learners Expansion packs",
          "Schwags from Devfolio"
        ],
      },
      {
        id: 2,
        head: "2nd Prize",
        border: "border-gray-400",
        bgclass: " second-place",
        items: [
          "$500 Digital Ocean Credits",
          "30% Discount from Badelog",
          "1 year License of Axure- RP Team Plan",
          "Lifetime upgrade of Taskade",
          "Leading Learners Expansion packs",
          "Schwags from Devfolio"
        ],
      },
      {
        id: 3,
        head: "3rd Prize",
        border: "border-yellow-700",
        bgclass: " third-place",
        items: [
          "$500 Digital Ocean Credits",
          "30% Discount from Badelog",
          "1 year License of Axure- RP Team Plan",
          "Lifetime upgrade of Taskade",
          "Leading Learners Expansion packs",
          "Schwags from Devfolio"
        ],
      },
    ],
  },
];
const Prize = (props) => {
  const { title, border } = props;
  return (
    <section className={"text-3xl font-Sansation border-b-2 w-auto mb-4 inline-block font-bold text-white " + border}>
      {title}
    </section>
  );
};

const Prizes = () => {
  const prizesRef = useNav("Prizes");

  return (
    <>
      <div
        className="mt-12 px-8 sm:px-0 mb-40"
        ref={prizesRef}
        id="prizesContainer"
      >
        <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            PRIZES
          </section>
          <div class="h-1 w-full rounded-lg bg-white" />
        </section>

        <div
          className="grid gap-8 px-4 sm:px-40 md:px-12 xl:px-28 lg:grid-cols-3 md:gap-12 xl:gap-32 sm:grid-cols-1"
          id="prizes"
        >
          {prizeList
            .filter((item) => {
              return item.textHeader === "Prizes";
            })[0]
            .prize.map((item) => {
              return (
                <div
                  className={"text-center rounded-3xl opacity-90 hover:opacity-100 py-8 border-2 " + item.border + item.bgclass}
                  key={item.id}
                >
                  <Prize title={item.head} border={item.border} />
                  <ul className="py-4 list-disc list-inside text-center text-bold leading-loose text-white">
                    {item.items.map((item) => {
                      return (
                        <li>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>

        <div
          className="participation mt-20 sm:mx-12 lg:mx-60 rounded-3xl border-2 opacity-90 hover:opacity-100 border-gray-200"
          id="Participation"
        >
          <div className="text-3xl text-center py-3 font-Sansation font-bold uppercase text-white">
            Participation Prizes
          </div>
          <div className="h-0.5 w-full rounded bg-gray-400"></div>
          <div className="text-bold text-center font-Sansation text-white">
            <ul className="py-6 px-4 list-disc list-inside leading-loose">
              <li>100$ Digital Ocean Credits, 60-day Free trial</li>
              <li>Premium Tier services from Echo3D</li>
              <li>Free XYZ domain name for 1 year</li>
              <li>Hacker Plan from Replit</li>
              <li>15% Discount from Badelog</li>
              <li>5-Year free upgrades from Taskade</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prizes;
