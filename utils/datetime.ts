/**
 * Format date time in a specific format using i18n API
 */
export function dateFormat(
  date: Date,
  locale: Intl.LocalesArgument,
  options: Intl.DateTimeFormatOptions,
): string {
  const i18n = new Intl.DateTimeFormat(locale, options);
  return i18n.format(date);
}
