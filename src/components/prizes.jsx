import React from "react";
import "../styles/gradients.css";
import "../styles/navbar.css";
import { useNav } from "../helpers/customHooks/useNav";
import Filecoin from "../images/sponsors/gold/filecoin.png";
import Koii from "../images/sponsors/gold/koii.png";
import Polygon from "../images/sponsors/platinum/polygon.png";
import Tezos from "../images/sponsors/gold/tezos.png";
import Celo from "../images/sponsors/gold/celo.png";
import Raahee from "../images/sponsors/silver/raahee.png";
import firstprize from "../images/track/firstprize.png";
import secondprize from "../images/track/secondprize.png";
import thirdprize from "../images/track/thirdprize.png";
import rookie from "../images/track/rookie.png";
import allparticipants from "../images/track/allparticipants.png";

const prizeList = [
  {
    id: 1,
    textHeader: "Prizes",
    prize: [
      {
        id: 1,
        head: "2nd Prize",
        bg: "bg-gray-400",
        bgclass: " order-2 md:order-1",
        image: secondprize,
        items: [
          "$125 Digital Ocean Credits",
          "₹1200/- GFG-discount coupon",
          "30% Discount from Badelog",
          "1 year License of Axure-RP Team Plan",
          "Lifetime upgrade of Taskade",
          "Leading Learners Expansion packs",
          "Swags and Goodies to all team members",
          "Certificate of Appreciation"
        ],
      },
      {
        id: 2,
        head: "1st Prize",
        bg: "bg-yellow-400",
        bgclass: "  order-1 md:order-2",
        image: firstprize,
        items: [
          "Company Lifetime Package from Clerky",
          "$250 Digital Ocean Credits",
          "₹1200/- GFG-discount coupon",
          "30% Discount from Badelog",
          "1 year License of Axure-RP Team Plan",
          "Lifetime upgrade of Taskade",
          "Leading Learners Expansion packs",
          "Swags and Goodies to all team members",
          "Certificate of Appreciation"
        ],
      },
      {
        id: 3,
        head: "3rd Prize",
        bg: "bg-yellow-700",
        bgclass: " order-3",
        image: thirdprize,
        items: [
          "$100 Digital Ocean Credits",
          "₹1200/- GFG-discount coupon",
          "30% Discount from Badelog",
          "1 year License of Axure-RP Team Plan",
          "Lifetime upgrade of Taskade",
          "Leading Learners Expansion packs",
          "Swags and Goodies to all team members",
          "Certificate of Appreciation"
        ],
      },
      {
        id: 4,
        head: "Rookie Team Prize",
        bgclass: " order-4",
        image: rookie,
        items: [
          "$100 Digital Ocean Credits",
          "₹1200/- GFG-discount coupon",
          "30% Discount from Badelog",
          "Lifetime upgrade of Taskade",
          "Certificate of Appreciation"
        ],
      },
      {
        id: 5,
        head: "All Participants",
        bgclass: " order-5",
        image: allparticipants,
        items: [
          "100$ Digital Ocean Credits, 60-day Free trial",
          "₹300/- GFG-discount coupon",
          "Premium Tier services from Echo3D",
          "Free XYZ domain name for 1 year",
          "15% Discount from Coding Ninjas",
          "Hacker Plan from Replit",
          "15% Discount from Badelog",
          "5-Year free upgrades from Taskade",
          "Certificate of Participation"
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
        title: "Best Hack built with Ethereum",
        border: "border-blue-800",
        buttonColor: "bg-blue-800",
        color: "#8247e5",
        items: [
          "₹10, 000 for the best hack built on Ethereum",
          "₹15, 000 for the best hack built on Ethereum + Polygon",
          "Eligibility for internship/full-time role interviews and seed funding of upto 5000 USD"
        ],
        readMore: "https://www.notion.so/devfolio/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c"
      },
      {
        id: 2,
        head: Tezos,
        alt: "Tezos",
        title: "Best Hack built on Tezos",
        border: "border-blue-400",
        buttonColor: "bg-blue-400",
        color: "#0D61FF",
        items: [
          "₹20,000 for best Dapp built on Tezos",
          "Continuity grant opportunity up to $5, 000 for outstanding projects"
        ],
        readMore: "https://www.notion.so/devfolio/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff"
      },
      {
        id: 3,
        head: Celo,
        alt: "Celo",
        title: "Best Hack built on Celo",
        border: "border-green-400",
        buttonColor: "bg-green-400",
        color: "#35d07f",
        items: [
          "₹20,000 for best Dapp built on Celo",
          "Continuity Support"
        ],
        readMore: "https://www.notion.so/devfolio/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0"
      },
      {
        id: 4,
        head: Filecoin,
        alt: "Filecoin",
        title: "Best use of IPFS and/or Filecoin",
        border: "border-blue-900",
        buttonColor: "bg-blue-900",
        color: "#0090ff",
        items: [
          "₹20000 for best use of IPFS and/or Filecoin"
        ],
        readMore: "https://devfolio.notion.site/Filecoin-Devfolio-Hackathon-Season-Prize-998fc3fe477e474086ae1d5ed1685203"
      },
      {
        id: 5,
        head: Koii,
        alt: "Koii",
        title: "Best use of Atomic NFT",
        border: "border-gray-400",
        buttonColor: "bg-gray-400",
        color: "#0a0a3e",
        items: [
          "First Prize - 20000 INR",
          "Second Prize - 10000 INR",
          "100 KOII - Most pull requests on Atomic NFT Repo",
          "100 KOII - Everyone who adds a new standard to Atomic NFT"
        ],
        readMore: "https://pickle-cruiser-238.notion.site/Koii-Hackathon-Challenge-0580738b61794c7b99366cdd22641ae9"
      },
      {
        id: 6,
        head: Raahee,
        alt: "Raahee",
        title: "Internship Opportunity",
        border: "border-gray-400",
        buttonColor: "bg-gray-400",
        color: "#fc8c8c",
        items: [
          "Raahee will be providing an internship if they impressed by any project which matches the goal"
        ]
      }
    ],
  },
];

// const Prize = (props) => {
//   const { title, border } = props;
//   return (
//     <section className={"text-3xl font-Sansation border-b-2 w-auto mb-4 inline-block font-bold text-white " + border}>
//       {title}
//     </section>
//   );
// };

// const SponsorPrize = (props) => {
//   const { header, alt } = props;
//   return (
//     <section>
//       <img className="h-16 mx-auto" src={header} alt={alt} />
//     </section>
//   );
// }

// const Knowmore = (props) => {
//   const { Color } = props;
//   return (
//     <section>
//       <div className={"py-4 justify-center items-center text-center text-white font-Sansation"}>
//         <button className={"w-3/4 rounded py-4 " + Color}>KNOW MORE</button>
//       </div>
//     </section>
//   )

// }

const Prizes = () => {
  const prizesRef = useNav("Prizes");

  return (
    <>
      <div
        className="mt-12 px-8 sm:px-0 mb-28"
        ref={prizesRef}
        id="prizesContainer"
      >
        <section className="sm:w-1/3 lg:w-1/5 py-12">
          <section className="text-white font-Sansation font-bold text-5xl text-center">
            PRIZES
          </section>
          <div className="h-1 w-full rounded-lg bg-white" />
        </section>
        <div
          className=" px-4 sm:px-40 md:px-12 lg:px-28 grid grid-cols-1 md:flex md:flex-wrap md:justify-around"
          id="prizes"
        >
          {prizeList
            .filter((item) => {
              return item.textHeader === "Prizes";
            })[0]
            .prize.map((item) => {
              return (
                <article className={"prizescard my-8" + item.bgclass} style={{ "flexBasis": "28%" }}>
                  <header className="prizescard__thumb">
                    <img src={item.image} alt={item.head} />
                  </header>
                  <div className="prizescard__body">
                    <h2 className="prizescard__title">{item.head}</h2>
                    <div class="prizescard__description">
                      {item.items.map((it) => {
                        return (
                          <li>
                            {it}
                          </li>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
        </div>

        {/* <div
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
        </div> */}
        <div className="py-16 text-4xl text-center font-Sansation font-bold uppercase text-white">CHALLENGE PRIZES</div>
        <div className="grid lg:grid-cols-3 justify-items-center px-20 grid-cols-1">
          {sponsorPrizes.filter((item) => {
            return item.sponsorHeader === "Sponsor Prizes";
          })[0].sponsorPrize.map((item) => {
            return (
              <div>
                {/* <SponsorPrize header={item.head} alt={item.alt} />
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
                </div> */}

                <div class="challprizescard" style={{ "backgroundColor": item.color }}>
                  <div className="bg-white rounded-lg shadow-2xl">
                    <img src={item.head} alt={item.alt} className="object-contain px-3" />
                  </div>
                  <div className="text-lg text-center mt-3 font-bold text-white">
                    {item.title}
                  </div>
                  <div class="challprizescard__content">
                    {item.items.map((it) => {
                      return (
                        <li>
                          {it}
                        </li>
                      );
                    })}
                    {item.readMore ? <a href={item.readMore} target="_blank" rel="noreferrer">Read More</a> : <div className="mb-6" />}
                  </div>
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
