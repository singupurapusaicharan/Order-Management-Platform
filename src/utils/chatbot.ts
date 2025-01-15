export function getBotResponse(message: string, orderId?: string): string {
  const lowerMsg = message.toLowerCase();
  
  if (orderId) {
    if (lowerMsg.includes('status') || lowerMsg.includes('where')) {
      return `Your order #${orderId} is being processed. You can track it using the tracking number provided in the order details.`;
    }
    if (lowerMsg.includes('cancel')) {
      return `To cancel order #${orderId}, please note that cancellations are only possible within 1 hour of placing the order. Please confirm if you'd like to proceed with cancellation.`;
    }
    if (lowerMsg.includes('delivery') || lowerMsg.includes('when')) {
      return `For order #${orderId}, the estimated delivery time is 2-3 business days. You'll receive updates via SMS and email.`;
    }
  }
  
  if (lowerMsg.includes('payment')) {
    return "We accept all major payment methods including UPI, credit/debit cards, and net banking.";
  }
  if (lowerMsg.includes('refund')) {
    return "Refunds are processed within 5-7 business days after the return is approved.";
  }
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    return `Hello! How can I help you${orderId ? ` with your order #${orderId}` : ''} today?`;
  }
  if (lowerMsg.includes('help')) {
    return "I can help you with:\n- Order tracking\n- Delivery information\n- Payment methods\n- Cancellations\n- Refunds\nWhat would you like to know more about?";
  }
  return "I'm here to help! You can ask me about delivery, payments, cancellations, or refunds. How can I assist you?";
}