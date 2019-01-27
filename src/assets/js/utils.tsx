export function getDayString(date: Date | string): string {
  date = typeof date === 'string' ? new Date(date) : date;

  return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][date.getDay()];
}
