import { motion } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { theme } from '../../lib/theme';

interface Props {
  orderId?: string;
  onClose: () => void;
}

export function ChatHeader({ orderId, onClose }: Props) {
  return (
    <div className={`p-4 bg-gradient-to-r ${theme.gradients.primary} text-white flex justify-between items-center`}>
      <h3 className="font-semibold flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        {orderId ? `Support - Order #${orderId}` : 'Support Chat'}
      </h3>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </motion.button>
    </div>
  );
}