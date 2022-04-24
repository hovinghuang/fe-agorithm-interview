// @ts-nocheck
/**
 * 题目名称：排序数组(快速排序)
 * leetcode 题目: https://leetcode-cn.com/problems/sort-an-array/
 * leetcode 题解: https://leetcode-cn.com/problems/sort-an-array/solution/by-hovinghuang-4j3t/
 * 牛客网 题目: https://www.nowcoder.com/practice/2baf799ea0594abd974d37139de27896
 * 牛客网 题解: https://blog.nowcoder.net/n/ed60ab35639e4289bf51b7253d3a5c45
 */

/**
 * 解法一：快速排序
 * 思路：
 * （1）快速排序的主要思想是通过划分将待排序的序列分成前后两部分，其中前一部分的数据都比后一部分的数据要小，
 * （2）然后再递归调用函数对两部分的序列分别进行快速排序，以此使整个序列达到有序。
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(h)，其中 h 为快速排序递归调用的层数。我们需要额外的 O(h) 的递归调用的栈空间，
 * 由于划分的结果不同导致了快速排序递归调用的层数也会不同，最坏情况下需 O(n) 的空间，最优情况下每次都平衡，
 * 此时整个递归树高度为 logn，空间复杂度为 O(logn)。
 */
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