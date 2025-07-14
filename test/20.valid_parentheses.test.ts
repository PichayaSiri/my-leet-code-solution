import { isValid } from "@daily";

describe("20", () => {
  test.each([
    {
      str: "()",
      expected: true,
    },
    {
      str: "()[]{}",
      expected: true,
    },
    {
      str: "(]",
      expected: false,
    },
    {
      str: "([])",
      expected: true,
    },
    {
      str: "([)]",
      expected: false,
    },
    {
      str: "()]",
      expected: false,
    },
    {
      str: "(([]){})",
      expected: true,
    },
    {
      str: "()))",
      expected: false,
    },
  ])("isValid($str) => $expected", ({ str, expected }) => {
    expect(isValid(str)).toEqual(expected);
  });
});
