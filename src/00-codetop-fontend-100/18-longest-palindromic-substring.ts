// @ts-nocheck
/**
 * 题目名称：最长回文子串
 * leetcode 题目: https://leetcode-cn.com/problems/longest-palindromic-substring/
 * leetcode 题解: https://leetcode-cn.com/problems/longest-palindromic-substring/solution/by-hovinghuang-0ru8/
 * 牛客网 题目: https://www.nowcoder.com/practice/b4525d1d84934cf280439aeecc36f4af
 * 牛客网 题解: https://blog.nowcoder.net/n/2759f3a8d3d742a7aca16768d196fc21
 */

/**
 * 解法一：动态规划
 * 思路：https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/
 * 时间复杂度：O(n^2)，其中 n 是字符串的长度。动态规划的状态总数为 O(n^2)，对于每个状态，我们需要转移的时间为 O(1)。
 * 空间复杂度：O(n^2)，即存储动态规划状态需要的空间。
 */
function longestPalindrome(s: string): string {
    const len = s.length
    if (len < 2) return s

    let maxLen = 1
    let begin = 0
    // dp[i][j] 表示 s[i..j] 是否是回文串
    const dp: boolean[][] = []
    for (let i = 0; i < len; i++) {
        dp[i] = []
    }
    // 初始化：所有长度为 1 的子串都是回文串
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    const charArray = s.split('')
    // 递推开始
    // 先枚举子串长度
    for (let L = 2; L <= len; L++) {
        // 枚举左边界，左边界的上限设置可以宽松一些
        for (let i = 0; i < len; i++) {
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            let j = L + i - 1
            // 如果右边界越界，就可以退出当前循环
            if (j >= len) break

            if (charArray[i] != charArray[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }

            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    
    return s.substring(begin, begin + maxLen)
};

/**
 * 解法二：中心扩展算法
 * 思路：如果是回文子串，那么它的左右两边的元素肯定是对称的，我们可以使用左右指针，从当前元素向两边扩散，以找到最长字串。
 * 时间复杂度：O(n^2)。
 * 空间复杂度：O(1)。
 */
function longestPalindrome(s: string): string {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        const str1 = palindrome(s, i, i)
        const str2 = palindrome(s, i, i + 1)
        res = res.length > str1.length ? res : str1
        res = res.length > str2.length ? res : str2
    }
    return res
};
function palindrome(s: string, left: number, right: number): string {
    // 左右指针，从s[l]和s[r]向两边扩散，找到最长回文串
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
    return s.substr(left + 1, right - left - 1)
}