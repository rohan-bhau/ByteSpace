import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'lime' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'lime',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    lime: 'bg-[#d4fa20] text-black font-semibold hover:bg-[#bfe619] shadow-sm hover:shadow active:scale-[0.98]',
    primary: 'bg-[#003ce0] text-white hover:bg-[#0030b8]',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200',
    outline: 'border border-white/20 text-white hover:border-white hover:bg-white/5',
    ghost: 'text-white/90 hover:text-[#d4fa20] hover:bg-white/5',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-full',
    md: 'text-sm px-5 py-2.5 rounded-full',
    lg: 'text-base px-7 py-3.5 rounded-full',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
