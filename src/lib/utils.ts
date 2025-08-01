import { clsx, type ClassValue } from 'clsx';
import { endOfDay, startOfDay } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function startOfDayFormatted(date: Date | string) {
  return startOfDay(date).toISOString().slice(0, 10) + ' 00:00:00';
}

export function endOfDayFormatted(date: Date) {
  return endOfDay(date).toISOString().slice(0, 10) + ' 00:00:00';
}
