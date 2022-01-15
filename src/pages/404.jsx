import React from "react";

const Error404 = () => {
  return(
    <section>
      <div className="grid grid-flow-row gap-4 grid-rows-[repeat(3,_700px)]">
        <img src="images/404/404-planet.png" alt="" 
          className="h-auto w-auto z-0 col-start-1 col-span-4 row-start-1 row-span-5" />
        <img src="images/404/404-astronaut1.png" alt="" 
          className="h-4/5 col-start-4 col-span-2 row-start-1 row-span-1"/>
        <img src="images/404/404-astronaut2.png" alt="" 
          className="h-4/5 col-start-5 col-span-3 row-start-2 row-span-1"/>
        <div 
          className=" flex flex-col justify-between
                      col-start-1 col-span-3
                      row-start-1 row-span-2
                      z-10 text-black
                      font-Arya font-bold px-16 py-40">
          <div>
            <p className="text-5xl text-center">
              Error
            </p>
            <p className="text-9xl text-center">
              404
            </p>
          </div>
          <div>
            <p className="text-3xl text-left">
              Oops....
            </p>
            <p className="text-3xl">
              Try refreshing and do register, 
            </p>
            <p className="text-3xl">
              you might get the constellation prize.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;
