const Button = ({
  children,
  variant,
  className,
  type = "button",
  ...props
}) => {
  const variants = {
    primary:
      "bg-brand-primary border-transparent font-bold py-1.5 px-3 hover:bg-blue-700 transition-colors",
    secondary:
      "bg-surface-light border-border-subtle font-semibold py-2 px-3 md:py-3.5 md:px-5 hover:bg-gray-800 transition-colors",
    transparent:
      "bg-transparent border-border-subtle font-semibold py-2 px-3 md:py-3.5 md:px-5 hover:bg-white/10 transition-colors gap-3 md:gap-5",
    danger:
      "bg-brand-danger border-border-subtle font-semibold py-2 px-3 md:py-3.5 md:px-5 hover:bg-brand-danger-hover transition-colors",
  };

  return (
    <button
      type={type}
      {...props}
      className={`border text-white rounded-3xl text-xs md:text-lg cursor-pointer flex justify-center items-center transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
