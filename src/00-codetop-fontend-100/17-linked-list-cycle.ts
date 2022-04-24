// @ts-nocheck
/**
 * 题目名称：环形链表
 * leetcode 题目: https://leetcode-cn.com/problems/linked-list-cycle/
 * leetcode 题解: https://leetcode-cn.com/problems/linked-list-cycle/solution/by-hovinghuang-ktep/
 * 牛客网 题目: https://www.nowcoder.com/practice/650474f313294468a4ded3ce0f7898b9
 * 牛客网 题解: https://blog.nowcoder.net/n/ab8ae19d162a46c38761246e67aaf06f
 */

/**
 * 解法一：双指针
 * 思路：
 * （1）设置快慢两个指针，初始都指向链表头。
 * （2）遍历链表，快指针每次走两步，慢指针每次走一步。
 * （3）如果快指针到了链表末尾，说明没有环，因为它每次走两步，所以要验证连续两步是否为 NULL。
 *  (4）如果链表有环，那快慢双指针会在环内循环，因为快指针每次走两步，因此快指针会在环内追到慢指针，二者相遇就代表有环。
 * 时间复杂度: O(n),最坏情况下遍历链表n个节点
 * 空间复杂度: O(1)，仅使用了两个指针，没有额外辅助空间
 */
function hasCycle(head: ListNode | null): boolean {
    if (head == null) return false

    // 快慢双指针
    let fast: ListNode = head
    let slow: ListNode = head

    while (fast != null && fast.next != null) { // 快指针移动两步
        fast = fast.next.next // 慢指针移动一步
        slow = slow.next // 相遇则有环
        if (fast === slow) return true

    }

    return false // 到末尾则没有环
};

/**
 * 解法二：哈希
 * 思路：
 * （1）使用哈希表来存储所有已经访问过的节点。
 * （2）每次我们到达一个节点，如果该节点已经存在于哈希表中，则说明该链表是环形链表，否则就将该节点加入哈希表中。
 * （3）重复这一过程，直到我们遍历完整个链表即可。
 * 时间复杂度: O(n)，最坏情况下遍历链表 n 个节点
 * 空间复杂度: O(n)，其中 n 是链表中的节点数。主要为哈希表的开销，最坏情况下我们需要将每个节点插入到哈希表中一次。
 */
 function hasCycle(head: ListNode | null): boolean {
    if (head == null) return false

    const seenMap = new Map()

    while (head != null) {
        if (seenMap.has(head)) return true
        seenMap.set(head, 1)
        head = head.next
    }

    return false
};