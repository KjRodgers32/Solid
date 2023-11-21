import React from "react"

const Login = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto">
        <div className="w-[25rem] h-[25rem] rounded-md shadow-2xl border">
          <form action="">
            <div className="flex flex-col">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input type="text" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
