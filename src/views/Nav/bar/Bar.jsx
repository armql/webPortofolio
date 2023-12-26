import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Bar() {
  const linksData = [
    {
      to: "/home",
      text: "Home",
    },
    {
      to: "/projects",
      text: "Projects",
    },
    {
      to: "/about",
      text: "About me",
    },
    {
      to: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div>
      <div className="flex flex-row gap-2 sm:gap-4">
        {linksData.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-xs hover:cursor-pointer sm:text-base lg:text-base xl:text-lg ${
                isActive ? "text-sky-400" : "hover:text-sky-400 "
              }`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
