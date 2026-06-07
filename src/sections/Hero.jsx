import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import "./Hero.css";

function Hero() {
  return (
    
    <section id="home" className="hero-section">
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
        <GlassCard className="hero-card">
          <div className="hero-content">
                <span className="hero-greeting">Hello,</span>
                <h1 className="hero-title">I'm Mrudul Tarade!!!</h1>

                <p className="hero-description">
                  I am a Coder for fun, who plays around a lot of Data and AI's closest friend.<br/><br/>
                  PS: I don't get too collaborative with AI agents.<br/><br/>
                  Anyways, I hope you find something useful here!
                </p>
          </div>
        </GlassCard>
      </motion.div>
    
    </section>
  );
}

export default Hero;