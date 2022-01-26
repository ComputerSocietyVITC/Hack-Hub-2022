import React from "react";

import "../../styles/images.css";
import Typical from "react-typical";
import landing from "../../images/landing.png";
import "../../styles/gradients.css";




const MainPage = () => {
  return (
    <>
      <section className="main_grad">
        <section className="text-white">
          <section className="h-screen py-8 grid grid-rows-4">
            <section className="row-start-2">
              <section className="grid grid-cols-10 gap-2">
                <section className="col-start-2 col-span-3">
                  <section className="font-Ally font-bold text-5xl">
                    Abhijith Ganesh
                  </section>
                  <section className="py-6 font-Cons text-2xl">
                    I am an enthusiastic
                    <Typical
                      steps={[
                        "Full-Stack Developer",
                        3000,
                        "Open Source Enthusiast",
                        2000,
                        "Tech-Enthusiast",
                        2000,
                        "Undergrad Student",
                        1000,
                        "Blogger",
                        1000,
                        "Motosports Fan",
                        1000,
                      ]}
                      loop={Infinity}
                    />
                  </section>
                  <section className="p-4 my-4 flex font-bold  bg-trans border border-oran text-l justify-center w-max transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none">
                    <a href="https://blog.abhijithganesh.tech">Visit my blog</a>
                  </section>
                </section>
                <section className="md:hidden sm:hidden md:img lg: img -translate-y-64">
                  <img src={landing} alt="AbhijithGanesh"/>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default MainPage;
