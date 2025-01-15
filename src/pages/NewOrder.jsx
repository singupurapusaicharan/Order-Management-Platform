import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DndContext } from '@dnd-kit/core';
import { toast } from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Background } from '../components/Background';
import { DraggableItem } from '../components/DraggableItem';
import { DroppableZone } from '../components/DroppableZone';
import { CartItem } from '../components/CartItem';
import { EmptyCart } from '../components/EmptyCart';
import { items } from '../data/items';
import { categories } from '../data/categories';
import { useCartStore } from '../store/cart';
import { useOrdersStore } from '../store/orders';
import { theme } from '../lib/theme';
import { validateOrder } from '../utils/validation';

export function NewOrder() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('clothes');
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const addOrder = useOrdersStore((state) => state.addOrder);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredItems = items.filter(item => item.category === selectedCategory);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === 'cart-drop-zone') {
      const draggedItem = active.data.current;
      addToCart({ ...draggedItem, quantity: 1 });
      toast.success('Item added to cart', {
        style: {
          background: 'linear-gradient(to right, #818cf8, #c084fc)',
          color: 'white',
        },
      });
    }
  };

  const handleSubmit = () => {
    const validationError = validateOrder(cart);
    if (validationError) {
      toast.error(validationError, {
        style: {
          background: '#fee2e2',
          color: '#dc2626',
          border: '1px solid #dc2626',
        },
        duration: 2000,
      });
      return;
    }

    setIsSubmitting(true);

    // Create and add the order immediately
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString(),
      items: cart,
      total: total,
      status: 'pending'
    };

    addOrder(newOrder);
    clearCart();
    
    // Navigate immediately and show success toast after navigation
    navigate('/');
    toast.success('Order placed successfully!', {
      style: {
        background: 'linear-gradient(to right, #818cf8, #c084fc)',
        color: 'white',
      },
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen relative">
      <Background />
      
      <DndContext onDragEnd={handleDragEnd}>
        <div className="relative max-w-[1600px] mx-auto p-4">
          {/* Categories */}
          <div className="flex justify-center gap-4 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${theme.gradients.primary} text-white`
                    : 'bg-white/80 hover:bg-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Cart Panel */}
            <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.gradients.primary}`}>
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold">Your Cart</h2>
              </div>
              
              <div className="h-[calc(100vh-16rem)] overflow-y-auto space-y-4 mb-4">
                <AnimatePresence mode="wait">
                  {cart.length === 0 ? (
                    <EmptyCart />
                  ) : (
                    cart.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeFromCart}
                      />
                    ))
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="space-y-2">
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
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <motion.button
                  onClick={handleSubmit}
                  disabled={cart.length === 0 || isSubmitting}
                  whileHover={{ scale: cart.length === 0 ? 1 : 1.02 }}
                  whileTap={{ scale: cart.length === 0 ? 1 : 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r ${theme.gradients.primary} text-white rounded-lg font-medium 
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                    hover:shadow-lg hover:shadow-indigo-500/20`}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </motion.button>
              </div>
            </div>

            {/* Drop Zone */}
            <div className="lg:col-span-6">
              <DroppableZone />
            </div>

            {/* Items Panel */}
            <div className="lg:col-span-3">
              <div className="grid gap-4">
                {filteredItems.map((item) => (
                  <DraggableItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );
}