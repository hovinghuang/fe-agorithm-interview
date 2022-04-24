// @ts-nocheck
/**
 * 题目名称：二分搜索
 * leetcode 题目: https://leetcode-cn.com/problems/binary-search/
 * leetcode 题解: https://leetcode-cn.com/problems/binary-search/solution/by-hovinghuang-ks00/
 * 牛客网 题目: https://www.nowcoder.com/practice/d3df40bd23594118b57554129cadf47b?
 * 牛客网 题解: https://blog.nowcoder.net/n/18779274e55745b682ab9be9bb9f438d
 */

/**
 * 解法一：循环
 * 思路：
 * （1）从数组首尾开始，每次取中点值。
 * （2）如果中间值等于目标即找到了，可返回下标，如果中点值大于目标，
 *  说明中点以后的都大于目标，因此目标在中点左半区间，如果中点值小于目标，则相反。
 * （3）根据比较进入对应的区间，直到区间左右端相遇，意味着没有找到。
 * 时间复杂度：O(log2n)，对长度为n的数组进行二分，最坏情况就是取 2 的对数
 * 空间复杂度：0(1)，无额外空间
 */
function search(nums: number[], target: number): number {
    const len = nums.length
    if (len === 0) return -1

    let startIndex = 0
    let endIndex = len - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2) // 将数字向下舍入到最接近的整数
        const midValue = nums[midIndex]

        if (target < midValue) {
            // 目标值较少，则继续在左侧查找 
            endIndex = midIndex - 1
        } else if (target > midValue) {
            // 目标值较大，则继续在右侧查找 
            startIndex = midIndex + 1
        } else {
            return midIndex
        }
    }

    return -1
};

/**
 * 解法二：递归
 * 思路：
 * （1）从数组首尾开始，每次取中点值。
 * （2）如果中间值等于目标即找到了，可返回下标，如果中点值大于目标，说明中点以后的都大于目标，
 *  因此目标在中点左半区间，如果中点值小于目标，则相反。
 * （3）根据比较进入对应的区间，直到区间左右端相遇，意味着没有找到。
 * 时间复杂度：O(log2n)，对长度为n的数组进行二分，最坏情况就是取2的对数
 * 空间复杂度：0(1)
 */
 function search(nums: number[], target: number, startIndex?: number, endIndex?: number): number {
    const len = nums.length;
    if (len === 0) return -1;

    // 开始和结束的范围
    if (startIndex == null) startIndex = 0
    if (endIndex == null) endIndex = len - 1

    // 如果 start 和 end 相遇则结束
    if (startIndex > endIndex) return -1

    // 中间位置
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = nums[midIndex]

    if (target < midValue) {
        // 目标值较小，则继续在左侧查找
        return search(nums, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        // 目标值较大，则继续在右侧查找
        return search(nums, target, midIndex + 1, endIndex)
    } else {
        // 相等，返回
        return midIndex
    }
};