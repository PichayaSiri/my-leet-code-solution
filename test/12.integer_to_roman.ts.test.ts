import { intToRoman } from "@daily";

describe("12", () => {
  test.each([
    {
      num: 3749,
      expected: "MMMDCCXLIX",
    },
    {
      num: 58,
      expected: "LVIII",
    },
    {
      num: 1994,
      expected: "MCMXCIV",
    },
  ])("intToRoman($num) => $expected", ({ num, expected }) => {
    expect(intToRoman(num)).toEqual(expected);
  });
});
