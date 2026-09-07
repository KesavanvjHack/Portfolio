// src/utils/cn.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes conditionally
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
