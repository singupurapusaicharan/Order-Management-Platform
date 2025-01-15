import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { theme } from '../lib/theme';

export function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col items-center justify-center text-center p-8"
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        className={`w-16 h-16 bg-gradient-to-r ${theme.gradients.primary} rounded-xl flex items-center justify-center mb-4`}
      >
        <ShoppingBag className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="text-lg font-medium mb-2">Your Cart is Empty</h3>
      <p className="text-gray-500 text-sm">
        Drag and drop items from the right panel to add them to your cart
      </p>
    </motion.div>
  );
}