import * as React from "react"

import Navbar from "../components/navbar"

import About from "./about.js";
import "./about.css";

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <About/>
    </>
  )
}

export default IndexPage
