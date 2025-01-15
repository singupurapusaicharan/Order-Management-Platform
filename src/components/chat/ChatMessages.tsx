import { motion } from 'framer-motion';
import { theme } from '../../lib/theme';
import { Message } from '../../types';

interface Props {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export function ChatMessages({ messages, messagesEndRef }: Props) {
  return (
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
        >
          <div className={`max-w-[80%] p-3 rounded-xl ${
            message.isBot 
              ? 'bg-gray-100 text-gray-800' 
              : `bg-gradient-to-r ${theme.gradients.primary} text-white`
          }`}>
            {message.text.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </motion.div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}