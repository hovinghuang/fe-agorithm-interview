// @ts-nocheck
/**
 * 题目名称：全排列
 * leetcode 题目: https://leetcode-cn.com/problems/permutations/
 * leetcode 题解: https://leetcode-cn.com/problems/permutations/solution/by-hovinghuang-ubrb/
 * 牛客网 题目: https://www.nowcoder.com/practice/4bcf3081067a4d028f95acee3ddcd2b1
 * 牛客网 题解: https://blog.nowcoder.net/n/02102d26f1bb4026af9be0ec38984ec9
 */

/**
 * 解法一：回溯 + 递归
 * 思路：
 *   全排列就是对数组元素交换位置，使每--种排列都可能出现。因为题目要求按照字典序排
 *   列输出，那毫无疑问第-一个排列就是数组的升序排列，它的字典序最小，后续每个元素与
 *   它后面的元素交换一次位置就是一种排列情况，但是如果要保持原来的位置不变，那就不
 *   应该从它后面的元素开始交换而是从自己开始交换才能保证原来的位置不变，不会漏情况。
 * 时间复杂度: O(n!), n个元素的数组进行全排列
 * 空间复杂度: O(n), 递归栈的最大深度为数组长度n，res属于返回必要空间
 */
function permute(nums: number[]): number[][] {
    const res: number[][] = []
    if (nums.length === 0) return res

    // nums.sort((a, b) => a - b)

    recursion(res, nums, 0)

    return res
};

function recursion(res: number[][], nums: number[], index: number) {
    if (index === nums.length - 1) { // 分支进入结尾，找到一种排列
        res.push([...nums])
    } else {
        for (let i = index; i < nums.length; i++) {
            swap(nums, i, index) // 交换二者
            recursion(res, nums, index + 1) // 继续往后找
            swap(nums, i, index) // 回溯
        }
    }
}

function swap(nums: number[], index1: number, index2: number) {
    const temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
}