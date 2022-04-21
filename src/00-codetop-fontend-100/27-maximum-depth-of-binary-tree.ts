// @ts-nocheck
/**
 * 题目名称：二叉树的最大深度
 * leetcode 题目: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * leetcode 题解: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/by-hovinghuang-3sz3/
 * 牛客网 题目: https://www.nowcoder.com/practice/8a2b2bf6c19b4f23a9bdb9b233eefa73
 * 牛客网 题解: https://blog.nowcoder.net/n/b3939da0dc6f4d7792b0551539892e72
 */

/**
 * 解法一：递归
 * 思路：
 * （1）最大深度是所有叶子节点的深度的最大值，深度是指树的根节点到任一-叶子节点路径上节点的数量，
 * （2）因此从根节点每次往下一层深度就会加1。
 * （3）因此二叉树的深度就等于根结点这个1层加上左子树和右子树深度的最大值
 * 时间复杂度: O(n)，其中n为二叉树的节点数，遍历整棵二叉树
 * 空间复杂度: O(n)，最坏情况下，二叉树化为链表，递归栈深度最大为n
 */
function maxDepth(root: TreeNode | null): number {
    if (root == null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

/**
 * 解法二：层次遍历
 * 思路：
 *   既然是统计二叉树的最大深度，除了根据路径到达从根节点到达最远的叶子节点以外，我
 *   们还可以分层统计。对于一棵二叉树而言，必然是一层一层的，那一层就是一个深度，有
 *   的层可能会很多节点，有的层如根节点或者最远的叶子节点，只有一个节点，但是不管多
 *   少个节点，它们都是一层。因此我们可以使用层次遍历，二叉树的层次遍历就是从上到下
 *   按层遍历，每层从左到右，我们只要每层统计层数即是深度。
 * 时间复杂度: O(n)，其中n为二叉树的节点数，遍历整棵二叉树
 * 空间复杂度: O(n)，辅助队列的空间最坏为n
 */
function maxDepth(root: TreeNode | null): number {
    if(root == null) return 0

    const queue: TreeNode[] = []
    queue.push(root)
    let maxDep = 0

    while (!queue.length) {
        for (let i = 0; i < queue.length; i++) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        maxDep++
    }

    return maxDep
};
