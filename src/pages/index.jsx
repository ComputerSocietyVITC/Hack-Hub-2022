import * as React from "react"
import CountDown from "../components/countdown"
import Navbar from "../components/navbar"
import TimeLine from "./timeline"
import About from "./about.js";


const IndexPage = () => {
  return (
    <>
      <Navbar />
      <CountDown />      
      <About/>

    </>
  )
}

export default IndexPage
