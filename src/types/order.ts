import { CartItem } from './index';

export interface OrderValidation {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  pincode: string;
}

export interface OrderFormErrors {
  customerName?: string;
  email?: string;
  phone?: string;
  address?: string;
  pincode?: string;
}