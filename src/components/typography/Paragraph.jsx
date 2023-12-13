import React from "react";

const Paragraph = ({ extraStyling, children }) => {
  return (
    <div className={"z-10 text-4xl dark:text-white " + extraStyling}>
      {children}
    </div>
  );
};

export default Paragraph;
