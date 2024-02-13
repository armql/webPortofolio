import { useContext, useEffect, useState } from "react";
import { useScroll } from "../contexts/ScrollContext";
import { project_data } from "../assets/constants";
import { ThemeContext } from "../contexts/ThemeProvider";
import { GithubIcon } from "../components/brands/icons";

export default function Projects() {
  const { theme, handleTypeTheme } = useContext(ThemeContext);

  const { projectsRef } = useScroll();
  const [active, setActive] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLength, setImagesLength] = useState(0);

  useEffect(() => {
    if (active !== "") {
      const project = project_data.find((data) => data.title === active);
      if (project && project.images) {
        setImagesLength(project.images.length);
        console.log();
      }
    }
  }, [active]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [imagesLength]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imagesLength > 0) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesLength]);

  const typer = {
    base: {
      card_body: `relative h-fit w-full overflow-hidden rounded-lg border-2 bg-zinc-200 transition-all duration-500 ease-in-out border-zinc-300 hover:border-zinc-400`,
      card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-zinc-500`,
      card_title: `text-xl font-medium`,
      card_description: `truncate text-sm text-gray-700 transition-all duration-500 ease-in-out`,
    },
    red: {
      card_body: `relative h-fit w-full overflow-hidden rounded-lg border-2 bg-red-200 transition-all duration-500 ease-in-out border-red-300 hover:border-red-400`,
      card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-red-500`,
      card_title: `text-xl font-medium text-red-950`,
      card_description: `truncate text-sm text-red-700 transition-all duration-500 ease-in-out`,
    },
    sky: {
      card_body: `relative h-fit w-full overflow-hidden rounded-lg border-2 bg-sky-200 transition-all duration-500 ease-in-out border-sky-300 hover:border-sky-400`,
      card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-sky-500`,
      card_title: `text-xl font-medium text-sky-950`,
      card_description: `truncate text-sm text-sky-700 transition-all duration-500 ease-in-out`,
    },
    neutral: {
      card_body: `relative h-fit w-full overflow-hidden rounded-lg border-2 bg-neutral-200 transition-all duration-500 ease-in-out border-neutral-300 hover:border-neutral-400`,
      card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-neutral-500`,
      card_title: `text-xl font-medium text-neutral-950`,
      card_description: `truncate text-sm text-neutral-700 transition-all duration-500 ease-in-out`,
    },
    gradient_pink: {
      card_body: `relative h-fit w-full overflow-hidden rounded-lg border-2 bg-pink-200 transition-all duration-500 ease-in-out border-pink-300 hover:border-pink-400`,
      card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-pink-500`,
      card_title: `text-xl font-medium text-pink-950`,
      card_description: `truncate text-sm text-pink-700 transition-all duration-500 ease-in-out`,
    },
    blue: {
      card_body: `relative h-fit w-full overflow-hidden rounded-lg border-2 bg-blue-200 transition-all duration-500 ease-in-out border-blue-300 hover:border-blue-400`,
      card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-blue-500`,
      card_title: `text-xl font-medium text-blue-950`,
      card_description: `truncate text-sm text-blue-700 transition-all duration-500 ease-in-out`,
    },
  };

  return (
    <section
      ref={projectsRef}
      className="flex h-full w-full flex-col items-center justify-center gap-12 bg-white px-2 py-24 sm:px-4 md:px-6 lg:px-12 xl:px-24"
    >
      <div className="flex w-full items-end justify-between">
        <div className="flex w-full flex-col gap-2 md:w-[400px]">
          <h1 className="text-2xl font-bold md:text-3xl">Projects</h1>
          <p className="text-sm text-zinc-700 sm:text-base md:w-[400px] md:text-base lg:text-lg xl:text-lg">
            I&rsquo;ve been working in multiple projects containing a variety of
            features and ive tried to make it as user-friendly as possible,
            fast, as much dynamic, use of common and best cases.
          </p>
        </div>
      </div>
      <div className="flex h-full w-full  flex-col items-center justify-center gap-4 overflow-hidden py-4 lg:flex-row">
        {project_data.map((data) => (
          <button
            type="button"
            onClick={() => {
              setActive(data.title);
              handleTypeTheme(data.theme);
            }}
            key={data.title}
            className={`group overflow-hidden transition-all duration-500 ${
              active === data.title
                ? "h-full w-full lg:w-[730px]"
                : "w-[350px] lg:w-[250px]"
            }`}
          >
            <div className={typer[theme].card_body}>
              {active !== data.title ? (
                <div className="flex h-[350px] w-full items-center justify-center sm:h-[350px] md:h-[350px] lg:h-[315px] xl:h-[440px]">
                  <p className={typer[theme].card_body_title}>{data.title}</p>
                </div>
              ) : (
                <>
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end justify-end bg-black bg-opacity-10 p-4 delay-500">
                    <a
                      href={data.repo}
                      className="group flex flex-row items-center gap-1 rounded-full bg-white p-2 font-semibold text-black transition hover:bg-zinc-100 active:bg-zinc-200"
                    >
                      <GithubIcon />
                    </a>
                  </div>
                  {data.images !== null ? (
                    <div className="flex h-full w-full flex-row">
                      <img
                        src={data.images[currentImageIndex]}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <video
                      src={data.video}
                      autoPlay
                      className="h-full w-full object-cover lg:object-cover"
                    />
                  )}
                </>
              )}
            </div>
            <div className="flex flex-col items-start justify-start px-4 py-2">
              <h1 className={typer[theme].card_title}>{data.title}</h1>
              <p className={typer[theme].card_description}>
                {data.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
