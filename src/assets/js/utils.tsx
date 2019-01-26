interface MakePermalinkArgs {
  category: string;
  date: Date | string;
  slug?: string;
}

export function makePermalink(args: MakePermalinkArgs): string {
  const { category, slug } = args;
  const date: Date = typeof args.date === 'string' ? new Date(args.date) : args.date;

  return '/' + [
    category,
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    (date.getDate()).toString().padStart(2, '0'),
    slug || 'post'
  ].join('/');
}

export function getDayString(date: Date | string): string {
  date = typeof date === 'string' ? new Date(date) : date;

  return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][date.getDay()];
}
