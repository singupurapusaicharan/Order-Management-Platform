export const theme = {
  gradients: {
    primary: 'from-indigo-500 via-purple-500 to-pink-500',
    secondary: 'from-violet-500 to-fuchsia-500',
    background: 'from-indigo-200 via-purple-200 to-pink-200',
    card: 'from-white/80 to-white/60',
  },
  animations: {
    float: {
      animate: {
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    pulse: {
      animate: {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    backgroundFlow: {
      animate: {
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }
    },
    stagger: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { staggerChildren: 0.1 }
    },
    slideIn: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.3 }
    },
    scaleIn: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      scale: 1.05,
      rotate: [0, 2, -2, 0],
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  }
};