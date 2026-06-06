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
  const { scrollY } = useScroll();
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

    <ul className="nav-links">

      <li><a href="#home">Home</a></li>

      <li><a href="#about">About</a></li>

      <li><a href="#projects">Projects</a></li>

      <li><a href="#contact">Contact</a></li>

    </ul>

  </motion.div>

</nav>
  );
}

export default Navbar;