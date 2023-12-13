import React, { Fragment } from "react";
import useOnLoad from "../../hooks/useOnLoad";
import Bar from "./bar/Bar";

export default function Nav() {
  const { isOnLoad } = useOnLoad();

  return (
    <Fragment>
      <div
        className={`fixed left-0 right-0 top-0 z-50 h-14 bg-white ${
          isOnLoad ? "" : ""
        }`}
      >
        <div className="flex h-full w-full items-center justify-between px-6">
          <div className="text-sm font-semibold dark:text-sky-800 sm:text-lg">
            Web Developer
          </div>
          <Bar />
        </div>
      </div>
    </Fragment>
  );
}
