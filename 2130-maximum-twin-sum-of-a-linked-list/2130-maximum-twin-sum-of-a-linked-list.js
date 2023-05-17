/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;
    while (slow) {
        const nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    let newHead = prev;
    let ans = Number.MIN_VALUE;
    while (newHead) {
        ans = Math.max(ans, head.val + newHead.val);
        head = head.next;
        newHead = newHead.next;
    }
    return ans;
};