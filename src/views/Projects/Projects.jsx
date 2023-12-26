import React, { Fragment } from "react";
import Header from "../../components/typography/header";
import ProjectCard from "./card/ProjectCard";

export default function Projects() {
  const cardData = [
    {
      img: "Furniture E-Commerce",
      title: "Kartell: A Dynamic Furniture E-Commerce and CMS Website",
      description:
        "Kartell is a website for furniture e-commerce and content management. Users can view products, read news, and edit the website content from different views such as guest view or even admin view.",
      link: "Prese",
      stacks: ["PHP", "Javascript", "MySQL"],
    },
    {
      img: "Food Online Delivery System",
      title: "Prese: A Fast and User-Friendly Food Delivery Web App",
      description:
        "Prese is an app for online food delivery from various restaurants. Users can order, track, and receive food. Prese also has a role-based authentication and authorization system for employees, drivers and managers.",
      link: "Prese",
      stacks: ["ReactJS", "Laravel", "MySQL"],
    },
    {
      img: "Dental Online Reservation System",
      title: "Correla: A Smart and Interactive Dental Clinic Web App",
      description:
        "Correla is a website for a dental clinic. Users can check and book reservations, contact the ai as Customer Support. Correla also has an employee dashboard for complex reservations, registrations, staff management.",
      link: "Prese",
      stacks: ["ReactJS", "Laravel", "MySQL"],
    },
  ];
  return (
    <Fragment>
      <title>Portofolio | Projects</title>
      <div className="relative mt-14 h-full w-screen bg-gradient-to-b from-sky-50 to-sky-200 dark:from-blue-200 dark:to-sky-900">
        <Header extraStyling={"text-center py-6 text-sky-950"}>
          Some good projects that i did alot of work into
        </Header>
        <div className="grid gap-6 px-6 pb-12 pt-4 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardData.map((item) => (
            <ProjectCard
              key={item.title}
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
              stacks={item.stacks}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
