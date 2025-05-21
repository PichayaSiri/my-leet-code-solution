class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let list = new ListNode(0);
  let dummy = list;
  let remainder = 0;
  while (l1 || l2) {
    const l = l1?.val || 0;
    const r = l2?.val || 0;
    const sum = l + r + remainder;
    if (sum > 9) {
      remainder = Math.floor(sum / 10);
    } else {
      remainder = 0;
    }
    dummy.next = new ListNode(sum % 10);
    dummy = dummy.next;
    l1 = l1?.next ? l1.next : null;
    l2 = l2?.next ? l2.next : null;
  }
  if (remainder) {
    dummy.next = new ListNode(remainder);
    dummy = dummy.next;
  }

  return list.next || new ListNode(0);
}
