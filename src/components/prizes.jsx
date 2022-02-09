import React from "react";
import "../styles/gradients.css";
import "../styles/navbar.css";
import { useNav } from "../helpers/customHooks/useNav";
import Filecoin from "../images/SponsorPrizes/filecoin.svg";
import Koii from "../images/SponsorPrizes/koii.svg";
import Polygon from "../images/SponsorPrizes/polygon.svg";
import Tezos from "../images/SponsorPrizes/tezos.svg";
import Celo from "../images/SponsorPrizes/celo.svg";

const prizeList = [
  {
    id: 1,
    textHeader: "Prizes",
    prize: [
      {
        id: 1,
        head: "1st Prize",
        border: "border-yellow-400",
        items: [
          {
            key: 1,
          },
        ],
      },
      {
        id: 2,
        head: "2nd Prize",
        border: "border-gray-400",
        items: [
          {
            key: 1,
          },
        ],
      },
      {
        id: 3,
        head: "3rd Prize",
        border: "border-red-400",
        items: [
          {
            key: 1,
          },
        ],
      },
    ],
  },
];

const sponsorPrizes= [
    {
      id: 1,
      sponsorHeader: "Sponsor Prizes",
      sponsorPrize: [
        {
          id: 1,
          head: Polygon,
          alt:"Polygon",
          border: "border-blue-800",
          buttonColor:"bg-blue-800",
          items: [
            {
              key: 1,
            },
          ],
        },
        {
          id: 2,
          head: Tezos,
          alt:"Tezos",
          border: "border-blue-400",
          buttonColor:"bg-blue-400",
          items: [
            {
              key: 1,
            },
          ],
        },
        {
          id: 3,
          head: Celo,
          alt:"Celo",
          border: "border-green-400",
          buttonColor:"bg-green-400",
          items: [
            {
              key: 1,
            },
          ],
        },
        {
            id:4,
            head:Filecoin,
            alt:"Filecoin",
            border:"border-blue-900",
            buttonColor:"bg-blue-900",
            items:[
                {
                    key:2,
                }
            ]
        },
        {
            id:5,
            head:Koii,
            alt:"Koii",
            border:"border-gray-400",
            buttonColor:"bg-gray-400",
            items:[
                {
                    key:3,
                }
            ]
        }
      ],
    },
  ];



const Prize = (props) => {
  const { title } = props;
  return (
    <section className="text-4xl font-Sansation font-bold uppercase text-white py-8 ">
      {title}
    </section>
  );
};

const SponsorPrize=(props)=>{
    const {header,alt}=props;
    return(
        <section>
            <img className="h-16 mx-auto" src={header} alt={alt}/>
        </section>
    );
}

const Knowmore=(props)=>{
    const {Color}=props;
    return(
        <section>
             <div className={"py-4 justify-center items-center text-center text-white font-Sansation"}>
                 <button className={"w-3/4 rounded py-4 "+Color}>KNOW MORE</button>
            </div>
        </section>
    )
}

const Prizes = () => {
  const prizesRef = useNav("Prizes");

  return (
    <>
      <div
        className="mt-24 px-8 sm:px-0 mb-40"
        ref={prizesRef}
        id="prizesContainer"
      />
      <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
        <section className="text-white font-Sansation font-bold text-5xl text-center">
          PRIZES
        </section>
        <div class="h-1 w-full rounded-lg bg-white" />
      </section>

      <div
        className="grid lg:px-8 lg:grid-cols-3 lg:gap-8 md:grid-cols-3 md:gap-4 sm:grid-cols-1"
        id="prizes"
      >
        {prizeList
          .filter((item) => {
            return item.textHeader === "Prizes";
          })[0]
          .prize.map((item) => {
            return (
              <div
                className={"text-center rounded-3xl border-4 " + item.border}
                key={item.id}
              >
                <Prize title={item.head} />
                <div className="py-4 text-center font-Sansation text-bold leading-loose text-white">
                  {item.items.map((item) => {
                    return (
                      <p>
                        Ex officia qui nulla dolor nisi sint consequat
                        exercitation deserunt. Sunt deserunt qui officia et est.
                        Magna id qui commodo occaecat eiusmod veniam et
                        cupidatat incididunt duis amet do qui cupidatat. Aliqua
                        reprehenderit sit cupidatat ipsum cupidatat. Tempor id
                        aliqua veniam cillum in exercitation elit deserunt
                        nostrud. Velit velit ut amet proident ullamco velit
                        officia nisi esse ad id officia excepteur.
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      <div
        className="participation mt-20 mx-40 rounded-3xl border-4 border-gray-200"
        id="Participation"
      >
        <div className="text-4xl text-center font-Sansation font-bold uppercase text-white">
          Participation Prizes
        </div>
        <div className="h-1 w-full rounded bg-gray-600"></div>
        <div className="text-xl  text-bold text-center font-Sansation text-white">
          <ul className="space-y-6">
            <li>Premium Resources for free for everyone</li>
            <li>Certificates for everyone</li>
            <li>15% off to all participants</li>
            <li>Free XYZ domain names to everyone</li>
          </ul>
        </div>
      </div>

      <div className="py-20 text-4xl text-center font-Sansation font-bold uppercase text-white">CHALLENGE PRIZES</div>
      <div className="grid lg:px-8 lg:grid-cols-3 lg:gap-8 md:grid-cols-3 md:gap-4 sm:grid-cols-1">
        {sponsorPrizes.filter((item)=>{
            return item.sponsorHeader==="Sponsor Prizes";
        })[0].sponsorPrize.map((item)=>{
            return(
                <div>
                    <SponsorPrize header={item.head} alt={item.alt}/>
                    <div className={"text-center rounded-3xl border-4 "+item.border} key={item.id}>
                        <div className="py-4 text-center font-Sansation text-bold leading-loose text-white">
                            {item.items.map((item)=>{
                                return(
                                    <div>
                                        <p>Dolor eiusmod amet ex labore tempor sint elit mollit id anim nostrud incididunt. Dolore pariatur consequat proident ut reprehenderit tempor ullamco adipisicing consectetur nulla aute irure consequat. Minim cupidatat minim fugiat irure proident eu fugiat nulla laboris sunt.</p>
                                    </div>
                                );
                            })}
                        </div>
                        <Knowmore Color={item.buttonColor}/>
                    </div>
                </div>
            )
        })}
      </div>
    </>
  );
};

export default Prizes;
