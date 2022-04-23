// @ts-nocheck
/**
 * 题目名称：数组中的第K个最大元素
 * leetcode 题目: https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * leetcode 题解: https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/by-hovinghuang-mes5/
 * 牛客网 题目: https://www.nowcoder.com/practice/e016ad9b7f0b45048c58a9f27ba618bf
 * 牛客网 题解: https://blog.nowcoder.net/n/ea1b2f2bf02b48d38c75a4e684b5471e
 */

/**
 * 解法一：快速排序
 * 思路：快排，取得升序数组，然后取下标 nums.length - k + 1 对应的值
 * 时间复杂度：O(nlogn)
 * 空间复杂度：最优 O(logn)， 最差 O(n)
 */
function findKthLargest(nums: number[], k: number): number {
    if (nums.length === 0) return 0
    return sortArray(nums)[nums.length - k + 1]
};
function sortArray(nums: number[]): number[] {
    const len = nums.length
    if (len === 0) return nums

    const midIndex = Math.floor(len / 2)
    const midValue = nums.splice(midIndex, 1)[0]

    const left: number[] = []
    const right: number[] = []

    // 注意： splice 会修改原数组，所以用 arr.length
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (n < midValue) {
            left.push(n)
        } else {
            right.push(n)
        }
    }
    return sortArray(left).concat([midValue], sortArray(right))
};