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
  SiPostman,
  SiGit
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
                      <div className="hexagon"><SiPostman /></div>
                      <div className="hexagon"><SiGithub /></div>
                    </div>

                    <div className="hex-row">
                      <div className="hexagon"><SiGit /></div>
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
                    IoT Intern
                  </h2>

                  <div className="experience-meta">
                    KOHLER.CO
                    <br />
                    Sept 2024 - Sept 2025
                    <br />
                    Pune, INDIA
                  </div>

                  <ul className="experience-list">
                    <li>Black Box testing of Web Application and Android application.</li>
                    <li>Checked API responses of Web Application using Postman.</li>
                    <li>Full end-to-end Test Case documentation of Android application.</li>
                    <li>Exposed to tools: Azure DevOps, Postman.</li>
                  </ul>

                </div>

          </div>

        </GlassCard>
      </motion.div>
    </section>
  );
}

export default About;