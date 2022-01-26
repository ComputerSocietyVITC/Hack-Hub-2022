import React, { useState } from "react";
import logo from "../svgs/A Logo.svg";
import { Transition } from "@headlessui/react";
import "../../styles/gradients.css";

const styles = {
  width: "3.5rem",
  height: "3.5rem",
  padding: 2,
};

const HeaderContent = ({ Item, Reference }) => {
  return (
    <>
      <section className="text-lg font-Ally font-bold text-gray-400 underline_hover hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
        <a href={Reference}>{Item}</a>
      </section>
    </>
  );
};

const HeaderContentTwo = ({ Item, Reference }) => {
  return (
    <>
      <section className="text-md font-Ally font-bold text-gray-400 ">
        <a href={Reference}>{Item}</a>
      </section>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-bgBrand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <section className="flex items-center lg:grid grid-cols-12">
              <div className="lg:col-start-2 ">
                <img
                  className="h-16 w-16 p-2"
                  src={logo}
                  alt="Abhijith Ganesh's Website"
                />
              </div>
              <div className="hidden md:block lg:block lg:col-start-12">
                <div className="mx-10 flex flex-row justify-end space-x-4">
                  <HeaderContent Item={"About"} Reference={"#"} />
                  <HeaderContent Item={"Timeline"} Reference={"#"} />
                  <HeaderContent Item={"Projects"} Reference={"#"} />
                  <HeaderContent Item={"Technologies"} Reference={"#"} />
                </div>
              </div>
            </section>

            <div className="-mr-2 flex lg:hidden md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-bgBrand inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bgBrand focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <section className="h-1 w-auto bg-gradient-to-r from-[#094E63] via-[#B02558] to-[#EC521A]" />

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <HeaderContentTwo Item={"About"} Reference={"#"} />
                <HeaderContentTwo Item={"Timeline"} Reference={"#"} />
                <HeaderContentTwo Item={"Projects"} Reference={"#"} />
                <HeaderContentTwo Item={"Technologies"} Reference={"#"} />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
