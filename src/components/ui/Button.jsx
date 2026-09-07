// src/components/ui/Button.jsx
import React from 'react';
import { cn } from '../../utils/cn';

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? "a" : "button";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg dark:bg-primary-500 dark:hover:bg-primary-600",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-100",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 text-slate-700",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3 text-sm",
    lg: "h-12 rounded-md px-8 text-lg",
    icon: "h-10 w-10 flex items-center justify-center",
  };

  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";
