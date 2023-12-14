// Technology.js
import React from "react";
import Header from "../typography/header";

const Technology = ({ backgroundColor, textColor, title }) => {
  return (
    <div
      className={`h-[5vh] w-full overflow-hidden bg-${backgroundColor} shadow-sm sm:h-[10vh]`}
    >
      <Header
        extraStyling={`font-semibold tracking-tight text-center h-full w-full flex justify-center items-center md:text-4xl text-xl text-${textColor}`}
      >
        {title}
      </Header>
    </div>
  );
};

export default Technology;
