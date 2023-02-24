import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden pt-16 ">
        <Sidebar />
        {/* <div >Navbar</div> */}

        <div className="flex flex-col w-full px-5 py-5 overflow-y-auto bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
