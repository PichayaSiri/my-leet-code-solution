import { generateParenthesis } from "@daily";

describe("22", () => {
  test.each([
    {
      n: 3,
      expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
    },
    {
      n: 1,
      expected: ["()"],
    },
  ])("generateParenthesis($n) => expected", ({ n, expected }) => {
    expect(generateParenthesis(n)).toEqual(expected);
  });
});
