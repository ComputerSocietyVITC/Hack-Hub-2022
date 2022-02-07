import React from "react";
import "../styles/navbar.css";
import { useNav } from '../helpers/customHooks/useNav';

const prizeList=[
    {
        id:1,
        textHeader:"Prizes",
        prize:[
            {
                id:1,
                head:"1st Prize",
                items:[
                    {
                        key:1,

                    },
                ]
            },
            {
                id:2,
                head:"2nd Prize",
                items:[
                    {
                        key:1,
                    },
                ]
            },
            { 
                id:3,
                head:"3rd Prize",
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
        <section className="text-3xl font-Sansation font-bold uppercase">
            {title}
        </section>
    );
}

const Prizes = () => {

    const prizesRef = useNav('Prizes');

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
                {<div>
                    {prizeList.filter((item)=>{
                        return item.textHeader==="Prizes";
                    })[0].prize.map((item)=>{
                        return(
                        <div key={item.id}>
                            <Prize title={item.head}/>
                            <div>
                                {item.items.map((item)=>{
                                    return(
                                        <p>To be decided.</p>
                                    );
                                })}
                            </div>
                        </div>
                        );
                    })}           
                </div>}
            </div>
        </>
    );
};

export default Prizes;
