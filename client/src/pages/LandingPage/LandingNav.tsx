import React from "react"
import { Slant as Hamburger } from "hamburger-react"
import logo from "../../assets/Solid (1)-fotor-bg-remover-20231118221321.png"

const LandingNav = () => {
  return (
    <div className="w-full p-3 bg-transparent flex justify-between items-center">
      <Hamburger />
      <div className="flex items-center gap-3">
        <button className="rounded py-1 px-2 text-[#f5f5f5] bg-[#F54D42]">
          Sign Up
        </button>
        <button className="rounded py-1 px-2 text-[#f5f5f5] bg-[#FF8356]">
          Login In
        </button>
        <img src={logo} alt="logo" className="w-[5rem]" />
      </div>
    </div>
  )
}

export default LandingNav
