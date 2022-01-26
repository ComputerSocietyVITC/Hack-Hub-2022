import React from "react";
import { FaDev, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";

const Socials = () => {
  const IconStyles = {
    align: "center",
    justifyContent: "center",
    marginTop: "10px",
    marginLeft: "5px",
    paddingRight: "5px",
    height: "2em",
    width: "2em",
  };
  return (
    <>
      <section className="footer bg-bgBrand text-white">
        <section className="grid lg:grid-cols-3">
          <section className="pl-10 col-start-1 col-span-1 text-center align-center">
            <section className="grid grid-rows-4">
              <section className="row-start-1 row-span-1">
                <section className="grid grid-cols-6">
                  <section className="col-start-2">
                    <a
                      href="https://github.com/AbhijithGanesh/"
                      className="text-gray-500 transition ease-in transition-duration-500ms transform hover:translate-x-2 hover:text-white "
                    >
                      <FiGithub style={IconStyles} />
                    </a>
                  </section>
                  <section className="hidden lg:col-start-3 lg:flex items-center sm:text-sm font-Cons">
                    AbhijithGanesh
                  </section>
                </section>
              </section>
              <section className="row-start-2 row-span-1">
                <section className="grid grid-cols-6">
                  <div className="col-start-2">
                    <a href="https://dev.to/AbhijithGanesh">
                      <FaDev
                        style={IconStyles}
                        className="dark:text-gray-500 transition ease-in transition-duration-500ms transform hover:text-white "
                      />
                    </a>
                  </div>
                  <div className="hidden lg:col-start-3 lg:flex items-center font-Cons text-white ">
                    AbhijithGanesh
                  </div>
                </section>
              </section>
              <section className="row-start-3 row-span-1">
                <section className="grid grid-cols-6">
                  <div className="col-start-2">
                    <a href="https://www.linkedin.com/in/abhijithganesh14/">
                      <GrLinkedinOption
                        style={IconStyles}
                        className="dark:text-gray-500 transition ease-in transition-duration-500ms transform hover:text-white "
                      />
                    </a>
                  </div>
                  <section className="hidden lg:flex col-start-3 items-center font-Cons text-white">
                    AbhijithGanesh14
                  </section>
                </section>
              </section>
              <section className="row-start-4 row-span-1">
                <section className="text-gray-500 transition ease-in transition-duration-500ms transform  hover:text-white dark:hover:text-yellow">
                  <section className="grid grid-cols-6">
                    <section className="col-start-2">
                      <a href="https://twitter.com/GaneshAbhijith">
                        <FaTwitter style={IconStyles} />
                      </a>
                    </section>
                    <section className="hidden lg:col-start-3 lg:flex items-center font-Cons text-white">
                      @GaneshAbhijith
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <section className="px-6 col-start-3 col-span-1">
            <section className="font-Ally text-xl text-white font-bold">
              Get in Touch
            </section>
            <section className="p-3 text-xl my-4 font-Cons bg-trans border border-oran justify-center w-max transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none">
              <a
                className="email-link"
                href="mailto:abhijith_ganesh@outlook.com"
              >
                Say Hello
              </a>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Socials;
