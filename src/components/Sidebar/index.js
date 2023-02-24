import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants";

const linkClass =
  "flex items-center gap-2 mt-5 transition-colors duration-500  px-3 py-2 hover:no-underline rounded-md text-base";

export default function Sidebar() {
  return (
    <div className="bg-white w-80  flex-col border-r border-neutral-300 hidden lg:flex md:flex ">
      <div className="pb-8 flex flex-1 flex-col gap-0.5 overflow-y-auto">
        <div className="p-5">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
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
      <span className="text-xl">{link.icon}</span>
      <span className="pl-4 text-sm">{link.label}</span>
    </Link>
  );
}
