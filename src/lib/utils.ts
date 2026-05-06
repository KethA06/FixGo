import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes safely
 * Helps resolve conflicting class names (e.g. padding, colors)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
