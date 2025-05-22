import { myAtoi } from "@daily";

describe("8", () => {
  test.each([
    {
      input: "42",
      expected: 42,
    },
    {
      input: " -042",
      expected: -42,
    },
    {
      input: "1337c0d3",
      expected: 1337,
    },
    {
      input: "0-1",
      expected: 0,
    },
    {
      input: "words and 987",
      expected: 0,
    },
    {
      input: "-91283472332",
      expected: -2147483648,
    },
  ])("myAtoi($input) => $expected", ({ input, expected }) => {
    expect(myAtoi(input)).toEqual(expected);
  });
});
