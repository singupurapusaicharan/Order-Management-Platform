import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { theme } from '../../lib/theme';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function ChatInput({ value, onChange, onSend }: Props) {
  return (
    <div className="p-4 border-t">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSend()}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSend}
          className={`p-2 bg-gradient-to-r ${theme.gradients.primary} text-white rounded-lg`}
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}