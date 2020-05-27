// import java.util.*;

//链表翻转 头插法
// class Solution<ListNode> {
//     public ListNode reverseList(ListNode head) {
//         ListNode new_head = null;
//         while(head != null) {
//             ListNode temp = head;
//             head = head.next;
//             temp.next = new_head;
//             new_head = temp;
//         }
//         return new_head;
//     }
// }

//反转链表 指针转向
// class Solution {
//     public ListNode reverseList(ListNode head) {
//         ListNode pre = null;
//         ListNode cur = head;
//         while(cur != null) {
//             ListNode next = cur.next;
//             cur.next = pre;
//             pre = cur;
//             cur = next;
//         }
//         return pre;
//     }
// }