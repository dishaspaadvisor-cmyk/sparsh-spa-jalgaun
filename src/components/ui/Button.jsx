import React from 'react';

const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9A741F] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#1B2620] text-[#FAF8F4] hover:bg-[#2A3B32] shadow-sm',
    gold: 'bg-[#D4AF37] text-[#1B2620] hover:bg-[#c39e2b] shadow-sm',
    secondary: 'bg-[#F2EDE4] text-[#1B2620] border border-[#D9D0C1] hover:bg-[#E8E0D2]',
    outline: 'bg-transparent text-[#1B2620] border border-[#1B2620] hover:bg-[#1B2620] hover:text-[#FAF8F4]',
    ghost: 'bg-transparent text-[#1B2620] hover:bg-[#F2EDE4]',
    whatsapp: 'bg-[#1E6B4B] text-white hover:bg-[#17553B] shadow-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      disabled={disabled || loading}
      onClick={(e) => {
        if (!disabled && !loading && onClick) {
          onClick(e);
        }
      }}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Please wait...' : children}
    </button>
  );
};

export default Button;
