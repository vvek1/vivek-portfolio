import { motion } from 'framer-motion';
import { useEffect } from 'react';

function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65 }}
    >
      <div className="splash-shutter top" />
      <div className="splash-shutter bottom" />

      <div className="splash-lines" />

      <motion.div
        className="splash-name"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span>VIVEK</span>
        <span>ANAND</span>
      </motion.div>

      <div className="splash-caption">
        PORTFOLIO / 2026
      </div>
    </motion.div>
  );
}

export default SplashScreen;
