import { IntendetDate } from '../types';

export default function getIntendedDate(value: string): IntendetDate {
  const date = new Date(value);

  //   const fullDate = new Intl.DateTimeFormat('ja-JP', {
  //     year: 'numeric',
  //     month: 'numeric',
  //     day: 'numeric',
  //   })
  //     .format(date)
  //     .replaceAll('/', '-');

  const day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
  const month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = `${year}-${month}-${day}`;
  const monthName = date.toLocaleDateString('en-En', { month: 'long' });

  return {
    monthName,
    year,
    fullDate,
  };
}

// function showValue({
//   value1: firstVal,
//   value2: secondVal,
// }: {
//   value1: number;
//   value2: number;
// }) {
//   console.log(firstVal + secondVal);
// }

// showValue({ value1: 1, value2: 1 });
