export function isMatch(s: string, p: string): boolean {
  const regex = new RegExp(`^${p}$`);
  return regex.test(s);
}
