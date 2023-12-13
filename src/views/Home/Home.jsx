import React, { useState } from "react";
import Header from "../../components/typography/header";
import useOnLoad from "../../hooks/useOnLoad";
import bg from "../../assets/bg.jpg";

export default function Home() {
  const { isOnLoad } = useOnLoad();

  return (
    <div className="relative flex h-screen w-screen flex-col items-center from-transparent to-sky-950 dark:bg-gradient-to-b">
      <div>
        <img
          src={bg}
          alt=""
          className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-[100vh] w-[100vw] transition duration-500 ${
            isOnLoad ? "scale-100" : "scale-110"
          }`}
        />
        <div className="grid h-screen w-screen grid-cols-2 items-end justify-center border-8 border-white px-8 py-12 dark:border-sky-400">
          <div className="flex h-full w-full items-end justify-center">
            <div
              className={`h-[13vh] bg-gradient-to-t from-zinc-700 to-sky-500 bg-clip-text px-4 text-4xl font-bold text-transparent transition duration-500 dark:from-sky-400 dark:to-sky-200 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl ${
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
          <div className="flex h-full w-full items-end justify-center">
            <div className="flex h-full w-full items-end justify-center">
              <div
                className={`lg:text-text-sm h-[13vh] w-[50vw] overflow-y-auto  border-l-4 border-sky-950 bg-white bg-opacity-60 px-4 py-1 text-start text-xs font-light text-sky-950 backdrop-blur-lg dark:border-sky-400 dark:bg-black dark:bg-opacity-40 dark:text-sky-100 sm:w-[30vw] sm:text-xs md:text-sm xl:text-base ${
                  isOnLoad
                    ? "scale-100 transition-transform duration-500"
                    : "scale-110"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                consequuntur praesentium vel hic animi. Maiores dolorum
                perspiciatis dicta repudiandae repellendus doloribus, nostrum
                obcaecati est corrupti inventore error eius incidunt velit?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
