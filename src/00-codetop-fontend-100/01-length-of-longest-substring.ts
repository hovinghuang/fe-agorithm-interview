/**
 * 题目名称：无重复字符的最长子串（类似题目：最长无重复子数组）
 * leetcode 题目: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * leetcode 题解: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/by-hovinghuang-qugo/
 * 牛客网 题目: https://www.nowcoder.com/practice/b56799ebfd684fb394bd315e89324fb4?tpId=295&tqId=1008889&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: https://blog.nowcoder.net/n/fce41b44190449f18c605a0a41db9c78
 */

/**
 * 解法一：滑动窗口（reduce累加器）
 * 思路：
 * （1）先判断字符串 s 的长度，如果 s.length <= 1 直接返回 s.length
 * （2）将字符串 s 转成数组，这样就可以用数组的 reduce 累加器
 * （3）reduce 滑动窗口过程处理（详细过程看以下代码），返回最长子串的长度 maxLen
 * 时间复杂度：O(n)，n 代表字符串长度，reduce 会将字符串的每一个字符都遍历一遍
 * 空间复杂度：O(n)，n 代表字符串长度，将字符串转成了数组（额外空间）
 */
function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length

    let maxLen = 0
    const strArr = s.split('')

    strArr.reduce((total, value) => {
        const index = total.indexOf(value)

        // 拼接到 total 尾部
        total += value

        if (index === -1) {
            // 如果该字符没有在 total 中出现过，获取目前为止滑动窗口的最大值
            maxLen = Math.max(total.length, maxLen)
        } else {
            // 如果该字符有在 total 中出现过，则剔除掉 total 中 0 ~ index 的字符
            total = total.slice(index + 1)
        }

        return total
    }, '')

    return maxLen
};
