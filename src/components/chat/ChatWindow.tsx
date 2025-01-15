import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface Props {
  onClick: (e: React.MouseEvent) => void;
}

export function ChatWindow({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={onClick}
      className="w-96 bg-white rounded-2xl shadow-2xl overflow-hidden m-4"
    >
      {children}
    </motion.div>
  );
}