import {useEffect, useState} from "react";
import "./Navbar.css";
import profile from "../assets/images/profile.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate
} from "framer-motion";


function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Curious | Reflective | Determined",
    "Overthinking | Impatient | Self-Critical"
  ];
  const { scrollY } = useScroll();
  useEffect(() => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    const triggerPoint = aboutSection.offsetTop - 100;

    setIsHome(window.scrollY < triggerPoint);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
    useEffect(() => {
      if (!isHome) return;

      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 4000);

      return () => clearInterval(interval);
    }, [isHome]);
  const profileSize = useTransform(
  scrollY,
  [0, 200],
  [150, 85]
);

const navScale = useTransform(
  scrollY,
  [0, 200],
  [1, 0.85]
);

const nameOpacity = useTransform(
  scrollY,
  [50, 200],
  [0, 1]
);
  const smoothProfileSize =
  useSpring(profileSize, {
    stiffness: 120,
    damping: 25
  });
  const smoothNavScale = useSpring(navScale, {
    stiffness: 120,
    damping: 25
  });
  const smoothNameOpacity = useSpring(nameOpacity, {
    stiffness: 120,
    damping: 25
  });
  const nameBlur = useTransform(
  scrollY,
  [50, 200],
  [10, 0]
);
const blurFilter =
  useMotionTemplate`blur(${nameBlur}px)`;
const navX = useTransform(
  scrollY,
  [0, 200],
  [0, 400]
);
const smoothNavX =
  useSpring(navX, {
    stiffness: 120,
    damping: 25
  });
  return (
<nav className="navbar-wrapper">
  
      <motion.div
      className="profile-container"
      >
        <motion.img
      src={profile}
      alt="Profile"
      className="profile-pic"
      style={{
        width: smoothProfileSize,
        height: smoothProfileSize
      }}
      />
      </motion.div>

      <motion.div
      className="name-container"
      style={{
        opacity: smoothNameOpacity,
        filter: blurFilter
      }}
      >
        <h2>Hi, I'm Mrudul Tarade</h2>
      </motion.div>

      <motion.div
      className="navbar-container"
      style={{
        scale: smoothNavScale,
        x: smoothNavX
      }}
      >

          {isHome ? (
              <motion.div
                className="navbar-text-rotate"
                key={textIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                {texts[textIndex]}
              </motion.div>
            ) : (
              <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            )}

      </motion.div>

</nav>
  );
}

export default Navbar;