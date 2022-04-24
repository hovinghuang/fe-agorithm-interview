// @ts-nocheck
/**
 * 题目名称：反转链表
 * leetcode 题目: https://leetcode-cn.com/problems/reverse-linked-list/
 * leetcode 题解: https://leetcode-cn.com/problems/reverse-linked-list/solution/by-hovinghuang-zhkh/
 * 牛客网 题目: https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca
 * 牛客网 题解: https://blog.nowcoder.net/n/087ff0e6f04c4ff699596619f7b4adfd
 */

/**
 * 解法一：迭代（双指针）
 * 思路：
 *   我们可以设置两个指针，一个当前节点的指针，一个上一个节点的指针(初始为空)。
 *   遍历整个链表，每到一个节点，断开当前节点与后面节点的指针，并用临时变量记录后一个节点，然后当前节点指向上一个节点。
 * 再轮换当前指针与上-一个指针，让它们进入下一个节点及下一个节点的前序节点。
 * 时间复杂度: O(n)，遍历链表一次
 * 空间复杂度: 0(1)，无额外空间使用
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return head
    let cur = head
    let pre = null

    while (cur != null) {
        const temp = cur.next // 把后序的记下来
        cur.next = pre
        pre = cur
        cur = temp
    }
    
    return pre
};

/**
 * 解法二：递归
 * 思路：
 *   从上述方法一，我们可以看到每当我们反转链表的一个节点以后，要遍历进入下一个节点进入反转，
 *   相当于对后续的子链表进行反转，这就是一个子问题，因此我们也可以使用递归。
 * 时间复杂度：O(n)，相当于递归遍历链表
 * 空间复杂度：O(n)，递归栈深度为链表长度n
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    let node = reverseList(head.next)
    head.next.next = head
    head.next = null
    return node
};
