import { removeNthFromEnd } from "@daily";

describe("19", () => {
  test.each([
    {
      head: [1, 2, 3, 4, 5],
      n: 2,
      expected: [1, 2, 3, 5],
    },
    {
      head: [1],
      n: 1,
      expected: [],
    },
    {
      head: [1, 2],
      n: 1,
      expected: [1],
    },
  ])("removeNthFromEnd($head,$n) => $expected", ({ head, n, expected }) => {
    const res = toArray(removeNthFromEnd(toList(head), n));
    console.log(res);
    expect(res).toEqual(expected);
  });
});

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
