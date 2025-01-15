import { OrderValidation, OrderFormErrors } from '../types/order';
import { CartItem } from '../types';

export function validateOrderForm(form: OrderValidation): OrderFormErrors {
  const errors: OrderFormErrors = {};

  // Customer Name validation
  if (!form.customerName.trim()) {
    errors.customerName = 'Name is required';
  } else if (form.customerName.length < 3) {
    errors.customerName = 'Name must be at least 3 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email';
  }

  // Phone validation (Indian format)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(form.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  // Address validation
  if (!form.address.trim()) {
    errors.address = 'Address is required';
  } else if (form.address.length < 10) {
    errors.address = 'Please enter a complete address';
  }

  // Pincode validation (Indian format)
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  if (!form.pincode.trim()) {
    errors.pincode = 'PIN code is required';
  } else if (!pincodeRegex.test(form.pincode)) {
    errors.pincode = 'Please enter a valid 6-digit PIN code';
  }

  return errors;
}

export function validateCart(cart: CartItem[]): string | null {
  if (cart.length === 0) {
    return 'Please add items to your cart before proceeding';
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalItems > 50) {
    return 'Maximum 50 items allowed per order';
  }

  const invalidItem = cart.find(item => item.quantity <= 0 || item.price <= 0);
  if (invalidItem) {
    return `Invalid item in cart: ${invalidItem.name}`;
  }

  return null;
}