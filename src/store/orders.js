import { create } from 'zustand';

// Initial orders data with amounts in INR (₹100-5000)
const initialOrders = [
  {
    id: '10A6Z01',
    date: new Date().toLocaleDateString(),
    status: 'completed',
    total: 1499,
    items: [
      {
        id: 'SKU001',
        name: 'Classic T-Shirt',
        price: 749,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop&q=90',
        description: 'Comfortable cotton t-shirt'
      }
    ]
  },
  // ... rest of the initial orders remain the same
];

export const useOrdersStore = create((set) => {
  let orderCounter = initialOrders.length + 1;

  return {
    orders: initialOrders,
    addOrder: (order) => {
      const newOrderId = `10A6Z${orderCounter.toString().padStart(2, '0')}`;
      orderCounter++;
      
      set((state) => ({ 
        orders: [{ 
          ...order, 
          id: newOrderId,
        }, ...state.orders],
      }));
    },
  };
});