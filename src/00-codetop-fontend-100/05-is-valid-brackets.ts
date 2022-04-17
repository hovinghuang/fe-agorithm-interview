// @ts-nocheck
/**
 * 题目名称：有效括号序列
 * leetcode 题目: https://leetcode-cn.com/problems/valid-parentheses/
 * leetcode 题解: https://leetcode-cn.com/problems/valid-parentheses/solution/by-hovinghuang-6gz1/
 * 牛客网 题目: https://www.nowcoder.com/practice/37548e94a270412c8b9fb85643c8ccc2?tpId=295&tqId=726&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: https://blog.nowcoder.net/n/620e933e59534064a9722bfa6da0c3d0
 */

/**
 * 解法一：栈
 * 思路：
 *（1）左括号，压栈
 *（2）右括号，则判断栈顶是否匹配（是否出栈）否则直接 return false
 * (3) 最后 return stack.length === 0
 * 时间复杂度：O(n)，其中 n 为字符串长度
 * 空间复杂度：O(n)，最坏情况下栈空间记录整个字符串长度的右括号
 */
function isMatch(left: string, right: string): boolean {
    if ((left === '{' && right === '}') 
    || (left === '[' && right === ']') 
    || (left === '(' && right === ')')) return true

    return false
}
export function isValid(s: string): boolean {
    const len = s.length
    if (len === 0) return true

    const stack = []
    const leftSymbols = '{[('
    const rightSymbols = ')]}'

    for (let i = 0; i < len; i++) {
        const char = s[i]

        if (leftSymbols.includes(char)) {
            // 左括号，压栈
            stack.push(char)
        } else if (rightSymbols.includes(char)) {
            // 右括号，判断栈顶（是否出栈）
            const top = stack[stack.length - 1]

            if (isMatch(top, char)) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
}
