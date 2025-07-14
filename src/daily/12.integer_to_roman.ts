export function intToRoman(num: number): string {
  let roman = "";
  let index = 0;
  const romanArray = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const intArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  while (num > 0) {
    let count = 0;
    if (num >= intArray[index]) {
      count = Math.floor(num / intArray[index]);
      num -= count * intArray[index];
      roman += romanArray[index].repeat(count);
    }
    index++;
  }
  return roman;
}
