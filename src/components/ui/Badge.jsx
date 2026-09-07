// src/components/ui/Badge.jsx
import React from 'react';
import { cn } from '../../utils/cn';

export const Badge = ({ className, variant = 'default', children, ...props }) => {
  const variants = {
    default: "bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-200 dark:border-primary-800",
    secondary: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    outline: "text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
