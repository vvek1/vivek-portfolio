import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      className="project-row interactive-glass-card"
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,
      }}
      whileHover={{
        y: -3,
      }}
    >
      <button
        type="button"
        className="project-summary"
        onClick={onClick}
        aria-label={`View details for ${project.title}`}
      >
        {/* NUMBER */}
        <span className="project-number">
          {project.number}
        </span>

        {/* MAIN CONTENT */}
        <span className="project-main">

          {/* DATE + TYPE */}
          <span className="project-meta">
            <b>{project.date}</b>
            <i>•</i>
            {project.type}
          </span>

          {/* TITLE */}
          <strong>
            {project.title}
          </strong>

          {/* CLICK HINT */}
          <span className="project-short">
            VIEW PROJECT DETAILS
          </span>

        </span>

        {/* ARROW */}
        <span className="expand-button">
          <ArrowUpRight size={18} />
        </span>
      </button>
    </motion.article>
  );
}

export default ProjectCard;