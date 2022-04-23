// @ts-nocheck
/**
 * 题目名称：二叉树的层序遍历
 * leetcode 题目: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * leetcode 题解: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/by-hovinghuang-1hvt/
 * 牛客网 题目: https://www.nowcoder.com/practice/04a5560e43e24e9db4595865dc9c63a3
 * 牛客网 题解: https://blog.nowcoder.net/n/10b0073f1d0043eba3d0f9646e43bbb4
 */

/**
 * 解法一：非递归（BFS）
 * 思路：
 * （1）首先判断二叉树是否为空，空树没有遍历结果。
 * （2）建立辅助队列，根节点首先进入队列。不管层次怎么访问，根节点一定是.第一个，那它肯定排在队伍的最前面。
 * （3）每次进入一层，统计队列中元素的个数。因为每当访问完一一层，下一-层作为这一层的子节点，
 *      一定都加入队列，而再下一层还没有加入，因此此时队列中的
 * （4）每次遍历这一层这么多的节点数，将其依次从队列中弹出，然后加入这一行的一维数组中，如果它们有子节点，
 *      依次加入队列排队等待访问。元素个数就是这-层的元素个数。
 * （5）访问完这-层的元素后，将这个一维数组加入二维数组中，再访问下一层。
 * 时间复杂度: O(n),其中n为二叉树的节点数，每个节点访问一次
 * 空间复杂度: O(n),队列的空间为二叉树的一-层的节点数，最坏情况二叉树的一层为O(n)级
 */
function levelOrder(root: TreeNode | null): number[][] {
    const resArr: number[][] = new Array()
    const strArr: string[] = []
    if (root == null) return resArr
    
    const queue: TreeNode[] = []
    
    queue.unshift(root)
    
    while (queue.length) {
        const row: number[] = []
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const curNode = queue.pop()
            row.push(curNode.val)
            if (curNode.left != null) queue.unshift(curNode.left)
            if (curNode.right != null) queue.unshift(curNode.right)
        }
        strArr.push(row.toString())
    }
    
    for (let i = 0; i < strArr.length; i++) {
        const rowNum: number[] = []
        strArr[i].split(',').forEach((item) => {
            rowNum.push(parseInt(item))
        })
        resArr[i] = rowNum
    }
    
    return resArr
};

/**
 * 解法二：递归
 * 思路：
 *   既然二叉树的前序、中序、后序遍历都可以轻松用递归实现，树型结构本来就是递归喜欢
 *   的形式，那我们的层次遍历是不是也可以尝试用递归来试试呢?按行遍历的关键是每一-行
 *   的深度对应了它输出在二维数组中的深度，即深度可以与二维数组的下标对应，那我们递
 *   归的时候记录深度就可以了啊。
 * 时间复杂度: O(n),其中n为二叉树的节点数，每个节点访问一次
 * 空间复杂度: O(n),最坏二叉树退化为链表，递归栈的最大深度为n
 */
function levelOrder(root: TreeNode | null): number[][] {
    const resArr: number[][] = new Array()
    if (root == null) return resArr
    traverse(root, 1, resArr)
    return resArr
};
function traverse(root: TreeNode, depth: number, resArr: number[][]) {
    if (root != null) {
        if (resArr.length < depth) {
            const row: number[] = []
            resArr.push(row)
            row.push(root.val)
        } else {
            const row = resArr[depth - 1]
            row.push(root.val)
        }
    } else {
        return 
    }
    traverse(root.left, depth + 1, resArr)
    traverse(root.right, depth + 1, resArr)
}
