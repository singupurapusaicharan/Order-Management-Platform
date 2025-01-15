import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ShoppingCart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { OrderCard } from '../components/OrderCard';
import { ChatSupport } from '../components/ChatSupport';
import { Background } from '../components/Background';
import { theme } from '../lib/theme';
import { useOrdersStore } from '../store/orders';

export function Home() {
  const orders = useOrdersStore((state) => state.orders);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="relative max-w-5xl mx-auto p-4">
        <div className="text-center mb-12">
          <motion.div
            variants={theme.animations.float}
            animate="animate"
            className={`w-24 h-24 bg-gradient-to-br ${theme.gradients.primary} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl transform hover:rotate-12 transition-transform`}
          >
            <ShoppingCart className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            <span className={`bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent`}>
              Welcome to Quick Shop
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Order everything you need - from fresh coffee to groceries and household essentials
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Link to="/new-order">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative inline-flex items-center gap-3 bg-gradient-to-r ${theme.gradients.primary} text-white px-8 py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <ShoppingBag className="w-6 h-6" />
              <span>Create New Order</span>
              <motion.div
                className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                whileHover={{ scale: 1.05 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl"
        >
          <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${theme.gradients.primary} bg-clip-text text-transparent`}>
            My Orders
          </h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChat(true)}
        className={`fixed bottom-6 right-6 p-4 bg-gradient-to-r ${theme.gradients.primary} rounded-full shadow-lg text-white z-40`}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {showChat && <ChatSupport onClose={() => setShowChat(false)} />}
      </AnimatePresence>
    </div>
  );
}