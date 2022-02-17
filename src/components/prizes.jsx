import React from "react";
import "../styles/gradients.css";
import "../styles/navbar.css";
import { useNav } from "../helpers/customHooks/useNav";
import Filecoin from "../images/sponsors/gold/filecoin.png";
import Koii from "../images/sponsors/gold/koii.png";
import Polygon from "../images/sponsors/platinum/polygon.png";
import Tezos from "../images/sponsors/gold/tezos.png";
import Celo from "../images/sponsors/gold/celo.png";

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

const sponsorPrizes = [
  {
    id: 1,
    sponsorHeader: "Sponsor Prizes",
    sponsorPrize: [
      {
        id: 1,
        head: Polygon,
        alt: "Polygon",
        border: "border-blue-800",
        buttonColor: "bg-blue-800",
        items: [
          {
            key: 1,
          },
        ],
      },
      {
        id: 2,
        head: Tezos,
        alt: "Tezos",
        border: "border-blue-400",
        buttonColor: "bg-blue-400",
        items: [
          {
            key: 1,
          },
        ],
      },
      {
        id: 3,
        head: Celo,
        alt: "Celo",
        border: "border-green-400",
        buttonColor: "bg-green-400",
        items: [
          {
            key: 1,
          },
        ],
      },
      {
        id: 4,
        head: Filecoin,
        alt: "Filecoin",
        border: "border-blue-900",
        buttonColor: "bg-blue-900",
        items: [
          {
            key: 2,
          }
        ]
      },
      {
        id: 5,
        head: Koii,
        alt: "Koii",
        border: "border-gray-400",
        buttonColor: "bg-gray-400",
        items: [
          {
            key: 3,
          }
        ]
      }
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

const SponsorPrize = (props) => {
  const { header, alt } = props;
  return (
    <section>
      <img className="h-16 mx-auto" src={header} alt={alt} />
    </section>
  );
}

const Knowmore = (props) => {
  const { Color } = props;
  return (
    <section>
      <div className={"py-4 justify-center items-center text-center text-white font-Sansation"}>
        <button className={"w-3/4 rounded py-4 " + Color}>KNOW MORE</button>
      </div>
    </section>
  )

}

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
        <div className="py-20 text-4xl text-center font-Sansation font-bold uppercase text-white">CHALLENGE PRIZES</div>
        <div className="grid lg:px-8 lg:grid-cols-3 lg:gap-8 md:grid-cols-3 md:gap-4 sm:grid-cols-1">
          {sponsorPrizes.filter((item) => {
            return item.sponsorHeader === "Sponsor Prizes";
          })[0].sponsorPrize.map((item) => {
            return (
              <div>
                <SponsorPrize header={item.head} alt={item.alt} />
                <div className={"text-center rounded-3xl border-4 " + item.border} key={item.id}>
                  <div className="py-4 text-center font-Sansation text-bold leading-loose text-white">
                    {item.items.map((item) => {
                      return (
                        <div>
                          <p>Dolor eiusmod amet ex labore tempor sint elit mollit id anim nostrud incididunt. Dolore pariatur consequat proident ut reprehenderit tempor ullamco adipisicing consectetur nulla aute irure consequat. Minim cupidatat minim fugiat irure proident eu fugiat nulla laboris sunt.</p>
                        </div>
                      );
                    })}
                  </div>
                  <Knowmore Color={item.buttonColor} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Prizes;
