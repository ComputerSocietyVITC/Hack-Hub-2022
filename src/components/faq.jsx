import * as React from "react";
import faqribbon1 from "../images/faqribbon1.png";
import faqribbon2 from "../images/faqribbon2.png";

const FAQ = () => {

    const [toggleFAQ1, setToggleFAQ1] = React.useState(false)
    const [toggleFAQ2, setToggleFAQ2] = React.useState(false)
    const [toggleFAQ3, setToggleFAQ3] = React.useState(false)
    const [toggleFAQ4, setToggleFAQ4] = React.useState(false)
    const [toggleFAQ5, setToggleFAQ5] = React.useState(false)

    return (
        <>
            <div className="h-screen">
                <div className="w-full p-6 md:p-40">
                    <div className="md:w-1/2 mx-auto">
                        <div className="mx-auto w-full relative md:my-4 my-2 cursor-pointer" onClick={() => setToggleFAQ1(!toggleFAQ1)}>
                            <img src={faqribbon1} alt="Ribbon 1" />
                            <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-32 top-1 left-12">How can i register for hackhub?</div>
                            <div className="absolute md:top-4 md:left-12 top-2 left-5">
                                {toggleFAQ1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                }
                            </div>
                            <div className="absolute md:top-4 md:right-12 top-2 right-5">
                                {toggleFAQ1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                }
                            </div>
                        </div>
                        <div>
                            <p className={"p-2 text-white text-lg md:text-xl text-center" + (toggleFAQ1 ? " block" : " hidden")} >Just click on the button to register on the home page.</p>
                        </div>
                    </div>
                    <div className="md:w-7/12 mx-auto">
                        <div className="mx-auto w-full relative md:my-4 my-2 cursor-pointer" onClick={() => setToggleFAQ2(!toggleFAQ2)}>
                            <img src={faqribbon2} alt="Ribbon 2" />
                            <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-1/4 top-1 left-12">How can i register for hackhub?</div>
                            <div className="absolute md:top-4 md:left-12 top-2 left-5">
                                {toggleFAQ2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                }
                            </div>
                            <div className="absolute md:top-4 md:right-12 top-2 right-5">
                                {toggleFAQ2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                }
                            </div>
                        </div>
                        <div>
                            <p className={"p-2 text-white text-lg md:text-xl text-center" + (toggleFAQ2 ? " block" : " hidden")} >Just click on the button to register on the home page.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-auto">
                        <div className="mx-auto w-full relative md:my-4 my-2 cursor-pointer" onClick={() => setToggleFAQ3(!toggleFAQ3)}>
                            <img src={faqribbon1} alt="Ribbon 1" />
                            <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-32 top-1 left-12">How can i register for hackhub?</div>
                            <div className="absolute md:top-4 md:left-12 top-2 left-5">
                                {toggleFAQ3 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                }
                            </div>
                            <div className="absolute md:top-4 md:right-12 top-2 right-5">
                                {toggleFAQ3 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                }
                            </div>
                        </div>
                        <div>
                            <p className={"p-2 text-white text-lg md:text-xl text-center" + (toggleFAQ3 ? " block" : " hidden")} >Just click on the button to register on the home page.</p>
                        </div>
                    </div>
                    <div className="md:w-7/12 mx-auto">
                        <div className="mx-auto w-full relative md:my-4 my-2 cursor-pointer" onClick={() => setToggleFAQ4(!toggleFAQ4)}>
                            <img src={faqribbon2} alt="Ribbon 2" />
                            <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-1/4 top-1 left-12">How can i register for hackhub?</div>
                            <div className="absolute md:top-4 md:left-12 top-2 left-5">
                                {toggleFAQ4 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                }
                            </div>
                            <div className="absolute md:top-4 md:right-12 top-2 right-5">
                                {toggleFAQ4 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                }
                            </div>
                        </div>
                        <div>
                            <p className={"p-2 text-white text-lg md:text-xl text-center" + (toggleFAQ4 ? " block" : " hidden")} >Just click on the button to register on the home page.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-auto">
                        <div className="mx-auto w-full relative md:my-4 my-2 cursor-pointer" onClick={() => setToggleFAQ5(!toggleFAQ5)}>
                            <img src={faqribbon1} alt="Ribbon 1" />
                            <div className="text-white text-lg md:text-2xl absolute md:top-4 md:left-32 top-1 left-12">How can i register for hackhub?</div>
                            <div className="absolute md:top-4 md:left-12 top-2 left-5">
                                {toggleFAQ5 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                }
                            </div>
                            <div className="absolute md:top-4 md:right-12 top-2 right-5">
                                {toggleFAQ5 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                }
                            </div>
                        </div>
                        <div>
                            <p className={"p-2 text-white text-lg md:text-xl text-center" + (toggleFAQ5 ? " block" : " hidden")} >Just click on the button to register on the home page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
