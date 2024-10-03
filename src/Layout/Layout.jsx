import { Outlet } from "react-router-dom"


import Navber from "../Component/Navber/Navber"


const Layout = () => {
  return (
    <>
      <Navber/>
      <Outlet/>
    </>
  )
}

export default Layout
