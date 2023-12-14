import React, { Fragment, Suspense, lazy, useState } from "react";
import Header from "../../components/typography/header";
import useOnLoad from "../../hooks/useOnLoad";
const HeroHeader = lazy(() => import("../../components/common/HeroHeader"));
const Background = lazy(() => import("../../components/common/Background"));

export default function Home() {
  const { isOnLoad } = useOnLoad();

  return (
    <Fragment>
      <title>Portofolio | Home</title>
      <div className="relative flex h-screen w-screen flex-col items-center from-transparent to-sky-950 dark:bg-gradient-to-b">
        <Suspense
          fallback={
            <div className="bg-gradient-to-b from-sky-50 to-sky-200 dark:from-blue-200 dark:to-sky-900"></div>
          }
        >
          <Background isOnLoad={isOnLoad} />
        </Suspense>
        <Suspense fallback={<></>}>
          <HeroHeader isOnLoad={isOnLoad} />
        </Suspense>
      </div>
    </Fragment>
  );
}
