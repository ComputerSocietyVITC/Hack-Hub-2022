import React from "react";
import "../styles/navbar.css";
import { useNav } from '../helpers/customHooks/useNav';

const Judges = () => {

    const judgesRef = useNav('Judges');

    return (
        <>
            <div className="mt-24 px-8 sm:px-0 mb-40" ref={judgesRef} id='judgesContainer'>
                <section className="sm:w-1/3 lg:w-1/5 my-8 py-12">
                    <section className="text-white font-Sansation font-bold text-5xl text-center">
                        JUDGES
                    </section>
                    <div class="h-1 w-full rounded-lg bg-white"></div>
                </section>
                <h1 className="text-white font-Sansation font-bold text-4xl text-center">To Be Announced...</h1>
            </div>
        </>
    );
};

export default Judges;
