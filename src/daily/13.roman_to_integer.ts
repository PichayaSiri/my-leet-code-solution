export function romanToInt(s: string): number {
  let result = 0;
  const romanArr: Record<string, number> = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  for (let i = 0; i < s.length; i++) {
    const num: number = romanArr[s[i]];
    if (num < romanArr[s[i + 1]] && i !== s.length - 1) {
      result -= num;
    } else {
      result += num;
    }
  }
  return result;
}
