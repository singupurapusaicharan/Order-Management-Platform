import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { Item } from '../types';

interface Props {
  item: Item;
}

export function DraggableItem({ item }: Props) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: item,
  });

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      initial={theme.animations.slideIn.initial}
      animate={theme.animations.slideIn.animate}
      whileHover={{
        scale: isDragging ? 1 : 1.05,
        y: isDragging ? 0 : -5,
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-xl p-4 shadow-sm cursor-move hover:shadow-md transition-shadow"
    >
      <motion.div
        className="relative overflow-hidden rounded-lg mb-3"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover transform transition-transform duration-700"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        />
      </motion.div>
      <motion.h3
        variants={theme.animations.stagger}
        className="font-medium text-lg mb-1"
      >
        {item.name}
      </motion.h3>
      <motion.p
        variants={theme.animations.stagger}
        className={`bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent font-semibold`}
      >
        ${item.price.toFixed(2)}
      </motion.p>
      <motion.p
        variants={theme.animations.stagger}
        className="text-sm text-gray-500 mt-2"
      >
        Drag to add to cart
      </motion.p>
    </motion.div>
  );
}