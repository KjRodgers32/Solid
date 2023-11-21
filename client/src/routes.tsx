import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login/Login"
import LandingPage from "./pages/LandingPage/LandingPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])
