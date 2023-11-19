import React from "react"
import headerImg from "../../assets/best-female-friends-spending-time-together-removebg.png"
import LandingNav from "./LandingNav"
import ReactTyped from "react-typed"
import { names } from "../../constants/names"

const LandingPage = () => {
  return (
    <div className="h-screen">
      <LandingNav />
      <h1 className="text-center text-[10rem]">
        Do{" "}
        <ReactTyped
          strings={names}
          typeSpeed={90}
          backSpeed={40}
          loop
          className="text-[#FF8356]"
        />
        <br /> a <span className="text-[#F54D42]">Solid</span>
      </h1>
      <div className="absolute bottom-0 max-w-[75rem] left-0 right-0 m-auto">
        <img src={headerImg} alt="Two friends" className="bg-center" />
      </div>
    </div>
  )
}

export default LandingPage
