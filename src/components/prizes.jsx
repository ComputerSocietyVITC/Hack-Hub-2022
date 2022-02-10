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

const prizeList=[
    {
        id:1,
        textHeader:"Prizes",
        prize:[
            {
                id:1,
                head:"1st Prize",
                border:"border-yellow-400",
                items:[
                    {
                        key:1,

                    },
                ]
            },
            {
                id:2,
                head:"2nd Prize",
                border:"border-gray-400",
                items:[
                    {
                        key:1,
                    },
                ]
            },
            { 
                id:3,
                head:"3rd Prize",
                border:"border-red-400",
                items:[
                    {
                        key:1,
                    },
                ]
            }
        ]

    }
]
const Prize=(props)=>{
    const {title}=props;
    return(
        <section className="text-4xl font-Sansation font-bold uppercase">
            {title}
        </section>
    );
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

    return (
        <>
            <div className="mt-24 px-8 sm:px-0 mb-40" ref={prizesRef} id='prizesContainer'>
                <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
                    <section className="text-white font-Sansation font-bold text-5xl text-center">
                        PRIZES
                    </section>
                    <div class="h-1 w-full rounded-lg bg-white"></div>
                </section>
                {/*<h1 className="text-white font-Sansation font-bold text-4xl text-center">To Be Announced...</h1>*/}
                {<div className="lg:mx-40 relative flex space-x-16 justify-between" id="winners">
                    {prizeList.filter((item)=>{
                        return item.textHeader==="Prizes";
                    })[0].prize.map((item)=>{
                        return(
                        <div className={"text-center rounded-3xl border-4 "+item.border} key={item.id}>
                            <Prize title={item.head}/>
                            <div className="text-center text-bold leading-loose">
                                {item.items.map((item)=>{
                                    return(
                                        <p>Ex officia qui nulla dolor nisi sint consequat exercitation deserunt. Sunt deserunt qui officia et est. Magna id qui commodo occaecat eiusmod veniam et cupidatat incididunt duis amet do qui cupidatat. Aliqua reprehenderit sit cupidatat ipsum cupidatat. Tempor id aliqua veniam cillum in exercitation elit deserunt nostrud. Velit velit ut amet proident ullamco velit officia nisi esse ad id officia excepteur.</p>
                                    );
                                })}
                            </div>
                        </div>
                        );
                    })}           
                </div>}
                <div className="mt-20 mx-40 rounded-3xl border-4 border-gray-200" id="Participation">
                    <div className="text-4xl text-center font-Sansation font-bold uppercase">Participation Prizes</div>
                    <div className="h-1 w-full rounded bg-gray-600"></div>
                    <div className="text-xl  text-bold text-center font-Sansation">
                        <ul className="space-y-6">
                            <li>Premium Resources for free for everyone</li>
                            <li>Certificates for everyone</li>
                            <li>15% off to all participants</li>
                            <li>Free XYZ domain names to everyone</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Prizes;
