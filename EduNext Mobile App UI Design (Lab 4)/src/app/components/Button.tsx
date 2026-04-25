interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ variant = 'primary', children, onClick, className = '', type = 'button' }: ButtonProps) {
  const baseStyles = "w-full py-4 px-6 rounded-2xl font-medium transition-all";
  const variantStyles = variant === 'primary'
    ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] active:scale-[0.98]"
    : "bg-transparent border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}
