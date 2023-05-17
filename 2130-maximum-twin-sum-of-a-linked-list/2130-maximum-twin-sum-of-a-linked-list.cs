/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public int PairSum(ListNode head)
    {
        ListNode fast = head, slow = head;
        while (fast != null && fast.next != null)
        {
            fast = fast.next.next;
            slow = slow.next;
        }

        ListNode prev = null;
        while (slow != null)
        {
            ListNode nextNode = slow.next;
            slow.next = prev;
            prev = slow;
            slow = nextNode;
        }
        ListNode newHead = prev;
        int ans = int.MinValue;
        while (newHead != null)
        {
            ans = Math.Max(ans, head.val + newHead.val);
            head = head.next;
            newHead = newHead.next;
        }
        return ans;
    }
}