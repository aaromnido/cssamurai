import { format, parseISO } from 'date-fns';

export function formatDate(date: Date | string) {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMMM d, yyyy');
}