/**
 * Format date time in a specific format using i18n API
 */
export function dateFormat(
  date: Date,
  locale: Intl.LocalesArgument,
  options: Intl.DateTimeFormatOptions,
): string {
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
}
