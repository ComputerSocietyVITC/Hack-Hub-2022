import React from 'react';
import "../styles/about.css";

let page=[
    {
        id : 1,
        textHeader:"ABOUT",
        ab:[
            {
                id :1,
                About:"This is a sample text",
            }
        ]
    }
]

function About(){
    return(
        <section className="bground">
             <section className="around-head">
                <p className="head">ABOUT</p>
             </section>
            {(page.filter((head)=>{
                return head.textHeader==="ABOUT"
            })[0]).ab.map((pag)=>{
                return <Show About={pag.About}/>
            })}
            
        </section>
    )
}

const Show=(props)=>{
    const {textHeader,About}=props
    return(
        <section>
            <section className="around-abt">
                <section className="ard-abt">
                    <p className="Text">{About}</p>
                </section>
                
            </section>
        </section>
    )
}
export default About;