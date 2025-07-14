export function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  for (let i of strs[0]) {
    prefix += i;
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) {
        return prefix.slice(0, prefix.length - 1);
      }
    }
  }
  return prefix;
}
