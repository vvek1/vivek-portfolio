import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Code2, Home, Mail, Sparkles } from 'lucide-react';

function Dock({ onHire }) {
  return (
    <motion.nav
      className="dock-container"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <a
        href="#hero"
        className="dock-item"
        data-tooltip="Home"
      >
        <Home />
      </a>

      <a
        href="#projects"
        className="dock-item"
        data-tooltip="Works"
      >
        <BriefcaseBusiness />
      </a>

      <a
        href="#stack"
        className="dock-item"
        data-tooltip="Skills"
      >
        <Code2 />
      </a>

      <button
        onClick={onHire}
        className="dock-item"
        data-tooltip="Contact"
      >
        <Mail />
      </button>
    </motion.nav>
  );
}

export default Dock;
