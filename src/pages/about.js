import React from "react";

let page=[
    {
        id:1,smallHeader:"About",Text:""
    }
]
function About(){
    return(
        <section className="abt">
            {page.map((pag)=>{
                return(
                    <Show key={pag.id}{...pag}></Show>
                )
            })}
        </section>
    )
}

const Show=(props)=>{
    const {smallHeader,Text}=props
    return(
        <div>
            <h3>{smallHeader}</h3>
            <p className="pa">{Text}</p>
        </div>

    )
}