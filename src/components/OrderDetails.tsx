import { motion } from 'framer-motion';
import { CreditCard, Truck, MapPin } from 'lucide-react';
import { theme } from '../lib/theme';
import { Order } from '../types';

interface Props {
  order: Order;
}

export function OrderDetails({ order }: Props) {
  return (
    <div className="space-y-6">
      {/* Customer Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg"
      >
        <h4 className="font-medium mb-4 flex items-center gap-2 text-lg">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`p-2 bg-gradient-to-r ${theme.gradients.primary} rounded-lg`}
          >
            <CreditCard className="w-5 h-5 text-white" />
          </motion.div>
          Customer Information
        </h4>
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-white/50"
          >
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium">customer@example.com</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-white/50"
          >
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-medium">+1 234 567 8900</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Shipping Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg"
      >
        <h4 className="font-medium mb-4 flex items-center gap-2 text-lg">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`p-2 bg-gradient-to-r ${theme.gradients.secondary} rounded-lg`}
          >
            <Truck className="w-5 h-5 text-white" />
          </motion.div>
          Shipping Details
        </h4>
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-3 p-4 rounded-lg bg-white/50"
          >
            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-gray-500 text-sm">Delivery Address</p>
              <p className="font-medium">123 Delivery Street, Shipping City, 12345</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-white/50"
            >
              <p className="text-gray-500 text-sm">Shipping Type</p>
              <p className="font-medium">Express Delivery</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-white/50"
            >
              <p className="text-gray-500 text-sm">Tracking Number</p>
              <p className="font-medium">TRK123456789</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}