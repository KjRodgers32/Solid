import React from "react"
import headerImg from "../../assets/best-female-friends-spending-time-together-removebg.png"
import LandingNav from "./LandingNav"
import ReactTyped from "react-typed"
import { names } from "../../constants/names"
import { motion } from "framer-motion"

const LandingPage = () => {
  return (
    <div className="h-screen">
      <LandingNav />
      <div className="flex flex-col items-center text-center justify-center">
        <div className="text-center rounded-full py-2 px-6 bg-[#FF8356] w-fit justify-center items-center">
          Help out your pals!
        </div>
      </div>
      <div className="flex justify-between items-center h-screen">
        <h1 className="text-center text-[5rem] w-1/2">
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
        <motion.div
          initial={{ scale: 0, y: 200 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 2,
            ease: "linear",
          }}
          className="w-[40rem] items-center"
        >
          <img src={headerImg} alt="Two friends" className="bg-center" />
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage
