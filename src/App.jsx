import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles, Sun, Moon } from 'lucide-react';

import { PROJECTS, EXPERIENCE, STACK } from './data/portfolio';
import SplashScreen from './components/common/SplashScreen';
import Dock from './components/common/Dock';
import HireModal from './components/common/HireModal';
import ProjectCard from './components/cards/ProjectCard';
import ExperienceCard from './components/cards/ExperienceCard';
import SkillCard from './components/cards/SkillCard';
import './styles/App.css';


function App() {
  const [showSplash, setShowSplash] =
    useState(true);

  const [hireOpen, setHireOpen] =
    useState(false);
    
  const [selectedStack, setSelectedStack] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  

  const [isDayMode, setIsDayMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'day';
  });

  useEffect(() => {
    localStorage.setItem(
      'portfolio-theme',
      isDayMode ? 'day' : 'night'
    );
  }, [isDayMode]);

  return (
    <div
      className={`app-container ${
        isDayMode ? 'day-mode' : 'night-mode'
      }`}
    >

      <AnimatePresence>
        {showSplash && (
          <SplashScreen
            onComplete={() =>
              setShowSplash(false)
            }
          />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <div className="theme-toggle">
            <button
              type="button"
              onClick={() => setIsDayMode((prev) => !prev)}
              aria-label={
                isDayMode
                  ? 'Switch to night mode'
                  : 'Switch to day mode'
              }
              title={
                isDayMode
                  ? 'Switch to Night Mode'
                  : 'Switch to Day Mode'
              }
            >
              {isDayMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <motion.button
            type="button"
            className="work-status"
            onClick={() => setHireOpen(true)}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            aria-label="Open contact details"
          >
            <span />
            OPEN TO WORK
          </motion.button>
          <main>

            {/* =========================
                HERO
            ========================== */}

            <section
              className="hero-section"
              id="hero"
            >

              <div className="hero-grid">

                {/* IMAGE + SOCIALS */}

                <motion.div
                  className="hero-visual"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <div className="photo-frame">
                    <img
                      src="/profile.png"
                      alt="Vivek Anand"
                    />

                    <span className="photo-note">
                      HI!
                    </span>
                  </div>

                </motion.div>


                {/* TEXT CONTENT */}

                <motion.div
                  className="hero-content"
                  initial={{
                    opacity: 0,
                    x: 35,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                >
                  <h1 className="hero-name">
                      <span className="hero-first-name">VIVEK</span>
                      <span className="hero-last-name">ANAND</span>
                  </h1>

                  <p className="eyebrow">
                    AI/ML ENGINEER
                    <i>•</i>
                    DATA SCIENCE
                    <i>•</i>
                    FULL STACK
                  </p>


                  <p className="hero-copy">
                    Computer Science Engineering
                    student specializing in{' '}
                    <strong>AI/ML</strong>,{' '}
                    <strong>Data Science</strong>{' '}
                    and{' '}
                    <strong>
                      Full Stack Development
                    </strong>
                    . I build practical,
                    data-driven and user-focused
                    digital products.
                  </p>

                  {/* SOCIAL BUTTONS */}

                  <div className="hero-socials">

                    {/* GitHub */}
                    <a
                      href="https://github.com/vvek1"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="hero-social-icon"
                    >
                      <svg
                        viewBox="0 0 98 96"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        />
                      </svg>
                    </a>


                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/vvek1/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="hero-social-icon"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect
                          x="2"
                          y="9"
                          width="4"
                          height="12"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                        />
                      </svg>
                    </a>


                    {/* Email */}
                    <a
                      href="mailto:vivekand786@gmail.com"
                      aria-label="Email"
                      className="hero-social-icon"
                    >
                      <Mail />
                    </a>


                    {/* Phone */}
                    <a
                      href="tel:+918709960417"
                      aria-label="Phone"
                      className="hero-social-icon"
                    >
                      <Phone />
                    </a>


                    {/* Resume */}
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="resume-link"
                    >
                      RESUME
                      <ArrowUpRight size={16} />
                    </a>

                  </div>

                  <div className="hero-bottom">
                    <span>
                      <MapPin size={14} />
                      Indore, MP
                    </span>

                    <span>•</span>

                    <span>
                      B.Tech CSE (AI/ML)
                    </span>

                    <span>•</span>

                    <span className="available">
                      Available for opportunities
                    </span>
                  </div>

                </motion.div>

              </div>
            </section>

            {/* =========================
                PROJECTS
            ========================== */}

            <section
              className="works-section"
              id="projects"
            >
              <div className="section-intro">

                <div>
                  <span className="eyebrow">
                    SELECTED WORKS
                  </span>

                  <h2>
                    Things I&apos;ve{' '}
                    <em>built.</em>
                  </h2>
                </div>

                <p>
                  A selection of projects where
                  I&apos;ve combined software
                  development, data and machine
                  learning to solve practical
                  problems.
                </p>

              </div>

              <div className="projects-list">
                {PROJECTS.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
              <AnimatePresence>
                {selectedProject && (
                  <motion.div
                    className="detail-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                  >

                    <motion.div
                      className="detail-modal project-detail-modal"
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                        y: 35,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.92,
                        y: 35,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >

                      {/* HEADER */}
                      <div className="detail-modal-header">

                        <div>

                          <span className="detail-modal-number">
                            {selectedProject.number}
                          </span>

                          <span className="detail-modal-type">
                            {selectedProject.type}
                          </span>

                          <h3>
                            {selectedProject.title}
                          </h3>

                          <span className="detail-modal-date">
                            {selectedProject.date}
                          </span>

                        </div>

                        <button
                          type="button"
                          className="detail-modal-close"
                          onClick={() =>
                            setSelectedProject(null)
                          }
                          aria-label="Close project details"
                        >
                          ×
                        </button>

                      </div>


                      {/* OVERVIEW */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          OVERVIEW
                        </span>

                        <p>
                          {selectedProject.summary}
                        </p>

                      </div>


                      {/* THE IDEA */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          01 / THE IDEA
                        </span>

                        <p>
                          {selectedProject.idea}
                        </p>

                      </div>


                      {/* SYSTEM */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          02 / SYSTEM
                        </span>

                        <p>
                          {selectedProject.system}
                        </p>

                        {selectedProject.flow?.length > 0 && (
                          <div className="detail-project-flow">

                            {selectedProject.flow.map(
                              (step, index) => (
                                <span
                                  key={step}
                                  className="detail-flow-item"
                                >
                                  <b>{step}</b>

                                  {index <
                                    selectedProject.flow.length - 1 && (
                                    <i>→</i>
                                  )}
                                </span>
                              )
                            )}

                          </div>
                        )}

                      </div>


                      {/* HIGHLIGHTS */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          03 / HIGHLIGHTS
                        </span>

                        <div className="detail-highlight-list">

                          {selectedProject.highlights.map(
                            (item) => (
                              <div
                                key={item}
                                className="detail-highlight"
                              >
                                <span>+</span>
                                {item}
                              </div>
                            )
                          )}

                        </div>

                      </div>


                      {/* TECHNOLOGIES */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          04 / TECHNOLOGIES
                        </span>

                        <div className="detail-tech-list">

                          {selectedProject.stack.map(
                            (tag) => (
                              <span key={tag}>
                                {tag}
                              </span>
                            )
                          )}

                        </div>

                      </div>


                      {/* GITHUB */}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="detail-modal-link"
                          onClick={(e) =>
                            e.stopPropagation()
                          }
                        >
                          VIEW ON GITHUB
                          <ArrowUpRight size={15} />
                        </a>
                      )}

                    </motion.div>

                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  className="detail-modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    className="detail-modal"
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.92,
                      y: 30,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >

                    <div className="detail-modal-header">

                      <div>
                        <span className="detail-modal-number">
                          {selectedProject.number}
                        </span>

                        <span className="detail-modal-type">
                          {selectedProject.type}
                        </span>

                        <h3>
                          {selectedProject.title}
                        </h3>

                        <span className="detail-modal-date">
                          {selectedProject.date}
                        </span>
                      </div>

                      <button
                        className="detail-modal-close"
                        onClick={() => setSelectedProject(null)}
                      >
                        ×
                      </button>

                    </div>


                    <div className="detail-modal-section">
                      <span className="detail-modal-label">
                        OVERVIEW
                      </span>

                      <p>
                        {selectedProject.summary}
                      </p>
                    </div>


                    <div className="detail-modal-section">
                      <span className="detail-modal-label">
                        THE IDEA
                      </span>

                      <p>
                        {selectedProject.idea}
                      </p>
                    </div>


                    <div className="detail-modal-section">
                      <span className="detail-modal-label">
                        SYSTEM
                      </span>

                      <p>
                        {selectedProject.system}
                      </p>
                    </div>


                    <div className="detail-modal-section">
                      <span className="detail-modal-label">
                        HIGHLIGHTS
                      </span>

                      <div className="detail-highlight-list">
                        {selectedProject.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="detail-highlight"
                          >
                            <span>↗</span>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>


                    <div className="detail-modal-section">
                      <span className="detail-modal-label">
                        STACK
                      </span>

                      <div className="detail-tech-list">
                        {selectedProject.stack.map((tech) => (
                          <span key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>


                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="detail-modal-link"
                      >
                        VIEW ON GITHUB ↗
                      </a>
                    )}

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>


            {/* =========================
                EXPERIENCE
            ========================== */}

            <section
              className="experience-section"
              id="experience"
            >
              <div className="section-intro">

                <div>
                  <span className="eyebrow">
                    EXPERIENCE & EDUCATION
                  </span>

                  <h2>
                    Where I&apos;ve{' '}
                    <em>learned.</em>
                  </h2>
                </div>

                <p>
                  Internships, certifications
                  and academic learning that
                  have shaped my technical
                  foundation.
                </p>

              </div>

              <div className="experience-grid">
                {EXPERIENCE.map((item) => (
                  <ExperienceCard
                    key={item.number}
                    item={item}
                    onClick={() => setSelectedExperience(item)}
                  />
                ))}
              </div>
              <AnimatePresence>
                {selectedExperience && (
                  <motion.div
                    className="detail-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedExperience(null)}
                  >
                    <motion.div
                      className="detail-modal experience-detail-modal"
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.92,
                        y: 30,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >

                      {/* HEADER */}
                      <div className="detail-modal-header">

                        <div>

                          <span className="detail-modal-number">
                            {selectedExperience.number}
                          </span>

                          <span className="detail-modal-type">
                            {selectedExperience.meta}
                          </span>

                          <h3>
                            {selectedExperience.title}
                          </h3>

                          <span className="detail-modal-date">
                            {selectedExperience.date}
                          </span>

                        </div>

                        <button
                          type="button"
                          className="detail-modal-close"
                          onClick={() =>
                            setSelectedExperience(null)
                          }
                          aria-label="Close details"
                        >
                          ×
                        </button>

                      </div>


                      {/* OVERVIEW */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          OVERVIEW
                        </span>

                        <p>
                          {selectedExperience.description}
                        </p>

                      </div>


                      {/* WHAT I WORKED ON */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          WHAT I WORKED ON
                        </span>

                        <p>
                          {selectedExperience.details}
                        </p>

                      </div>


                      {/* TOOLS */}
                      <div className="detail-modal-section">

                        <span className="detail-modal-label">
                          TOOLS / TECHNOLOGIES
                        </span>

                        <div className="detail-tech-list">

                          {selectedExperience.tools.map(
                            (tool) => (
                              <span key={tool}>
                                {tool}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>


{/* =========================
    STACK
========================= */}

<section
  className="stack-section"
  id="stack"
>
  <div className="stack-heading">
    <div>
      <span className="eyebrow">
        SKILLS
      </span>

      <h2>
        MY <em>STACK</em>
      </h2>

      <p className="stack-intro">
        Technologies and tools I use to build{" "}
        <strong>modern</strong>, scalable and{" "}
        <strong>intelligent</strong> products.
      </p>
    </div>

    <Sparkles size={24} />
  </div>

  <div className="interactive-stack-grid">
    {STACK.map((item, index) => (
      <SkillCard
        key={item.number}
        item={item}
        index={index}
        onClick={() => setSelectedStack(item)}
      />
    ))}
  </div>

<AnimatePresence>
  {selectedStack && (
    <motion.div
      className="stack-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedStack(null)}
    >
      <motion.div
        className="stack-modal"
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 30,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="stack-modal-header">
          <div className="stack-modal-icon">
            {selectedStack.icon}
          </div>

          <div>
            <span className="stack-modal-number">
              {selectedStack.number}
            </span>

            <h3>
              {selectedStack.name}
            </h3>
          </div>

          <button
            className="stack-modal-close"
            onClick={() => setSelectedStack(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* DESCRIPTION */}
        <div className="stack-modal-section">
          <span className="stack-modal-label">
            OVERVIEW
          </span>

          <p>
            {selectedStack.description}
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div className="stack-modal-section">
          <span className="stack-modal-label">
            TECHNOLOGIES
          </span>

          <div className="stack-modal-tech">
            {selectedStack.technologies.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        {/* WHAT I USE IT FOR */}
        <div className="stack-modal-section">
          <span className="stack-modal-label">
            WHAT I USE IT FOR
          </span>

          <p>
            {selectedStack.use}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
</section>


            {/* =========================
                CONTACT
            ========================== */}

            <section
              className="contact-section"
              id="contact"
            >
              <div className="contact-top">

                <div>
                  <span className="eyebrow">
                   LET&apos;S CONNECT
                  </span>

                  <h2>
                    What could we
                    <br />
                    <em>
                      build together?
                    </em>
                  </h2>

                  <p>
                    That&apos;s it, you&apos;ve
                    reached the end of my
                    portfolio.{' '}
                    <strong>
                      Thanks for visiting.
                    </strong>
                    <br />
                    If you enjoyed the journey,
                    let&apos;s make the sequel
                    together.
                  </p>

                  <p className="education-line">
                    B.Tech CSE (AI/ML)
                    {' • '}
                    Indore, MP
                    {' • '}
                    Open to Opportunities
                  </p>
                </div>


                <div className="contact-links">

                  <a
                    href="https://www.linkedin.com/in/vvek1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                    <ArrowUpRight />
                  </a>

                  <a
                    href="https://github.com/vvek1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <ArrowUpRight />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                    <ArrowUpRight />
                  </a>

                </div>

              </div>

              <div className="contact-action">

                <a href="mailto:vivekand786@gmail.com">
                  GET IN TOUCH
                  <ArrowUpRight />
                </a>
                <span>
                  vivekand786@gmail.com
                </span>
              </div>

              <div className="giant-name">
                VIVEK
                <br />
                <em>ANAND.</em>
              </div>

              <div className="footer-line">
                <span>
                  © • 2026 EDITION
                </span>
              </div>

            </section>

          </main>

          <Dock
            onHire={() =>
              setHireOpen(true)
            }
          />

          <HireModal
            open={hireOpen}
            onClose={() =>
              setHireOpen(false)
            }
          />

        </>
      )}

    </div>
  );
}

export default App;
