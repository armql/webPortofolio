import { Fragment } from "react";
import Home from "./views/Home";
import Navbar from "./views/core/Navbar";
import Projects from "./views/Projects";
import Expertise from "./views/Expertise";
import Footer from "./views/core/Footer";
import Contact from "./views/Contact";

export default function Layout() {
  return (
    <Fragment>
      <Navbar />
      <main className="relative">
        <Home />
        <Projects />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}
