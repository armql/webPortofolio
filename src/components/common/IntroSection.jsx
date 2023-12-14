import React, { Fragment } from "react";
import Header from "../typography/header";
import Paragraph from "../typography/Paragraph";

export default function IntroSection() {
  return (
    <Fragment>
      <div className="flex flex-row bg-sky-900 dark:bg-sky-900">
        <Header
          extraStyling={
            "sm:py-12 py-4 text-sky-200 px-2 xl:text-4xl lg:text-4xl sm:text-3xl text-2xl font-bold dark:text-white"
          }
        >
          About Me
        </Header>
      </div>
      <Paragraph
        extraStyling={
          "font-light sm:text-xl text-sm px-8 py-12 dark:text-sky-600"
        }
      >
        Hi, I’m Arlind Maliqi, a 21-year-old web developer from Kosovo. I’m
        currently a student at UBT - University of Business and Technology,
        where I’m learning how to build fast, user-friendly, and interactive web
        apps. I have experience with PHP, Javascript, MySQL, ReactJS, and
        Laravel, and I love exploring new technologies and tools. Some of my
        projects include Kartell, a dynamic furniture e-commerce and CMS
        website; Prese, a fast and user-friendly food delivery web app; and
        Correla, a smart and interactive dental clinic web app with AI support.
        I enjoy web development because it allows me to express my creativity,
        solve problems, and make a positive impact on people’s lives. My goal is
        to become a full-stack web developer and create web apps that are
        accessible, responsive, and secure.
      </Paragraph>
    </Fragment>
  );
}
