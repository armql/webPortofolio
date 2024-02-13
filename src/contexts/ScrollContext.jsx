import { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext();
export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [activeSection, setActiveSection] = useState("Home");

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    Home: homeRef,
    Projects: projectsRef,
    About: aboutRef,
    Contact: contactRef,
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

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
