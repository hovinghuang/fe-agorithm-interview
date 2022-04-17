// @ts-nocheck
/**
 * 题目名称：字符串相加（大数加法）
 * leetcode 题目: https://leetcode-cn.com/problems/add-strings/
 * leetcode 题解: https://leetcode-cn.com/problems/add-strings/solution/by-hovinghuang-l59r/
 * 牛客网 题目: https://www.nowcoder.com/practice/11ae12e8c6fe48f883cad618c2e81475?tpId=295&tqId=1061819&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: https://blog.nowcoder.net/n/1027295c5c8d44f7bbfe2b276e5adf20
 */

/**
 * 解法一：模拟法（双尾指针法）
 * 思路：模拟我们日常加法进位过程，详细过程看代码
 * 时间复杂度：O(n)，其中 n 为较长字符的长度，遍历字符串
 * 空间复杂度：O(1)，常数级空间
 */
function addStrings(num1: string, num2: string): string {
    if (num1.length === 0) return num2
    if (num2.length === 0) return num1
     
    const res: string[] = []
    let plus = 0
    let i = num1.length - 1 // i 指向num1尾部
    let j = num2.length - 1 // j 指向num2尾部
     
    while (i >= 0 || j >= 0 || plus !== 0) {
        const sVal = (i >= 0 ? parseInt(num1[i]) : 0)
        const tVal = (j >= 0 ? parseInt(num2[j]) : 0)
        const sum = sVal + tVal + plus
        const cur = sum % 10 // 计算当前位(求余)
        res.unshift(cur + '') // 将数字转字符串插入res头部
        plus = (sum >= 10 ? 1 : 0) // 暂存进位，下次循环用到
        i--
        j--
    }
     
    return res.join('')
};
