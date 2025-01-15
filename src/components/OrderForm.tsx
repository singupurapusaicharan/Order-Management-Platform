import { motion, AnimatePresence } from 'framer-motion';
import { OrderValidation, OrderFormErrors } from '../types/order';
import { theme } from '../lib/theme';

interface Props {
  values: OrderValidation;
  errors: OrderFormErrors;
  onChange: (field: keyof OrderValidation, value: string) => void;
  onBlur: (field: keyof OrderValidation) => void;
}

export function OrderForm({ values, errors, onChange, onBlur }: Props) {
  const inputClasses = (error?: string) => `
    w-full px-4 py-2 rounded-lg border ${error ? 'border-red-300' : 'border-gray-300'}
    focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-200' : 'focus:ring-indigo-200'}
    transition-all duration-200
  `;

  const renderError = (error?: string) => (
    <AnimatePresence mode="wait">
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-sm text-red-500 mt-1"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={values.customerName}
          onChange={(e) => onChange('customerName', e.target.value)}
          onBlur={() => onBlur('customerName')}
          className={inputClasses(errors.customerName)}
          placeholder="Enter your full name"
        />
        {renderError(errors.customerName)}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={() => onBlur('email')}
          className={inputClasses(errors.email)}
          placeholder="Enter your email"
        />
        {renderError(errors.email)}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          value={values.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          onBlur={() => onBlur('phone')}
          className={inputClasses(errors.phone)}
          placeholder="10-digit mobile number"
        />
        {renderError(errors.phone)}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Delivery Address
        </label>
        <textarea
          value={values.address}
          onChange={(e) => onChange('address', e.target.value)}
          onBlur={() => onBlur('address')}
          className={`${inputClasses(errors.address)} resize-none h-24`}
          placeholder="Enter your complete delivery address"
        />
        {renderError(errors.address)}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          PIN Code
        </label>
        <input
          type="text"
          value={values.pincode}
          onChange={(e) => onChange('pincode', e.target.value)}
          onBlur={() => onBlur('pincode')}
          className={inputClasses(errors.pincode)}
          placeholder="6-digit PIN code"
          maxLength={6}
        />
        {renderError(errors.pincode)}
      </div>
    </div>
  );
}