import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import './Deafault.css'


export default function  Default() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
         <Outlet />
      </div>
    </div>
  )
}