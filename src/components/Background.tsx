import { motion } from 'framer-motion';
import { theme } from '../lib/theme';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${theme.gradients.background}`}
        animate={theme.animations.backgroundFlow.animate}
      />
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, -180, 0],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '40rem',
            height: '40rem',
            background: `linear-gradient(${Math.random() * 360}deg, #818cf8, #c084fc, #f472b6)`,
          }}
        />
      ))}
    </div>
  );
}