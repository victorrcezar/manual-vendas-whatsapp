import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  // Adjusted base styles for better mobile touch targets (px-6 py-3) vs desktop (px-8 py-4)
  const baseStyles = "px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-lg font-heading font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-up-gold text-white hover:bg-up-goldhover shadow-up-gold/20",
    secondary: "bg-up-green text-white hover:bg-opacity-90",
    outline: "border-2 border-up-gold text-up-gold hover:bg-up-gold hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};