import React from "react"
import { Outlet } from "react-router-dom"

export default function Engagement(){
    return <div>
        <div>Navbar</div>
        <div>Sidenav</div>
        <div><Outlet /></div>

    </div>
}