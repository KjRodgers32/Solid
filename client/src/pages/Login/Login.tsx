import React from "react"
import logo from "../../assets/Solid (1)-fotor-bg-remover-20231118221321.png"

const Login = () => {
  return (
    <div>
      <div className="h-screen w-full">
        <div className="flex">
          <div className="w-1/3 h-screen items-center mt-20">
            <div className="flex flex-col items-center w-full">
              <div className="w-[10rem]">
                <img src={logo} alt="logo" />
              </div>
              <div className="w-full text-center">
                <h1 className="text-3xl font-bold">Welcome</h1>
                <h2 className="font-bold">Do Your Friend A Solid</h2>
                <h2 className="font-bold mt-16 text-left ml-5">
                  Sign up or Login
                </h2>
              </div>
              <div className="w-[70%] mt-5">
                <form className="flex flex-col text-left">
                  <input type="email" placeholder="Enter Your Email" />
                  <input type="text" placeholder="Enter Your Password" />
                </form>
              </div>
            </div>
          </div>
          <div className="w-2/3 bg-blue-900 h-screen"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
