import { IntendetDate } from '../types/types';

export default function getIntendedDate(value: string): Date {
  const date = new Date(value);

  // const day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
  // const month =
  //   date.getMonth() + 1 < 10
  //     ? '0' + (date.getMonth() + 1)
  //     : date.getMonth() + 1;
  // const year = date.getFullYear();

  // const fullDate = `${year}-${month}-${day}`;
  // const monthName = date.toLocaleDateString('en-En', { month: 'long' });

  return date;
}
