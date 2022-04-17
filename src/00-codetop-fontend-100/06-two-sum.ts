// @ts-nocheck
/**
 * 题目名称：两数之和
 * leetcode 题目: https://leetcode-cn.com/problems/two-sum/
 * leetcode 题解: https://leetcode-cn.com/problems/two-sum/solution/by-hovinghuang-8jqr/
 * 牛客网 题目: https://www.nowcoder.com/practice/20ef0972485e41019e39543e8e895b7f?tpId=295&tqId=745&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: https://blog.nowcoder.net/n/61a9e5d2ac2f46db9f6f9e324faab016
 */

/**
 * 解法一：双层循环
 * 思路：详情看以下代码
 * 时间复杂度：O(n^2)，双层循环
 * 空间复杂度：O(1)
 * 注意：如果这里的 nums 是有序的话，优化嵌套循环，可以考虑 “双指针”
 */
function twoSum(nums: number[], target: number): number[] {
    const res: number[] = []
    const len = nums.length
    if (len === 0) return res

    for (let i = 0; i < len - 1; i++) {
        const n1 = nums[i]
        let flag = false // 是否得到结果

        for (let j = i + 1; j < len; j++) {    
            const n2 = nums[j]
            if (n1 + n2 === target) {
                res.push(i)
                res.push(j)
                flag = true
                break
            }
        }

        if (flag) break
    }

    return res
};

/**
 * 解法二：哈希
 * 思路：遍历的同时借助哈希表，记录值和下标
 * 时间复杂度：O(n)，最多遍历数组一遍，每次查询哈希表都是O(1)
 * 空间复杂度：O(n)，最坏情况下找到数组结尾才找到，其他都加入哈希表，哈希表最长 n - 1
 */
function twoSum(nums: number[], target: number): number[] {
    const res: number[] = []
    const len = nums.length
    if (len === 0) return res

    const map = new Map()

    for (let i = 0; i < len; i++) {
        const temp = target - nums[i]
        if (!map.has(temp)) {
            map.set(nums[i], i)
        } else {
            res.push(map.get(temp))
            res.push(i)
            return res
        }
    }

    return res
};
