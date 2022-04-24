// @ts-nocheck
/**
 * 题目名称：三数之和
 * leetcode 题目: https://leetcode-cn.com/problems/3sum/
 * leetcode 题解: https://leetcode-cn.com/problems/3sum/solution/by-hovinghuang-mo14/
 * 牛客网 题目: https://www.nowcoder.com/practice/345e2ed5f81d4017bbb8cc6055b0b711
 * 牛客网 题解: https://blog.nowcoder.net/n/c9e6f346004f4aedaf087cbdb099b2e6
 */

/**
 * 解法一：双指针
 * 思路：待补充
 * 时间复杂度：O(n^2)
 * 空间复杂度：待补充
 */
function threeSum(nums: number[]): number[][] {
    const res: number[][] = []
    const len = nums.length
    if (len < 3) return res

    nums.sort((a, b) => a - b)

    for (let i = 0; i < len - 2; i++) {
        //  避免重复元素
        if (nums[i] == nums[i - 1]) continue

        const target = -nums[i]
        let j = i + 1
        let k = len - 1
        while (j < k) {
            //  避免重复元素(为什么要j > i+1,因为下标i跟j可以相同)
            if (j > i + 1 && nums[j] == nums[j - 1]){
                j++
                continue
            }

            if (nums[k] == nums[k + 1]){
                k--
                continue
            }
            
            if (nums[j] + nums[k] == target) {
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
            } else if (nums[j] + nums[k] < target) {
                j++
            } else {
                k--
            }
        }
    }

    return res
};