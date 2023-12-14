import React from "react";
import bg from "../../assets/bg.jpg";

export default function Background({ isOnLoad }) {
  return (
    <img
      src={bg}
      alt=""
      className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-[100vh] w-[100vw] transition duration-500 ${
        isOnLoad ? "scale-100" : "scale-110"
      }`}
    />
  );
}
