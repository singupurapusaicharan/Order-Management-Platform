import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Package, Truck, CreditCard, MapPin, MessageSquare } from 'lucide-react';
import { Order } from '../types';
import { theme } from '../lib/theme';
import { ChatSupport } from './ChatSupport';

interface Props {
  order: Order;
}

const statusColors = {
  completed: 'from-green-500/20 to-emerald-500/20 text-green-700',
  pending: 'from-amber-500/20 to-orange-500/20 text-amber-700',
  shipped: 'from-blue-500/20 to-indigo-500/20 text-blue-700',
  cancelled: 'from-red-500/20 to-pink-500/20 text-red-700',
};

export function OrderCard({ order }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Convert price to INR (1 USD = 75 INR for this example)
  const toINR = (price: number) => (price * 75).toFixed(2);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 cursor-pointer hover:bg-white/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`p-2 bg-gradient-to-r ${theme.gradients.primary} rounded-lg`}
              >
                <Package className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <p className="font-medium text-gray-900">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className={`font-semibold bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent`}>
                  ₹{toINR(order.total)}
                </p>
                <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${statusColors[order.status]}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 space-y-6 bg-gradient-to-br from-white/80 to-white/60">
                {/* Customer Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/50 rounded-xl p-4 shadow-sm"
                >
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${theme.gradients.primary}`}>
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    Customer Information
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">customer@example.com</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                </motion.div>

                {/* Shipping Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/50 rounded-xl p-4 shadow-sm"
                >
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${theme.gradients.primary}`}>
                      <Truck className="w-4 h-4 text-white" />
                    </div>
                    Shipping Details
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white/50 p-3 rounded-lg flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Delivery Address</p>
                        <p className="font-medium">123 Delivery Street, Mumbai, 400001</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Shipping Type</p>
                        <p className="font-medium">Express Delivery</p>
                      </div>
                      <div className="bg-white/50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Tracking Number</p>
                        <p className="font-medium">IN{order.id}TR</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Order Items */}
                <div className="space-y-3">
                  <h4 className="font-medium">Order Items</h4>
                  {order.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 bg-white/50 p-3 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">SKU: {item.id}</p>
                          </div>
                          <div className="text-right">
                            <p className={`bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent font-medium`}>
                              ₹{toINR(item.price * item.quantity)}
                            </p>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="border-t pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span>₹{toINR(order.total * 0.9)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Shipping</span>
                      <span>₹{toINR(order.total * 0.1)}</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg pt-2 border-t">
                      <span>Total</span>
                      <span className={`bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent`}>
                        ₹{toINR(order.total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Support Chat Button */}
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowChat(true)}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.gradients.primary} text-white rounded-lg`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Need Help with Order?
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {showChat && <ChatSupport onClose={() => setShowChat(false)} />}
    </>
  );
}