import { useState, useEffect, useRef } from "react";
import { link_data } from "../../assets/constants";
import { useScroll } from "../../hooks/useScroll";

export default function Navbar() {
  const { activeLink, setActiveLink, sectionRefs } = useScroll();
  const [highlightStyle, setHighlightStyle] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    const activeButton = navRef.current.querySelector(
      `button[data-name="${activeLink}"]`,
    );
    if (activeButton) {
      setHighlightStyle({
        left: `${activeButton.offsetLeft}px`,
        width: `${activeButton.offsetWidth}px`,
      });
    }
  }, [activeLink]);

  const moveHighlight = (e) => {
    setHighlightStyle({
      left: `${e.target.offsetLeft}px`,
      width: `${e.target.offsetWidth}px`,
    });
  };

  const scrollToSection = (sectionName) => {
    const sectionRef = sectionRefs[sectionName];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-20 flex items-center justify-center p-4"
      ref={navRef}
    >
      <div className="relative h-[50px] w-[500px] overflow-hidden rounded-full bg-black">
        <ul className="relative flex h-full w-full flex-row items-center justify-center gap-1 px-1.5 py-1.5">
          {link_data.map((link) => (
            <button
              type="button"
              key={link.name}
              data-name={link.name}
              onClick={(e) => {
                setActiveLink(link.name);
                moveHighlight(e);
                scrollToSection(link.name);
              }}
              className={`text-medium relative z-10 flex h-full w-full items-center justify-center rounded-full text-sm transition duration-300 ${
                activeLink === link.name
                  ? "font-semibold text-black"
                  : "font-medium text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
          <div
            className="absolute rounded-full bg-white py-5 transition-all duration-300"
            style={highlightStyle}
          ></div>
        </ul>
      </div>
    </nav>
  );
}
