import React from "react";
import "../styles/navbar.css";
import randomize from "../images/communitypartners/randomize.png";
import optica from "../images/communitypartners/optica.png";
import iete from "../images/communitypartners/iete.png";

const page = [
    {
        id: 1,
        textHeader: "COMMUNITY PARTNERS",
        commpart: [
            {
                id: 1,
                border: "border-gray-200",
                headingColor: "bg-clip-text text-transparent bg-gradient-to-t from-gray-100 to-gray-300",
                content: [
                    {
                        key: 1,
                        src: randomize,
                        href: 'https://www.randomizemuj.com/'
                    },
                    {
                        key: 2,
                        src: optica,
                        href: 'http://jiitopticachapter.com/'
                    },
                    {
                        key: 3,
                        src: iete,
                        href: 'http://ietevit.com/'
                    }
                ],
            }
        ],
    },
];

const CommunityPartners = () => {

    return (
        <>
            <div className="mt-24 px-8 sm:px-0">
                <section className="sm:w-1/2 my-8 py-6 mx-auto">
                    <section className="text-gradPink font-Sansation font-bold text-4xl md:text-5xl text-center">
                        COMMUNITY PARTNERS
                    </section>
                    {/* <div class="h-1 w-full rounded-lg bg-white"></div> */}
                </section>
                {<section className="sm:mx-24 lg:mx-32">
                    {page
                        .filter((item) => {
                            return item.textHeader === "COMMUNITY PARTNERS";
                        })[0]
                        .commpart.map((item) => {
                            return (
                                <div className={"col-span-4 rounded-3xl my-10 py-2 "} key={item.id}>
                                    <div className="lg:flex lg:flex-wrap lg:justify-around bg-transparent mx-8" >
                                        {item.content.map((item) => {
                                            return (
                                                <a href={item.href} target="_blank" rel="noreferrer" style={{ "flexBasis": "33%" }}>
                                                    <div className="h-20 bg-white hover:bg-gray-200 m-6 rounded-xl">
                                                        <img
                                                            className="object-contain p-3 h-full w-full"
                                                            key={item.key}
                                                            src={item.src}
                                                            alt={item.href}
                                                        />
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                </section>}
            </div>
        </>
    );
};

export default CommunityPartners;
