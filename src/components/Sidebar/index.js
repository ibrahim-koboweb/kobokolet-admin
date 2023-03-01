import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants";
import { useState } from "react";

const linkClass =
  "flex items-center w-full  gap-2 mt-4 transition-colors duration-300  px-3 py-2 hover:no-underline rounded-md text-base";

export default function Sidebar() {
  return (
    <div className="bg-white w-80  flex-col border-r border-neutral-300 hidden lg:flex md:flex ">
      <div className="pb-8 flex flex-1 flex-col gap-0.5 overflow-y-auto">
        {/* <Dropdown /> */}

        <div className="p-4">
          {DASHBOARD_SIDEBAR_LINKS.map((link) =>
            link.dropdown === false ? (
              <SidebarLink key={link.key} link={link} />
            ) : (
              <SidebarButton key={link.key} link={link} />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-0.5 pb-3 border-t border-neutral-300">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-primary text-white hover:text-white"
          : "text-neutral-900 hover:text-primary ",
        linkClass
      )}
    >
      <span className="text-2xl">{link.icon}</span>
      <span className="pl-4 text-base">{link.label}</span>
    </Link>
  );
}

function SidebarButton({ link }) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div>

   <button
   onClick={() => setIsOpen( (prev) => !prev )}
   className = {classNames(
    isOpen === true 
     ? "text-primary " 
     : "text-neutral-900 hover:text-primary ",
    'justify-between', linkClass)}
   >

    <span className = {'flex items-center' } >
        <span className="text-xl">{link.icon}</span>
        <span className="pl-4 text-sm">{link.label}</span>
    </span>
    {isOpen ? (
    <RiArrowUpSLine fontSize={24}/>
    ):
    <RiArrowDownSLine fontSize={24}/>
    }

   
   </button>

{isOpen &&
     (

      
      <div className="bg-white w-full  ">
        {link.dropdown.map((item) => (

          <Link
          to={item.path}
          className={classNames(
            pathname === item.path
              ? "bg-primary text-white hover:text-white"
              : "text-neutral-900 font-light hover:text-primary ",
              'flex items-center w-full items-start mt-2 px-3 py-2 rounded-md transition-colors duration-300'
          )}
          >
           <span className="text-xl">{item.icon}</span>
        <span className="pl-4 text-sm">{item.label}</span>
          </Link>

// flex items-center w-full items-start mt-4
         
        ))

        }
      </div>
     )

    }
      
   </div>

  );
}
