import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden">
        <Sidebar />
        {/* <div >Navbar</div> */}

        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
