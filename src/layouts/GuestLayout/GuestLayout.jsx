import React from "react";
import { Outlet } from "react-router-dom";
import useDark from "../../hooks/useDark";
import mode from "../../assets/svg/modes/modes";
export default function GuestLayout() {
  const { toggleMode, isDarkMode } = useDark();

  return (
    <div className={`relative h-screen w-screen ${isDarkMode ? "dark" : ""}`}>
      <Outlet />
      <div className="group fixed bottom-0 left-0 z-10 px-6 py-4">
        <button
          onClick={toggleMode}
          type="button"
          className="z-4 cursor-pointer"
        >
          {isDarkMode ? mode.dark : mode.light}
        </button>
      </div>
    </div>
  );
}
