import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

function About() {
  return (
    <section id="about" className="about-section">
            <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8
        }}
        viewport={{
          once: true
        }}
      >
        <GlassCard>

          <h2>About Me</h2>

          <p>
            About content here
          </p>

        </GlassCard>
      </motion.div>
    </section>
  );
}

export default About;