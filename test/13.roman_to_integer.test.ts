import { romanToInt } from "@daily";

describe("13", () => {
  test.each([
    {
      s: "III",
      expected: 3,
    },
    {
      s: "LVIII",
      expected: 58,
    },
    {
      s: "MCMXCIV",
      expected: 1994,
    },
  ])("romanToInt($s) => $expected", ({ s, expected }) => {
    expect(romanToInt(s)).toEqual(expected);
  });
});
