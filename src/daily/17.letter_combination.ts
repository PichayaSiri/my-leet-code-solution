export function letterCombinations(digits: string): string[] {
  const map: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  if (digits.length == 0) return [];
  if (digits.length == 1) return map[digits[0]];
  let length = 1;
  for (let i = 0; i < digits.length; i++) {
    length *= map[digits[i]].length;
  }
  let limit = length;
  let result: string[] = new Array(length).fill("");
  for (let i = 0; i < digits.length; i++) {
    let count = 0;
    limit = limit / map[digits[i]].length;
    console.log(limit);

    let index = 0;
    let num = 0;
    while (count < length) {
      if (index === map[digits[i]].length) {
        index = 0;
        num = 0;
      }
      result[count] += map[digits[i]][index];
      num++;
      if (num === limit) {
        index++;
        num = 0;
      }
      count++;
    }
  }
  return result;
}
