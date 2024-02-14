import { Fragment } from "react";
import { useScroll } from "../hooks/useScroll";

export default function Home() {
  const { homeRef } = useScroll();

  function mail() {
    window.open("mailto:arlindmaliqi28@gmail.com");
  }

  return (
    <Fragment>
      <title>Welcome to my portfolio</title>
      <section
        ref={homeRef}
        className="flex h-screen w-full items-center justify-center overflow-hidden bg-white px-2 sm:h-full sm:px-4 md:px-6 lg:px-12 xl:px-24"
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 py-32 md:py-12">
          <h1 className="text-wrap xss:text-[78px] xs:text-[90px] flex w-full items-center justify-center text-[68px] font-semibold tracking-tighter sm:text-[140px] md:text-[170px] lg:text-[230px] xl:text-[290px]">
            Front end Developer
          </h1>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
                Let&rsquo;s talk
              </h1>
              <button
                type="button"
                onClick={mail}
                className="text-sm text-zinc-700 underline sm:text-base md:text-base lg:text-lg xl:text-lg"
              >
                arlindmaliqi28@gmail.com
              </button>
            </div>
            <p className="w-[150px] text-xs sm:text-base md:w-[400px] md:text-base lg:text-lg xl:text-lg">
              Hello, I&rsquo;m <span className="font-medium">Arlind</span>, a
              student in the last year of CSE at UBT, currently focusing on
              becoming a front-end developer.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
