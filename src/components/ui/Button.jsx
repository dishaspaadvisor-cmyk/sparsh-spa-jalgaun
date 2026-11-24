import React from 'react';

/**
 * Reusable Button component with consistent styling
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline, ghost, whatsapp)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.loading - Whether button is in loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {Object} props... - Other props passed to button element
 */
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
  // Base button classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-full
    transition-all duration-300
    transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${className}
  `.trim();

  // Variant styles
  const variants = {
    primary: `
      bg-[#D4AF37] text-black font-bold
      hover:bg-[#bc962b]
      focus:ring-[#D4AF37]
      shadow-md hover:shadow-xl
    `,
    secondary: `
      bg-white text-stone-900 font-bold
      border-2 border-[#D4AF37]
      hover:bg-amber-50
      focus:ring-[#D4AF37]
      shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent text-[#b58d20] font-bold
      border-2 border-[#D4AF37]
      hover:bg-[#D4AF37] hover:text-black
      focus:ring-[#D4AF37]
    `,
    ghost: `
      bg-transparent text-stone-800 font-semibold
      hover:bg-stone-100
      focus:ring-[#D4AF37]
    `,
    whatsapp: `
      bg-gradient-to-r from-emerald-500 to-emerald-600
      text-white font-bold
      hover:from-emerald-600 hover:to-emerald-700
      focus:ring-emerald-500
      shadow-md hover:shadow-xl
    `,
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm sm:text-base',
    lg: 'px-8 py-3.5 text-base sm:text-lg',
    xl: 'px-10 py-4 text-lg sm:text-xl',
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
