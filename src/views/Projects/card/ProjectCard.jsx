import React from "react";
import Header from "../../../components/typography/header";
import Paragraph from "../../../components/typography/Paragraph";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, stacks, link }) => {
  return (
    <div className="h-[50vh] w-full rounded-md border-sky-200 bg-white bg-opacity-70 shadow-sm backdrop-blur-md dark:bg-opacity-100 dark:backdrop-blur-none">
      <div className="h-60 w-full rounded-t-sm bg-sky-400 dark:bg-sky-900"></div>
      <Header
        extraStyling={
          "text-2xl text-center py-2 font-semibold text-sky-950 dark:text-black"
        }
      >
        {title}
      </Header>
      <Paragraph
        extraStyling={
          "font-light text-center text-sm px-2 overflow-y-auto dark:text-zinc-700"
        }
      >
        {description}
      </Paragraph>
      <div className="flex flex-row justify-center gap-4 px-4 py-4 text-center">
        {stacks.map((stacks) => (
          <div
            key={stacks}
            className="rounded-sm bg-zinc-200 p-0.5 text-xs font-light text-black"
          >
            {stacks}
          </div>
        ))}
      </div>
      <div className="absolute -bottom-2 flex w-full items-center justify-center pt-0.5">
        <Link
          className="rounded-sm bg-black px-4 text-center text-white hover:bg-opacity-80"
          to="#"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
