import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiChevronDoubleDown,
  HiChevronDoubleUp,
} from "react-icons/hi";

import "./ScrollButton.css";

function ScrollButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");

      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;

      setShowTop(window.scrollY >= aboutTop - 150);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const lenis = window.lenis;

    if (!lenis) return;

    if (showTop) {
      lenis.scrollTo("#home", {
        duration: 1.4,
      });
    } else {
      lenis.scrollTo("#about", {
        duration: 0.5,
      });
    }
  };

  return (
    <button
      className="scroll-button"
      onClick={handleClick}
      aria-label={showTop ? "Go to top" : "Scroll down"}
    >
      <motion.div
        className={`scroll-icon ${!showTop ? "float" : ""}`}
        animate={{
          rotate: showTop ? 180 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
      >
        <HiChevronDoubleDown />
      </motion.div>
    </button>
  );
}

export default ScrollButton;