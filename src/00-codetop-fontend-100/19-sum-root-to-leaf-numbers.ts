// @ts-nocheck
/**
 * 题目名称：求根节点到叶节点数字之和
 * leetcode 题目: https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * leetcode 题解: https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/solution/by-hovinghuang-fq9e/
 * 牛客网 题目: https://www.nowcoder.com/practice/185a87cd29eb42049132aed873273e83
 * 牛客网 题解: https://blog.nowcoder.net/n/08dbb5d39ecb4776889e7d8a7f31f736
 */

/**
 * 解法一：深度优先搜索
 * 思路：
 * （1）从根节点开始，遍历每个节点，如果遇到叶子节点，则将叶子节点对应的数字加到数字之和。
 * （2）如果当前节点不是叶子节点，则计算其子节点对应的数字，然后对子节点递归遍历。
 * 时间复杂度：O(n)，其中 n 是二叉树的节点个数。对每个节点访问一次。
 * 空间复杂度：O(n)，其中 n 是二叉树的节点个数。空间复杂度主要取决于递归调用的栈空间，递归栈的深度等于二叉树的高度，
 * 最坏情况下，二叉树的高度等于节点个数，空间复杂度为 O(n)。
 */
function sumNumbers(root: TreeNode | null): number {
    return dfs(root, 0)
}
function dfs(root: TreeNode | null, prevSum: number): number {
    if (root === null) return 0

    const sum = prevSum * 10 + root.val

    if (root.left === null && root.right === null) {
        return sum
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum)
    }

}

/**
 * 解法二：BFS
 * 思路：
 * 使用广度优先搜索，需要维护两个队列，分别存储节点和节点对应的数字。
 * 初始时，将根节点和根节点的值分别加入两个队列。每次从两个队列分别取出一个节点和一个数字，进行如下操作：
 * （1）如果当前节点是叶子节点，则将该节点对应的数字加到数字之和；
 * （2）如果当前节点不是叶子节点，则获得当前节点的非空子节点，并根据当前节点对应的数字和子节点的值计算子节点对应的数字，
 *  然后将子节点和子节点对应的数字分别加入两个队列。
 * 时间复杂度：O(n)，其中 n 是二叉树的节点个数。对每个节点访问一次。
 * 空间复杂度：O(n)，其中 n 是二叉树的节点个数。空间复杂度主要取决于递归调用的栈空间，递归栈的深度等于二叉树的高度，
 * 最坏情况下，二叉树的高度等于节点个数，空间复杂度为 O(n)。
 */
function sumNumbers(root: TreeNode | null): number {
    if (root === null) return 0

    let sum = 0
    const nodeQueue: TreeNode[] = []
    const numQueue: number[] = []
    nodeQueue.push(root)
    numQueue.push(root.val)
    while (nodeQueue.length) {
        const node = nodeQueue.shift()
        const num = numQueue.shift()
        const left = node.left
        const right = node.right
        if (left === null && right === null) {
            sum += num
        } else {
            if (left !== null) {
                nodeQueue.push(left)
                numQueue.push(num * 10 + left.val)
            }
            if (right !== null) {
                nodeQueue.push(right)
                numQueue.push(num * 10 + right.val)
            }
        }
    }

    return sum
}