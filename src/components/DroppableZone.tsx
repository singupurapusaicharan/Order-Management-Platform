import { useDroppable } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { theme } from '../lib/theme';

export function DroppableZone() {
  const { setNodeRef, isOver } = useDroppable({
    id: 'cart-drop-zone',
  });

  return (
    <motion.div
      ref={setNodeRef}
      animate={{
        scale: isOver ? 1.02 : 1,
        backgroundColor: isOver ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)',
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-[calc(100vh-12rem)] rounded-xl border-2 border-dashed border-indigo-200 flex flex-col items-center justify-center p-8"
    >
      <motion.div
        animate={{
          y: isOver ? [0, -10, 0] : 0,
          scale: isOver ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: isOver ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="text-center"
      >
        <motion.div
          whileHover={theme.animations.hover}
          whileTap={theme.animations.tap}
          className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${theme.gradients.primary} flex items-center justify-center`}
        >
          <Package className="w-8 h-8 text-white" />
        </motion.div>
        <motion.h3
          variants={theme.animations.stagger}
          className="text-xl font-semibold mb-2"
        >
          Drop Zone
        </motion.h3>
        <motion.p
          variants={theme.animations.stagger}
          className="text-gray-500"
        >
          Drag items here to add them to your cart
        </motion.p>
      </motion.div>
    </motion.div>
  );
}