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
    title: "Coding without a hassle",
    description:
      "Being in third year definitely shows how far i've come as i am already working, experienced and have knowledge in multiple programming languages such as starting with Java an into OOP, C#, PHP and mainly JavaScript.",
  },
  {
    title: "What are frameworks?",
    description:
      "As i progressed i have learned a lot that theres much more such as frameworks they were tricky in start, spent more than 150+ hours on online courses, and there i was after that working with frameworks such as Laravel, and ReactJS, now also NextJS.",
  },
  {
    title: "Where i thrive?",
    description:
      "Worked in more than 3+ projects with ReactJS, i have a clear understanding on how routing works backwards & present, professional approach on building a good structure, hooks, complex state management such as with Redux , optimization and more.",
  },
  {
    title: "Why ReactJS & NextJS?",
    description:
      "For React, not just that its the most demanded framework out there, its features make it so perfect for almost all use cases, its fast, stable, easy to optimize, mainly cause it has such a great variety of features that make it even bigger.",
  },
  {
    title: "Can you center a div?",
    description:
      "Even though one of the first things i learnt, when i started it definitely was a mess but as i progressed i learnt soo much mainly because i was doing everything independent and because of that i have a concrete understanding on how CSS works.",
  },
  {
    title: "Styling, UI & UX",
    description:
      "While being independent and working on my own was a great thing for me i still had to follow the certain rules, on how everything must be laid had a general understanding for UI & UX, working with (Figma) and found TailwindCSS, SCSS",
  },
];

export { link_data, project_data, expertise_data };
