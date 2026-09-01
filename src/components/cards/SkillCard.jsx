import { motion } from 'framer-motion';

const ICONS = {
  python:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',

  pytorch:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',

  pandas:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',

  react:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',

  mongodb:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',

  github:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
};

function SkillCard({ item, index, onClick }) {
  const iconSrc = ICONS[item.icon];

  return (
    <motion.button
      type="button"
      className="interactive-stack-card interactive-glass-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.99,
      }}
      onClick={onClick}
      aria-label={`View details for ${item.name}`}
    >
      <span className="stack-number">
        {item.number}
      </span>

      <div className="stack-icon">
        {iconSrc && (
          <img
            src={iconSrc}
            alt=""
            aria-hidden="true"
          />
        )}
      </div>

      <div className="stack-card-content">
        <h3>{item.name}</h3>

        <p className="stack-short">
          {item.short}
        </p>
      </div>

      <div className="stack-arrow">
        ↗
      </div>
    </motion.button>
  );
}

export default SkillCard;