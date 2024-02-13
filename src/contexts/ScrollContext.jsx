import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "../utils/debounce";
import PropTypes from "prop-types";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [activeSection, setActiveSection] = useState("Home");

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      Home: homeRef,
      Projects: projectsRef,
      About: aboutRef,
      Contact: contactRef,
    }),
    [homeRef, projectsRef, aboutRef, contactRef],
  );

  useEffect(() => {
    const handleScroll = debounce(() => {
      let currentSection = "";
      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (
          ref.current &&
          ref.current.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  useEffect(() => {
    setActiveLink(activeSection);
  }, [activeSection]);

  return (
    <ScrollContext.Provider
      value={{
        activeLink,
        homeRef,
        projectsRef,
        aboutRef,
        contactRef,
        sectionRefs,
        setActiveLink,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
