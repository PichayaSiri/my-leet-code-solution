import { convert } from "@daily";

describe("6", () => {
  test.each([
    {
      input: "PAYPALISHIRING",
      numRow: 3,
      expected: "PAHNAPLSIIGYIR",
    },
    {
      input: "PAYPALISHIRING",
      numRow: 4,
      expected: "PINALSIGYAHRPI",
    },
    {
      input: "A",
      numRow: 1,
      expected: "A",
    },
  ])("convert($input,$numRow) => $expected", ({ input, numRow, expected }) => {
    expect(convert(input, numRow)).toEqual(expected);
  });
});
