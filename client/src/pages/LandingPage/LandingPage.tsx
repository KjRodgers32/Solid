import React from "react"
import headerImg from "../../assets/best-female-friends-spending-time-together-removebg (1).png"
import blob from "../../assets/bg-blob-removebg-preview.png"
import LandingNav from "./LandingNav"
import ReactTyped from "react-typed"
import { names } from "../../constants/names"
import { motion } from "framer-motion"

const LandingPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full -z-50">
        <div className="absolute border border-slate-300 rounded-full w-[70em] h-[70em] -z-50 mx-auto top-[12rem]"></div>
        <div className="absolute border border-slate-300 rounded-full w-[60em] h-[60em] -z-50 mx-auto top-[12rem]"></div>
        <div className="absolute border border-slate-300 rounded-full w-[50em] h-[50em] -z-50 mx-auto top-[12rem]"></div>
      </div>
      <div className="">
        <LandingNav />
        <div className="flex flex-col items-center text-center justify-center">
          <div className="text-center rounded-full py-2 px-6 bg-[#FF8356] w-fit justify-center items-center mb-20">
            Help out your pals!
          </div>
        </div>
        <div className="">
          <h1 className="text-center text-[5rem]">
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
        </div>
        <motion.div
          initial={{ scale: 1, y: 100, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 20,
            duration: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="max-w-[80rem] absolute bottom-0 mx-auto left-0 right-0"
        >
          <img
            src={headerImg}
            alt="Two friends"
            className="bg-top
        "
          />
        </motion.div>
      </div>
    </>
  )
}

export default LandingPage
