export function validateOrder(cart) {
  // Check if cart is empty
  if (cart.length === 0) {
    return 'Your cart is empty. Please add items before placing an order.';
  }

  // Check if any item has invalid quantity
  const invalidQuantityItem = cart.find(item => item.quantity <= 0);
  if (invalidQuantityItem) {
    return `Invalid quantity for ${invalidQuantityItem.name}. Please update or remove this item.`;
  }

  // Check if total items don't exceed reasonable limit
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalItems > 50) {
    return 'Order quantity exceeds limit (maximum 50 items). Please adjust your cart.';
  }

  // Check if any item price is valid
  const invalidPriceItem = cart.find(item => item.price <= 0);
  if (invalidPriceItem) {
    return `Invalid price for ${invalidPriceItem.name}. Please try again later.`;
  }

  // All validations passed
  return null;
}