// @ts-nocheck
/**
 * 题目名称：二叉树的中序遍历
 * leetcode 题目: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * leetcode 题解: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/by-hovinghuang-nd38/
 * 牛客网 题目: https://www.nowcoder.com/practice/0bf071c135e64ee2a027783b80bf781d
 * 牛客网 题解: https://blog.nowcoder.net/n/e37c5bf59db341dab53094e6b43892eb
 */

/**
 * 解法一：递归
 * 思路：略
 * 时间复杂度: O(n),其中n为二叉树的节点数，遍历二叉树所有节点
 * 空间复杂度: O(n)，最坏情况下二叉树化为链表，递归栈深度为n
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const resArr: number[] = []
    if (root == null) return resArr  
    inOrder(root, resArr)
    return resArr
};
function inOrder(node: TreeNode, resArr: number[]) {
    if (node == null) return
    inOrder(node.left, resArr)
    resArr.push(node.val)
    inOrder(node.right, resArr)
};

/**
 * 解法二：非递归
 * 思路：
 * （1）准备辅助栈，当二叉树节点为空了且栈中没有节点了，我们就停止访问。
 * （2）从根节点开始，每次优先进入每棵的子树的最左边一个节点，我们将其不断加入栈中，用来保存父问题。
 * （3）到达最左后，可以开始访问，如果它还有右节点，则将右边也加入栈中,之后右子树的访问也是优先到最左。
 * 时间复杂度: O(n),其中n为二叉树的节点数，遍历二叉树所有节点
 * 空间复杂度: O(n)，辅助栈空间最大为链表所有节点数
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const resArr: number[] = []
    if (root == null) return resArr  
    inOrder(root, resArr)
    return resArr
};
function inOrder(root: TreeNode, resArr: number[]) {
    let node: TreeNode = root
    const stack: TreeNode[] = []
    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        const top = stack.pop()
        resArr.push(top.val)
        node = top.right
    }
};