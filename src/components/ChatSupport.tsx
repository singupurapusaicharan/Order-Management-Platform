import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { theme } from '../lib/theme';
import { useChatMessages } from '../hooks/useChatMessages';
import { ChatWindow } from './chat/ChatWindow';
import { ChatHeader } from './chat/ChatHeader';
import { ChatMessages } from './chat/ChatMessages';
import { ChatInput } from './chat/ChatInput';

interface Props {
  onClose: () => void;
  orderId?: string;
}

export function ChatSupport({ onClose, orderId }: Props) {
  const { messages, addMessage } = useChatMessages(orderId);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage(input);
    setInput('');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <ChatWindow onClick={(e) => e.stopPropagation()}>
        <ChatHeader orderId={orderId} onClose={onClose} />
        <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
        <ChatInput
          value={input}
          onChange={setInput}
          onSend={handleSend}
        />
      </ChatWindow>
    </motion.div>
  );
}