export function isValid(s: string): boolean {
  const str: Record<string, string> = { "{": "}", "[": "]", "(": ")" };
  let arr = s.split("");
  if (s.length % 2 !== 0) {
    return false;
  }
  if (s.length == 2 && str[s[0]] !== s[1]) {
    return false;
  }
  let left = 0;
  while (arr.length > 0) {
    let right = left + 1;
    if (str[arr[left]] === arr[right] && str[arr[left]]) {
      arr.splice(left, 2);
      left--;
    } else {
      left++;
    }
    if (left >= arr.length) {
      return false;
    }
  }
  return true;
}
