export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let result = new Map<number, string>();
  let row = 1;
  let down = true;
  for (let i = 0; i < s.length; i++) {
    result.set(row, (result.get(row) ? result.get(row) : "") + s[i]);
    if (row === 1) {
      down = true;
    } else if (row === numRows) {
      down = false;
    }
    if (down) {
      row++;
    } else {
      row--;
    }
  }

  return Array.from(result)
    .map(([_, value]) => value)
    .join("");
}
