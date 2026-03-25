export function withoutTrailingSlashes(path: string) {
  return path.replace(/\/+$/, '') || '/';
}
