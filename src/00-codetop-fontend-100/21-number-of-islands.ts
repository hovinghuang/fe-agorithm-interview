// @ts-nocheck
/**
 * 题目名称：岛屿数量
 * leetcode 题目: https://leetcode-cn.com/problems/number-of-islands/
 * leetcode 题解: https://leetcode-cn.com/problems/number-of-islands/solution/by-hovinghuang-d8tz/
 * 牛客网 题目: https://www.nowcoder.com/practice/0c9664d1554e466aa107d899418e814e
 * 牛客网 题解: https://blog.nowcoder.net/n/73610fd87bd94e9590a4d71b9a898f79
 */

/**
 * 解法一：深度优先(递归)
 * 思路：
 * （1）当我们遇到矩阵的某个元素为1时，首先将其置为了0
 * （2）然后查看与它相邻的上下左右四个方向，如果这四个方向相邻元素为1，则进入该元素
 * （3）进入该元素之后我们发现又回到了刚刚的子问题，又是把这一片相邻区域的 1 全部置为 0 ，因此可以用递归实现。
 * 时间复杂度：O(nm)，其中m、n为矩阵的长和宽，需要遍历整个矩阵，每次dfs搜索需要经过每个值为1的元素，
 *          但是最坏情况下也只是将整个矩阵变成0，因此相当于最坏遍历矩阵2次
 * 空间复杂度：0(nm)，最坏情况下整个矩阵都是1，递归栈深度为
 */
function numIslands(grid: string[][]): number {
    const n = grid.length
    if (n === 0) return 0

    const m = grid[0].length
    let count = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') { // 遍历到 1 的情况
                count++ // 计数
                dfs(grid, i, j) // 将于这个 1 相邻的所有 1 置为 0
            }
        }
    }

    return count
};
function dfs(grid: string[][], i: number, j: number) {
    const n = grid.length
    const m = grid[0].length
    grid[i][j] = '0'

    if (i - 1 >= 0 && grid[i - 1][j] === '1') dfs(grid, i - 1, j)
    if (i + 1 < n && grid[i + 1][j] === '1') dfs(grid, i + 1, j)
    if (j - 1 >= 0 && grid[i][j - 1] === '1') dfs(grid, i, j - 1)
    if (j + 1 < m && grid[i][j + 1] === '1') dfs(grid, i, j + 1)
}