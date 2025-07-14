import { twoSum } from "@daily";

describe("twoSum()", () => {
  type Case = { array: number[]; target: number; result: number[] };
  const cases: Case[] = [
    { array: [2, 7, 11, 15], target: 9, result: [0, 1] },
    { array: [3, 2, 4], target: 6, result: [1, 2] },
    { array: [3, 3], target: 6, result: [0, 1] },
  ];

  cases.forEach(({ array, target, result }) => {
    test(`twoSum(${JSON.stringify(array)}, ${target}) => ${JSON.stringify(
      result
    )}`, () => {
      expect(twoSum(array, target)).toEqual(result);
    });
  });
});
