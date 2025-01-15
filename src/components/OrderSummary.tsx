import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { CartItem } from '../types';

interface Props {
  cart: CartItem[];
  total: number;
}

export function OrderSummary({ cart, total }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <h3 className="font-medium text-lg">Order Summary</h3>
      <div className="space-y-2">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="border-t pt-2 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span>₹{(total * 0.9).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (10%)</span>
          <span>₹{(total * 0.1).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-medium text-lg pt-2 border-t">
          <span>Total</span>
          <span className={`bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent`}>
            ₹{total.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}