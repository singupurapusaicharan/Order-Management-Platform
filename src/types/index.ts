export interface Item {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Item {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'shipped' | 'cancelled';
}

export interface Message {
  id: string;
  text: string;
  isBot: boolean;
}