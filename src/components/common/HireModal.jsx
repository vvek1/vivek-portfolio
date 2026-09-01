import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Mail, Phone, X } from 'lucide-react';

function HireModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="hire-modal"
            initial={{
              y: 30,
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: 30,
              opacity: 0,
              scale: 0.96,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={onClose}
            >
              <X />
            </button>

            <span className="eyebrow">
              LET&apos;S CONNECT
            </span>

            <h2>
              Have an idea?
              <br />
              <em>Let&apos;s build it.</em>
            </h2>

            <p>
              Open to internships, full-time opportunities
              and interesting collaborations across AI/ML,
              Data Science and Full Stack Development.
            </p>

            <div className="modal-links">
              <a href="mailto:vivekand786@gmail.com">
                <Mail />
                vivekand786@gmail.com
              </a>

              <a
                href="tel:+918709960417"
              >
                <Phone />
                8709960417
              </a>

              <a
                href="https://www.linkedin.com/in/vvek1/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-icon">
                  in
                </span>
                LinkedIn
              </a>

              <a
                href="https://github.com/vvek1"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-icon">
                  GH
                </span>
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HireModal;
