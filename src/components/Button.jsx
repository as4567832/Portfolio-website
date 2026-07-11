const variantClasses = {
  primary: 'bg-primary hover:bg-primary/80 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]',
  glass: 'glass hover:bg-white/10 text-white',
  gradient: 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]',
};

const Button = ({ as: Component = 'a', variant = 'primary', className = '', children, ...props }) => {
  return (
    <Component
      className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
