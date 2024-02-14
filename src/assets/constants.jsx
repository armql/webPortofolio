import bowery_1 from "./card/intro-bowery.webp";
import bowery_2 from "./card/mid-1-bowery.webp";
import bowery_3 from "./card/mid-2-bowery.webp";
import bowery_4 from "./card/outro-bowery.webp";

import correla_1 from "./card/intro-correla.webp";
import correla_2 from "./card/mid-correla.webp";
import correla_3 from "./card/outro-correla.webp";

import prese_1 from "./card/intro-prese.webp";
import prese_2 from "./card/mid-prese.webp";
import prese_3 from "./card/outro-prese.webp";

import kartell_1 from "./card/kartell.webp";
import trica_cvid from "./card/trica.mp4";

const link_data = [
  {
    name: "Home",
    to: "home",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

const project_data = [
  {
    title: "Prese",
    images: [prese_1, prese_2, prese_3],
    repo: "https://github.com/armql/Prese",
    description: "Food online delivery web-app",
    theme: "red",
  },
  {
    title: "Correla",
    images: [correla_1, correla_2, correla_3],
    repo: "https://github.com/armql/Correla",
    description: "Dental clinic reservation web-app",
    theme: "sky",
  },
  {
    title: "Trica",
    video: trica_cvid,
    images: null,
    repo: "https://github.com/armql/Trica",
    description: "E-Commerce sportswear Mobile UI",
    theme: "neutral",
  },
  {
    title: "Kartell",
    images: [kartell_1],
    repo: "https://github.com/armql/WebProject",
    description: "E-Commerce Furniture UI",
    theme: "gradient_pink",
  },
  {
    title: "Bowery",
    images: [bowery_1, bowery_2, bowery_3, bowery_4],
    repo: "https://github.com/armql/Copa",
    description: "Revamp of a mainly Wordpress Web App",
    theme: "blue",
  },
];

const expertise_data = [
  {
    title: "Fundamentals",
    description:
      "I have a good understanding of core programming principles, including data structures, object-oriented programming (OOP)... Good understanding of databases & designs. I can easily adopt to work both small and large workspaces effectively. Experienced front-end, back-end, or full-stack.",
  },
  {
    title: "Progression",
    description:
      "I began coding with Java, learning the logic fundamentals. I then progressed to front-end and back-end development with PHP & JavaScript. I have experience working in teams using tools like Trello and ClickUp. I also have a good understanding of UI & UX essentials with Figma.",
  },
  {
    title: "Progression in depth",
    description:
      "I have completed numerous exercises in Java, developed my first project with HTML & CSS, and worked on a large-scale project with PHP, JavaScript, and a MySQL. I have also developed two full-scale web apps with ReactJS and Laravel, both utilizing MySQL.",
  },
  {
    title: "Independent work",
    description: (
      <p>
        While i&rsquo;ve been getting a good grasp of knowledge in uni theres
        much more to Web Development and i went out and learnt courses over{" "}
        <a
          href="https://www.udemy.com/course/the-complete-javascript-course/"
          className="font-medium hover:underline"
        >
          Complete JavaScript,{" "}
        </a>
        <a
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          className="font-medium hover:underline"
        >
          Complete ReactJS
        </a>
        ,{" "}
        <a
          href="https://www.udemy.com/course/advanced-react/"
          className="font-medium hover:underline"
        >
          Advanced React (Design System, Design Patterns, Performance),{" "}
        </a>
        <a
          href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
          className="font-medium hover:underline"
        >
          Complete NextJS
        </a>
        ...
      </p>
    ),
  },
  {
    title: "Crucial knowledge",
    description:
      "I have challenged myself in many situations where that has helped me progress and better find of bugs source in general, working with developer tools to achieve better SEO, accessibility, performance, handling requests, assets optimization...",
  },
  {
    title: "Styling, UI & UX",
    description:
      "I have concrete knowledge of CSS therefore anything CSS related i can learn in a short-time, i finished a course on UI & UX essentials too and i have a good understanding of Figma, working with TailwindCSS has also been like a walk in the park ever since.",
  },
];

const project_theme = {
  base: {
    card_body: `bg-zinc-200`,
    loader_color: "bg-zinc-400",
    card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-zinc-500`,
    card_title: `text-xl font-medium`,
    card_description: `truncate text-sm text-gray-700 transition-all duration-500 ease-in-out`,
  },
  red: {
    card_body: `bg-red-200`,
    loader_color: "bg-red-400",
    card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-red-500`,
    card_title: `text-xl font-medium text-red-950`,
    card_description: `truncate text-sm text-red-700 transition-all duration-500 ease-in-out`,
  },
  sky: {
    card_body: `bg-sky-200`,
    loader_color: "bg-sky-400",
    card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-sky-500`,
    card_title: `text-xl font-medium text-sky-950`,
    card_description: `truncate text-sm text-sky-700 transition-all duration-500 ease-in-out`,
  },
  neutral: {
    card_body: `bg-neutral-200`,
    loader_color: "bg-neutral-400",
    card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-neutral-500`,
    card_title: `text-xl font-medium text-neutral-950`,
    card_description: `truncate text-sm text-neutral-700 transition-all duration-500 ease-in-out`,
  },
  gradient_pink: {
    card_body: `bg-pink-200`,
    loader_color: "bg-pink-400",
    card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-pink-500`,
    card_title: `text-xl font-medium text-pink-950`,
    card_description: `truncate text-sm text-pink-700 transition-all duration-500 ease-in-out`,
  },
  blue: {
    card_body: `bg-blue-200`,
    loader_color: "bg-blue-400",
    card_body_title: `-rotate-90 transition-all duration-500 ease-in-out text-7xl font-extrabold text-blue-500`,
    card_title: `text-xl font-medium text-blue-950`,
    card_description: `truncate text-sm text-blue-700 transition-all duration-500 ease-in-out`,
  },
};

export { link_data, project_data, expertise_data, project_theme };
