import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { theme } from '../lib/theme';

interface Props {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">{item.name}</h3>
        <p className={`bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent font-semibold`}>
          ${item.price.toFixed(2)}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onRemove(item.id)}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-red-50"
      >
        <Trash2 className="w-4 h-4 text-red-500" />
      </motion.button>
    </motion.div>
  );
}