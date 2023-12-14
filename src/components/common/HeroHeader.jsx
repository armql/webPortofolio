import React, { Fragment } from "react";

export default function HeroHeader({ isOnLoad }) {
  return (
    <Fragment>
      <div className="mt-10 grid h-full w-full grid-cols-2 items-end justify-center overflow-hidden border-8 border-white px-8 py-12 dark:border-sky-400">
        <div className="flex h-full w-full items-end justify-center">
          <div
            className={`bg-gradient-to-t from-zinc-700 to-sky-500 bg-clip-text px-4 text-4xl font-bold tracking-tight text-transparent transition duration-500 dark:from-sky-400 dark:to-sky-200 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl ${
              isOnLoad ? "scale-100" : "scale-110"
            }`}
          >
            Welcome to my{" "}
            <span className="cursor-pointer text-black dark:text-white">
              newbie
            </span>{" "}
            portofolio,
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="flex h-full w-full items-end justify-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            quibusdam sapiente eligendi praesentium, sint nulla quas veritatis?
            Vero beatae id et sed expedita labore quis dignissimos repudiandae!
            Amet, adipisci consequuntur!
          </div>
        </div>
      </div>
    </Fragment>
  );
}
