import { motion } from "framer-motion";
import {
  SiPython,
  SiDocker,
  SiJavascript,
  SiReact,
  SiStreamlit,
  SiGithub,
  SiPandas,
  SiJupyter,
} from "react-icons/si";

import { VscGithub, VscCode } from "react-icons/vsc";
import "./About.css";
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

          <div className="about-card">

                <div className="tech-stack-section">

                  <h2>Tech Stack</h2>
                  <p className="tech-subtitle">
                    Tools and technologies I work with regularly
                  </p>
                  <div className="hex-grid">

                    <div className="hex-row">
                      <div className="hexagon"><SiPython /></div>
                      <div className="hexagon"><SiDocker /></div>
                      <div className="hexagon"><SiJavascript /></div>
                    </div>

                    <div className="hex-row offset">
                      <div className="hexagon"><SiReact /></div>
                      <div className="hexagon"><SiStreamlit /></div>
                      <div className="hexagon"><SiDocker /></div>
                      <div className="hexagon"><SiGithub /></div>
                    </div>

                    <div className="hex-row">
                      <div className="hexagon"><VscGithub /></div>
                      <div className="hexagon"><SiPandas /></div>
                      <div className="hexagon"><VscCode /></div>
                    </div>

                    <div className="hex-row single">
                      <div className="hexagon"><SiJupyter /></div>
                    </div>
                  </div>

                </div>

                <div className="experience-section">

                  <h2 className="role-title">
                    Data Scientist Intern
                  </h2>

                  <div className="experience-meta">
                    Company Name
                    <br />
                    Jan 2025 - Present
                    <br />
                    Munich, Germany
                  </div>

                  <ul className="experience-list">
                    <li>Built machine learning pipelines.</li>
                    <li>Worked with large-scale datasets.</li>
                    <li>Developed analytics dashboards.</li>
                    <li>Collaborated with cross-functional teams.</li>
                  </ul>

                </div>

          </div>

        </GlassCard>
      </motion.div>
    </section>
  );
}

export default About;