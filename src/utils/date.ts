import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export function formatDate(date: Date | string) {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, "d 'de' MMMM 'de' yyyy", { locale: es });
}