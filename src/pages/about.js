import React from 'react';

let page=[
    {
        id : 1,
        textHeader:"ABOUT",
        About : "Sample Text"
    }
]

function About(){
    return(
        <section className="bground">
            {page.map((pag)=>{
                return(
                    <Show key={pag.id}{...pag}/>
                )
            })}
        </section>
    )
}

const Show=(props)=>{
    const {textHeader,About}=props
    return(
        <section>
            <section className="around-head">
                <h2>{textHeader}</h2>
            </section>
            <section className="around-abt">
                <section className="ard-abt">
                    <p>{About}</p>
                </section>
                
            </section>
        </section>
    )
}
export default About;
