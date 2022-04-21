// @ts-nocheck
/**
 * 题目名称：括号生成
 * leetcode 题目: https://leetcode-cn.com/problems/generate-parentheses/
 * leetcode 题解: https://leetcode-cn.com/problems/generate-parentheses/solution/by-hovinghuang-ueaq/
 * 牛客网 题目: https://www.nowcoder.com/practice/c9addb265cdf4cdd92c092c655d164ca
 * 牛客网 题解: https://blog.nowcoder.net/n/14c439288cc944d397206965bcc2d0bc
 */

/**
 * 解法一：递归
 * 思路：
 * （1）如果使用了一个左括号以后，那么还剩下n-1个左括号和n个右括号，也是将这些括号连接成-一个字符串，就相当于是原问题的子问题，因此我们使用递归。
 * （2）但是这样递归不能保证括号一 定合法，我们需要保证左括号出现的次数比右括号多时我们再使用右括号就一定能保证括号合法了，
 * 因此每次需要检查左括号和右括号的使用次数。
 * 时间复杂度：复杂度取决于有多少个合法括号组合
 * 空间复杂度：O(n)，递归栈最大空间，其中res数组是返回时必须要的，不算额外空间
 */
function generateParenthesis(n: number): string[] {
    const res: string[] = []
    resursion(0, 0, '', res, n)
    return res
};
function resursion(left: number, right: number, temp: string, res: string[], n: number): string[] {
    if (left === n && right === n) {
        res.push(temp)
        return
    }
    if (left < n) {
        resursion(left + 1, right, temp + '(', res, n)
    }
    if (right < n && left > right) {
        resursion(left, right + 1, temp + ')', res, n)
    }
}