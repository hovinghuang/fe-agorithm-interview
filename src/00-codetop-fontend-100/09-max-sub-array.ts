// @ts-nocheck
/**
 * 题目名称：大子数组和(连续子数组的最大和)
 * leetcode 题目: https://leetcode-cn.com/problems/maximum-subarray/
 * leetcode 题解: https://leetcode-cn.com/problems/maximum-subarray/solution/by-hovinghuang-exw9/
 * 牛客网 题目: https://www.nowcoder.com/practice/459bd355da1549fa8a49e350bf3df484
 * 牛客网 题解: https://blog.nowcoder.net/n/8d36ffcdc332432197d9f44e6af0e78c
 */

/**
 * 解法一：暴力解法（双层循环）
 * 思路：求出所有可能，维护最大值 max
 * 时间复杂度：O(n^2) 超标不可用
 * 空间复杂度：
 */
function maxSubArray(nums: number[]): number {
    const len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]

    let i = 0
    let j = i
    let max = 0
    let temp = 0
    while (i < len) {
        if (j === len - 1) {
            i++
            j = i + 1
            temp = 0  
        } else {
            temp = temp + nums[j]
            max = Math.max(max, temp)
            j++
        }
    }
    
    return max
};

/**
 * 解法二：动态规划
 * 思路：
 *   可以用dp数组表示以下标i为终点的最大连续子数组和。
 *   每次遇到一个新的数组元素，连续的子数组要么加，上变得更大，要么它本
 *   身就更大，因此状态转移为dp[i] = max(dp[i - 1] + array[i], array[i])。
 *   遍历数组，每次只要比较取最大值即可。
 * 时间复杂度：O(n)，遍历一遍。
 * 空间复杂度：O(n)，动态规划辅助数组长度为n
 */
function maxSubArray(nums: number[]): number {
    const len = nums.length
    if (len === 0) return 0
    
    const dp: number[] = []
    dp[0] = nums[0]
    let maxSum = dp[0]

    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        maxSum = Math.max(maxSum, dp[i])
    }

    return maxSum
};

/**
 * 解法三：动态规划空间优化
 * 思路：
 *   我们注意到方法一的动态规划在状态转移的时候只用到了i一1的信息，没有使用整个数组的信息。
 *   我们可以使用两个变量迭代来代替数组。
 *   状态转移的时候更新变量y,该轮循环结束的再更新x为y即可做到每次迭代都是上一轮的dp。
 *   遍历数组，每次只要比较取最大值即可。
 * 时间复杂度：O(n)，遍历一遍。
 * 空间复杂度：O(1)，常数变量
 */
function maxSubArray(nums: number[]): number {
    const len = nums.length
    if (len === 0) return 0
    
    let x = nums[0]
    let y = 0
    let maxSum = x

    for (let i = 1; i < len; i++) {
        y = Math.max(nums[i], x + nums[i])
        maxSum = Math.max(maxSum, y)
        x = y
    }

    return maxSum
};
