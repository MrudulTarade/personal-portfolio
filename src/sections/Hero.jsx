import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

function Hero() {
  return (
    
    <section className="hero">
              <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1
        }}
        >
        <GlassCard>
                <h1>Hello, I'm Your Name</h1>

                <p>
                  Frontend Developer &
                  Creative Builder
                </p>
              </GlassCard>
        </motion.div>
     
    </section>
  );
}

export default Hero;