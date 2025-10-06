// src/components/ui/Button.js
export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '' }) {
  const baseStyles = 'font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-300';

  const variants = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}