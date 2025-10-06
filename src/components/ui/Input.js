// src/components/ui/Input.js
export default function Input({ type = 'text', placeholder, name, className = '' }) {
  const baseStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500';

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`${baseStyles} ${className}`}
    />
  );
}