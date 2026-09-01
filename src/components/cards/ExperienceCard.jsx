import { motion } from 'framer-motion';

function ExperienceCard({ item, onClick }) {
  return (
    <motion.article
      className="experience-card interactive-glass-card"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      <button
        type="button"
        className="experience-summary"
        onClick={onClick}
      >
        <span className="card-number">
          {item.number}
        </span>

        <span className="experience-arrow">
          ↗
        </span>

        <span className="card-meta">
          {item.meta}
        </span>

        <h3>
          {item.title}
        </h3>

        <span className="card-date">
          {item.date}
        </span>

        <span className="experience-click">
          VIEW DETAILS
        </span>
      </button>
    </motion.article>
  );
}

export default ExperienceCard;