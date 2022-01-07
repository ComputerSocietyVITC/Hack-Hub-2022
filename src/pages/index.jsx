import * as React from "react"

import Navbar from "../components/navbar"

import About from "../components/about";
import Sponsors from "../components/sponsors.jsx";

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Sponsors/>
      <About/>
    </>
  )
}

export default IndexPage
