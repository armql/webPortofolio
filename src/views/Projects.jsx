import { useEffect, useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { project_data, project_theme } from "../assets/constants";
import { GithubIcon } from "../components/brands/icons";
import { useTheme } from "../hooks/useTheme";
import useProgress from "../hooks/useProgress";
export default function Projects() {
  const { theme, handleTypeTheme } = useTheme();
  const { projectsRef } = useScroll();
  const [state, setState] = useState({
    identifier: null,
    index: 0,
    length: 0,
    loading: false,
  });
  const { progress } = useProgress(state);

  useEffect(() => {
    if (state.identifier !== null) {
      const project = project_data.find(
        (data) => data.title === state.identifier,
      );
      if (project && project.images) {
        setState((prev) => ({
          ...prev,
          length: project.images.length,
          loading: true,
        }));
      }
    }
  }, [state.identifier]);

  useEffect(() => {
    if (state.identifier !== null) {
      const project = project_data.find(
        (data) => data.title === state.identifier,
      );
      if (project && project.images) {
        setState((prev) => ({
          ...prev,
          length: project.images.length,
          loading: true,
          index: 0,
        }));

        const interval = setInterval(() => {
          setState((prev) => ({
            ...prev,
            index: (prev.index + 1) % prev.length,
          }));
        }, 3100);

        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [state.identifier]);

  console.log(state);

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
            features and i&rsquo;ve tried to make it as user-friendly as
            possible, fast, as much dynamic, use of common and best cases.
          </p>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden py-4 lg:flex-row">
        {project_data.map((data) => (
          <button
            type="button"
            onClick={() => {
              setState((prev) => ({
                ...prev,
                identifier: data.title,
              }));
              handleTypeTheme(data.theme);
            }}
            key={data.title}
            className={`group overflow-hidden transition-all duration-500 ${
              state.identifier === data.title
                ? "h-full w-full lg:w-[730px]"
                : "w-[350px] lg:w-[250px]"
            }`}
          >
            <div
              className={`${project_theme[theme].card_body} relative h-[350px] w-full overflow-hidden rounded-lg p-0.5 transition-all duration-500 ease-in-out sm:h-[350px] md:h-[350px] lg:h-[315px] xl:h-[440px]`}
            >
              {state.identifier !== data.title ? (
                <div className="flex h-[350px] w-full items-center justify-center sm:h-[350px] md:h-[350px] lg:h-[315px] xl:h-[440px]">
                  <p className={project_theme[theme].card_body_title}>
                    {data.title}
                  </p>
                </div>
              ) : (
                <>
                  <div
                    className={`absolute bottom-0 left-0 right-0 top-0 z-10 w-full ${project_theme[theme].loader_color}`}
                    style={{ height: `${progress}%` }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end justify-end  bg-black bg-opacity-10 p-4 delay-500">
                    <a
                      href={data.repo}
                      className="group flex flex-row items-center gap-1 rounded-full bg-white p-2 font-semibold text-black transition hover:bg-zinc-100 active:bg-zinc-200"
                    >
                      <GithubIcon />
                    </a>
                  </div>
                  {data.images !== null ? (
                    <div
                      className={`flex h-full w-full flex-row overflow-hidden`}
                    >
                      <img
                        src={data.images[state.index]}
                        alt=""
                        className="z-10 h-full w-full rounded-md object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full w-full flex-row overflow-hidden">
                      <video
                        src={data.video}
                        autoPlay
                        className="z-20 h-full w-full rounded-md object-cover lg:object-cover"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex flex-col items-start justify-start px-4 py-2">
              <h1 className={project_theme[theme].card_title}>{data.title}</h1>
              <p className={project_theme[theme].card_description}>
                {data.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
