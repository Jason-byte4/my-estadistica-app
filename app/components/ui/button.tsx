import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon'; // Añadir 'icon' aquí
}


const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => {
  // Puedes definir clases condicionales aquí basadas en `variant` y `size`
  const variantClasses = variant === 'primary' ? 'bg-blue-500 text-white' :
                         variant === 'secondary' ? 'bg-gray-500 text-white' :
                         variant === 'ghost' ? 'bg-transparent text-gray-700' :
                         variant === 'outline' ? 'border border-gray-500 text-gray-500' : '';

  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-sm' :
                      size === 'lg' ? 'px-4 py-2 text-lg' : 'px-3 py-1.5';

  return (
    <button className={`${variantClasses} ${sizeClasses} rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
