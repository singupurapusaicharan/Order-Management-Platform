import { useState } from 'react';
import { Message } from '../types';
import { getBotResponse } from '../utils/chatbot';

export function useChatMessages(orderId?: string) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: `Hello! How can I help you${orderId ? ` with your order #${orderId}` : ''} today?`, 
      isBot: true 
    }
  ]);

  const addMessage = (text: string) => {
    const userMessage = { id: Date.now().toString(), text, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = { 
        id: (Date.now() + 1).toString(), 
        text: getBotResponse(text, orderId), 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return { messages, addMessage };
}