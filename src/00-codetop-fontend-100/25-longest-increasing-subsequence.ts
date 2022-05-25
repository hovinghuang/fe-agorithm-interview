// @ts-nocheck
/**
 * 题目名称：最长递增子序列
 * leetcode 题目: https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * leetcode 题解: https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/by-hovinghuang-thvh/
 * 牛客网 题目: https://www.nowcoder.com/practice/5164f38b67f846fb8699e9352695cd2f
 * 牛客网 题解: https://blog.nowcoder.net/n/df338bdebd0e4101b41b1978f6f3f98a
 */

/**
 * 解法一：动态规划
 * 思路：
 * 时间复杂度：O(n^2)，其中 n 为数组 nums 的长度。
 * 空间复杂度：O(n)，需要额外使用长度为 n 的 dp 数组。
 */
function lengthOfLIS(nums: number[]): number {
    if (nums.length == 0) return 0
    
    const dp: number[] = []
    dp[0] = 1
    let maxans = 1

    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        maxans = Math.max(maxans, dp[i])
    }

    return maxans
};

/**
 * 解法二：贪心 + 二分查找
 * 思路：
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 */
function lengthOfLIS(nums: number[]): number {
    if (nums.length == 0) return 0

    let len = 1
    let n = nums.length
    const d: number[] = []
    d[len] = nums[0]
    for (let i = 1; i < n; ++i) {
        if (nums[i] > d[len]) {
            d[++len] = nums[i]
        } else {
            let l = 1
            let r = len
            let pos = 0
            while (l <= r) {
                let mid = (l + r) >> 1
                if (d[mid] < nums[i]) {
                    pos = mid
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
            d[pos + 1] = nums[i]
        }
    }
    
    return len
};
