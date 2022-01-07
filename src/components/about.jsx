import React from 'react';
import "../styles/about.css";

let page=[
    {
        id : 1,
        textHeader:"ABOUT",
        About:"This is a sample text"
    }
]

function About(){
    return(
        <section className="bground">
            
            {(page.filter((head)=>{
                return head.textHeader=="ABOUT";
            }).map((pag)=>{
                return <Show About={pag.About}/>
            }))}
            
        </section>
    )
}

const Show=(props)=>{
    const {textHeader,About}=props
    return(
        <section>
            <section className="around-head">
                <p className="head">{textHeader}</p>
            </section>
            <section className="around-abt">
                <section className="ard-abt">
                    <p className="Text">{About}</p>
                </section>
                
            </section>
        </section>
    )
}
export default About;