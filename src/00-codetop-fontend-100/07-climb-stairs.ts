// @ts-nocheck
/**
 * 题目名称：爬楼梯（跳台阶）
 * leetcode 题目: https://leetcode-cn.com/problems/climbing-stairs/
 * leetcode 题解: https://leetcode-cn.com/problems/climbing-stairs/solution/by-hovinghuang-bl5r/
 * 牛客网 题目: https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4
 * 牛客网 题解: https://blog.nowcoder.net/n/7057ccebe8fd452580442b74ffbb8d90
 */

/**
 * 解法一：递归（超时）
 * 思路：满足斐波那契数列公式，最简单的肯定是递归
 * 时间复杂度：O(2^n)
 * 空间复杂度：
 */
function climbStairs(n: number): number {
    if (n <= 2) return n
    return climbStairs(n - 1) + climbStairs(n - 2)
};

/**
 * 解法二：循环（记忆化累加）
 * 思路：n1、n2 记录前面两位的结果，一个循环搞定
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function climbStairs(n: number): number {
    if (n <= 2) return n
    
    let n1 = 1 // 记录 n - 1 的结果
    let n2 = 1 // 记录 n - 2 的结果
    let res = 0

    for (let i = 2; i <= n; i++) {
        res = n1 + n2

        // 记录中间结果
        n2 = n1
        n1 = res
    }

    return res
};

/**
 * 解法三：动态规划
 * 思路：
 * 时间复杂度：O(n)
 * 空间复杂度：
 */
function climbStairs(n: number): number {
    const dp = new Array(n + 1)
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
