// @ts-nocheck
/**
 * 题目名称：路径总和
 * leetcode 题目: https://leetcode-cn.com/problems/path-sum/
 * leetcode 题解: https://leetcode-cn.com/problems/path-sum/solution/by-hovinghuang-ax6m/
 * 牛客网 题目: https://www.nowcoder.com/practice/508378c0823c423baa723ce448cbfd0c
 * 牛客网 题解: https://blog.nowcoder.net/n/b763226e0fd74c01a2a643a10db22c7b
 */

/**
 * 解法一：递归（先序遍历）
 * 思路：
 *   既然是检查从根到叶子有没有一-条等于目标值的路径，那肯定需要从根节点遍历到叶子，
 *   我们可以在根节点每次往下一层的时候，将sum减去节点值，最后检查是否完整等于0.而
 *   遍历的方法我们可以选取二叉树常用的递归先序遍历，因为每次进入一个子节点，更新
 *   sum值以后，相当于对子树查找有没有等于新目标值的路径，因此这就是子问题
 * 时间复杂度：O(n)，先序遍历二叉树所有结点
 * 空间复杂度：O(n)，最坏情况二叉树化为链表，递归栈空间最大为n
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root == null) return false
    if (root.left == null && root.right == null && root.val === targetSum) return true
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

/**
 * 解法二：非递归（DFS）
 * 思路：
 *   在二叉树中能够用递归解决的问题，很多时候我们也可以用非递归来解决。这里遍历过程
 *   也可以使用栈辅助，进行dfs遍历，检查往下的路径中是否有等于sum的路径和。
 *   注意，这里仅是dfs，而不是先序遍历，左右节点的顺序没有关系，因为每次往下都是单
 *   独添加某个节点的值相加然后继续往下，因此左右节点谁先遍历不管用。
 * 时间复杂度：O(n)，DFS遍历二叉树所有结点
 * 空间复杂度：O(n)，最坏情况二叉树化为链表，递归栈空间最大为n
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root == null) return false
    const treeNodeStack: TreeNode[] = []
    const valueStack: number[] = []
    treeNodeStack.push(root)
    valueStack.push(root.val)

    while (treeNodeStack.length) {
        const node = treeNodeStack.pop() // 弹出相应节点
        const valSum = valueStack.pop() // 获取到该节点为止的路径和

        // 是叶子结点且当前路径和等于 valSum
        if (node.left == null && node.right == null && valSum === targetSum) return true

        // 左节点&对应路径和入栈
        if (node.left != null) {
            treeNodeStack.push(node.left)
            valueStack.push(node.left.val + valSum)
        }

        // 右节点&对应路径和入栈
        if (node.right != null) {
            treeNodeStack.push(node.right)
            valueStack.push(node.right.val + valSum)
        }
    }

    return false
};