import React from "react"
import { Slant as Hamburger } from "hamburger-react"
import logo from "../../assets/Solid (1)-fotor-bg-remover-20231118221321.png"
import { Link } from "react-router-dom"

const LandingNav = () => {
  return (
    <div className="w-full py-3 px-5 bg-transparent flex justify-between items-center">
      <Hamburger />
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded py-1 px-2 text-[#f5f5f5] bg-[#FF8356]"
        >
          Login In
        </Link>
        <img src={logo} alt="logo" className="w-[5rem]" />
      </div>
    </div>
  )
}

export default LandingNav
