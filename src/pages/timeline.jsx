import * as React from "react"
import hex1 from "../images/hex1.png"
import hex2 from "../images/hex2.png"
import libra from "../images/constellations/libra.png"

const TimeLine = () => {
    return (
        <>
            <div className="h-screen bg-bgimage">
                <div className="container bg-transaparent mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="flex justify-between items-center w-full right-timeline">
                            <div className="shadow-xl md:w-5/12 relative">
                                <div id="arrowright" className="mr-8 ml-auto">
                                    <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation absolute top-4 right-6">Registration Starts</div>
                                </div>
                            </div>
                            <div className="z-20 flex items-center shadow-xl">
                                <div className="text-9xl text-black relative mx-auto">
                                    <div className="md:w-24 w-16">
                                        <img src={hex1} alt="hex1" />
                                    </div>
                                    <section className="absolute top-5 left-2 md:w-24 w-16 z-30">
                                        <img src={libra} alt="Libra" />
                                    </section>
                                </div>
                            </div>
                            <div className="md:w-5/12">
                                <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation text-left">14th Febraury 2022</div>
                            </div>
                        </div>
                        <div class="h-12 w-1 bg-gradient-to-b mx-auto from-color1 to-color2"></div>
                        <div className="flex justify-between items-center w-full right-timeline">
                            <div className="md:w-5/12">
                                <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation text-right">14th Febraury 2022</div>
                            </div>
                            <div className="z-20 flex items-center shadow-xl">
                                <div className="text-9xl text-black relative mx-auto">
                                    <div className="md:w-24 w-16">
                                        <img src={hex2} alt="hex2" />
                                    </div>
                                    <section className="absolute top-5 left-2 md:w-24 w-16 z-30">
                                        <img src={libra} alt="Libra" />
                                    </section>
                                </div>
                            </div>
                            <div className="shadow-xl md:w-5/12 relative">
                                <div id="arrowleft" className="ml-8">
                                    <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation absolute top-4 left-6">Registration Ends</div>
                                </div>
                            </div>
                        </div>
                        <div class="h-12 w-1 bg-gradient-to-b mx-auto from-color1 to-color2"></div>
                        <div className="flex justify-between items-center w-full right-timeline">
                            <div className="shadow-xl md:w-5/12 relative">
                                <div id="arrowright" className="mr-8 ml-auto">
                                    <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation absolute top-4 right-6">Submission Starts</div>
                                </div>
                            </div>
                            <div className="z-20 flex items-center shadow-xl">
                                <div className="text-9xl text-black relative mx-auto">
                                    <div className="md:w-24 w-16">
                                        <img src={hex1} alt="hex1" />
                                    </div>
                                    <section className="absolute top-5 left-2 md:w-24 w-16 z-30">
                                        <img src={libra} alt="Libra" />
                                    </section>
                                </div>
                            </div>
                            <div className="md:w-5/12">
                                <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation text-left">14th Febraury 2022</div>
                            </div>
                        </div>
                        <div class="h-12 w-1 bg-gradient-to-b mx-auto from-color1 to-color2"></div>
                        <div className="flex justify-between items-center w-full right-timeline">
                            <div className="md:w-5/12">
                                <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation text-right">14th Febraury 2022</div>
                            </div>
                            <div className="z-20 flex items-center shadow-xl">
                                <div className="text-9xl text-black relative mx-auto">
                                    <div className="md:w-24 w-16">
                                        <img src={hex2} alt="hex2" />
                                    </div>
                                    <section className="absolute top-5 left-2 md:w-24 w-16 z-30">
                                        <img src={libra} alt="Libra" />
                                    </section>
                                </div>
                            </div>
                            <div className="shadow-xl md:w-5/12 relative">
                                <div id="arrowleft" className="ml-8">
                                    <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation absolute top-4 left-6">Submission Ends</div>
                                </div>
                            </div>
                        </div>
                        <div class="h-12 w-1 bg-gradient-to-b mx-auto from-color1 to-color2"></div>
                        <div className="flex justify-between items-center w-full right-timeline">
                            <div className="shadow-xl md:w-5/12 relative">
                                <div id="arrowright" className="mr-8 ml-auto ">
                                    <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation absolute top-4 right-24">Results</div>
                                </div>
                            </div>
                            <div className="z-20 flex items-center shadow-xl">
                                <div className="text-9xl text-black relative mx-auto">
                                    <div className="md:w-24 w-16">
                                        <img src={hex1} alt="hex1" />
                                    </div>
                                    <section className="absolute top-5 left-2 md:w-24 w-16 z-30">
                                        <img src={libra} alt="Libra" />
                                    </section>
                                </div>
                            </div>
                            <div className="md:w-5/12">
                                <div className="uppercase text-white text-bold md:text-xl text-xs text-Sansation text-left">14th Febraury 2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeLine
