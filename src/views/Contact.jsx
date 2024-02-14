import { Fragment } from "react";
import { useScroll } from "../hooks/useScroll";
import {
  ReactIcon,
  JavaIcon,
  JavaScriptIcon,
  PHPIcon,
  NextJSIcon,
  LaravelIcon,
  MySQLIcon,
  TailwindCSSIcon,
  FigmaIcon,
} from "../components/brands/icons";
export default function Contact() {
  const { contactRef } = useScroll();
  const icons_data = [
    { icon: <ReactIcon />, id: "react-icon-1" },
    { icon: <JavaScriptIcon />, id: "javascript-icon-2" },
    { icon: <JavaIcon />, id: "java-icon-3" },
    { icon: <PHPIcon />, id: "php-icon-4" },
    { icon: <NextJSIcon />, id: "nextjs-icon-5" },
    { icon: <LaravelIcon />, id: "laravel-icon-6" },
    { icon: <MySQLIcon />, id: "mysql-icon-7" },
    { icon: <TailwindCSSIcon />, id: "tailwindcss-icon-8" },
    { icon: <FigmaIcon />, id: "figma-icon-9" },
    { icon: <ReactIcon />, id: "react-icon-10" },
    { icon: <JavaScriptIcon />, id: "javascript-icon-11" },
    { icon: <JavaIcon />, id: "java-icon-12" },
    { icon: <PHPIcon />, id: "php-icon-13" },
    { icon: <NextJSIcon />, id: "nextjs-icon-14" },
    { icon: <LaravelIcon />, id: "laravel-icon-15" },
    { icon: <MySQLIcon />, id: "mysql-icon-16" },
    { icon: <TailwindCSSIcon />, id: "tailwindcss-icon-17" },
    { icon: <FigmaIcon />, id: "figma-icon-18" },
  ];

  function mail() {
    window.open("mailto:arlindmaliqi28@gmail.com");
  }

  return (
    <Fragment>
      <style>
        {`
          .carousel {
            display: flex;
            animation: slide 20s linear infinite;
          }

          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <h1 className="flex h-full w-full items-center justify-center bg-black text-center text-[35px] font-bold tracking-tight text-white sm:text-[40px] md:text-[70px] lg:text-[70px] xl:text-[90px]">
        <ul
          className={`carousel w-full items-center justify-evenly gap-24 py-8 font-normal tracking-wide sm:gap-28 md:gap-32 lg:gap-48 xl:gap-64`}
        >
          {icons_data.map(({ icon, id }) => (
            <li key={id}>{icon}</li>
          ))}
        </ul>
      </h1>
      <section ref={contactRef} className="h-[400px] w-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-[80px] font-bold">Let’s talk</h1>
          <div>
            <button
              type="button"
              onClick={mail}
              className="group relative z-10 w-full overflow-hidden rounded-full border-2 border-black px-4 py-3 font-mono text-sm tracking-wide text-black transition duration-500 ease-in-out hover:text-white xl:px-6 xl:py-4"
            >
              arlindmaliqi28@gmail.com
              <div
                className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full 
                bg-black transition-all duration-500 group-hover:h-full`}
              />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
