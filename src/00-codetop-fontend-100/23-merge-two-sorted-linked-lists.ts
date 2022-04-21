// @ts-nocheck
/**
 * 题目名称：合并两个有序链表
 * leetcode 题目: https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * leetcode 题解: https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/by-hovinghuang-zg0e/
 * 牛客网 题目: https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337
 * 牛客网 题解: https://blog.nowcoder.net/n/ac49c082300d434898511f8c26bdc26d
 */

/**
 * 解法一：迭代
 * 思路：
 * （1）新建一个空的表头后面连接两个链表排序后的结点。
 * （2）遍历两个链表都不为空的情况，取较小值添加在新的链表后面，每次只把被添加的链表的指针后移。
 * （3）遍历到最后肯定有一个链表还有剩余的结点，它们的值将大于前面所有的，直接连在新的链表后面即可。
 * 时间复杂度: O(n)，最坏情况遍历2 * n个结点
 * 空间复杂度: 0(1)，无额外空间使用，新建的链表属于返回必要空间
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) return list2
    if (list2 == null) return list1

    let head: ListNode = new ListNode() // 加一个表头
    let cur: ListNode = head

    while (list1 != null && list2 != null) { 
        if (list1.val <= list2.val) { // 取较小值的节点
            cur.next = list1
            list1 = list1.next // 移动取值的指针
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next // 指针后移
    }
     
    if (list1 != null) cur.next = list1
    if (list2 != null) cur.next = list2

    return head.next // 返回值去掉表头
};

/**
 * 解法二：递归
 * 思路：
 * （1）每次比较两个链表当前结点的值，然后取较小值的链表指针往后，另一个不变送入递归中。
 * （2）递归回来的结果我们要加在当前较小值的结点后面，相当于不断在较小值后面添加结点。
 * （3）递归的终止是两个链表为空。
 * 时间复杂度: O(n)，最坏相当于遍历两个链表每个结点一次
 * 空间复杂度: O(n), 递归栈长度最大为 n
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) return list2
    if (list2 == null) return list1

    if (list1.val <= list2.val) { // 先用较小的值的节点
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};