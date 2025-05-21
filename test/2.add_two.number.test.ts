import { addTwoNumbers } from "@daily";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function toList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function toArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

describe("addTwoNumbers()", () => {
  test.each([
    {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
      expected: [7, 0, 8],
    },
    {
      l1: [0],
      l2: [0],
      expected: [0],
    },
    {
      l1: [9, 9, 9, 9, 9, 9, 9],
      l2: [9, 9, 9, 9],
      expected: [8, 9, 9, 9, 0, 0, 0, 1],
    },
  ])("addTwoNumbers($l1, $l2) => $expected", ({ l1, l2, expected }) => {
    const result = addTwoNumbers(toList(l1), toList(l2));
    expect(toArray(result)).toEqual(expected);
  });
});
