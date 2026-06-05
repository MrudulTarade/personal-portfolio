import {
  motion,
  useMotionTemplate
} from "framer-motion";
import "./GradientBackground.css";

function GradientBackground(colorA, colorB) {
  const background = useMotionTemplate`
linear-gradient(
135deg,
${colorA},
${colorB}
)
`;
  return (
    <motion.div
          className="gradient-bg"
           style={{
           background
       }}
    >
      <motion.div
 className="orb orb1"

 animate={{
   x: [0, 100, 0],
   y: [0, -50, 0]
 }}

 transition={{
   duration: 15,
   repeat: Infinity,
   ease: "easeInOut"
 }}
/>
      <motion.div
 className="orb orb2"

 animate={{
   x: [0, -120, 0],
   y: [0, 80, 0]
 }}

 transition={{
   duration: 20,
   repeat: Infinity,
   ease: "easeInOut"
 }}
/>
      <motion.div
 className="orb orb3"

 animate={{
   x: [0, 60, 0],
   y: [0, -120, 0]
 }}

 transition={{
   duration: 18,
   repeat: Infinity,
   ease: "easeInOut"
 }}
/>
    </motion.div>
  );
}

export default GradientBackground;