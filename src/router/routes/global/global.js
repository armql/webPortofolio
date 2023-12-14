import { lazy } from "react";

import LazyLoader from "../loader/LazyLoader";
const NotFound = lazy(() => import("../../../layouts/NotFound/NotFound"));
const Home = lazy(() => import("../../../views/Home/Home"));
const About = lazy(() => import("../../../views/About/About"));
const Projects = lazy(() => import("../../../views/Projects/Projects"));
const GuestLayout = lazy(
  () => import("../../../layouts/GuestLayout/GuestLayout"),
);
export { NotFound, LazyLoader, GuestLayout, About, Home, Projects };
