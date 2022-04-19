// @ts-nocheck
/**
 * 题目名称：大子数组和(连续子数组的最大和)
 * leetcode 题目: https://leetcode-cn.com/problems/maximum-subarray/
 * leetcode 题解: 
 * 牛客网 题目: https://www.nowcoder.com/practice/459bd355da1549fa8a49e350bf3df484?tpId=295&tqId=23259&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: 
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
 * 思路：求出所有可能，维护最大值 max
 * 时间复杂度：O(n)，遍历一遍。
 * 空间复杂度：O(1)，我们只需要常数空间存放若干变量。
 */
function maxSubArray(nums: number[]): number {
    const len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    
    let curSum = 0
    let maxSum = nums[0]

    for (let i = 0; i < len; i++) {
        curSum = Math.max(nums[i], curSum + nums[i])
        maxSum = Math.max(maxSum, curSum)
    }

    return maxSum
};
