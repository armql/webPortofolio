import React, { Fragment, Suspense, lazy } from "react";
import Header from "../../components/typography/Header";
import Paragraph from "../../components/typography/Paragraph";
import Technology from "../../components/common/Technology";
import IntroSection from "../../components/common/IntroSection";
const LazyAvatar = lazy(() => import("../../components/common/Avatar"));

export default function About() {
  const technologies = [
    { backgroundColor: "red-400", textColor: "red-950", title: "Java" },
    { backgroundColor: "amber-300", textColor: "amber-950", title: "JS" },
    { backgroundColor: "sky-400", textColor: "sky-950", title: "React" },
    { backgroundColor: "purple-500", textColor: "purple-950", title: "PHP" },
    { backgroundColor: "rose-500", textColor: "rose-950", title: "Laravel" },
    { backgroundColor: "blue-300", textColor: "blue-950", title: "MySQL" },
    {
      backgroundColor: "emerald-300",
      textColor: "emerald-950",
      title: "MSSQL",
    },
    { backgroundColor: "teal-300", textColor: "teal-950", title: "NextJS" },
  ];

  return (
    <Fragment>
      <title>Portofolio | About me</title>
      <div className="relative mt-14 h-full w-screen bg-gradient-to-b from-sky-50 to-sky-200 dark:from-blue-200 dark:to-sky-900">
        <div className="h-full w-full px-16 py-12">
          <div className="h-full overflow-y-hidden rounded-sm bg-white dark:bg-sky-950">
            <IntroSection />
            <div className="relative flex h-full w-full flex-col items-center justify-between px-12 py-6 lg:flex-row">
              <div className="flex flex-col gap-2">
                <Header extraStyling={"font-semibold text-3xl dark:text-white"}>
                  Technologies that i have worked with
                </Header>
                <Suspense
                  fallback={
                    <div className="h-full w-full animate-pulse bg-zinc-200"></div>
                  }
                >
                  <div className="grid grid-cols-1 gap-2 px-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((tech, index) => (
                      <Technology
                        key={index}
                        backgroundColor={tech.backgroundColor}
                        textColor={tech.textColor}
                        title={tech.title}
                      />
                    ))}
                  </div>
                </Suspense>
              </div>
              <Suspense
                fallback={
                  <div className="h-96 w-96 animate-pulse rounded-full bg-zinc-400"></div>
                }
              >
                <LazyAvatar />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
