// import './index.css'
// import func from './01-nowcoder-top-101/01-reverse-link-list.js'

// if (module.hot) {
//     module.hot.accept('./01-nowcoder-top-101/01-reverse-link-list', function() {
//         func()
//     })
// }
// console.log('Hello Webpack !!!')

// console.log('Hello 你好')

// # 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// ```
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// ```
// 示例 2:
// ```
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// ```
// 示例 3:
// ```
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// ```
// 示例 4:
// ```
// 输入: s = ""
// 输出: 0
// ``
// 提示：
// - 0 <= s.length <= 5 * 104
// - s 由英文字母、数字、符号和空格组成

function lengthOfLongestSubstring(str) {
    let maxLen = 0
    const strArr = str.split('')
    if (str.length <= 0) return strArr.length

    strArr.reduce((total, value) => {
        const index = total.indexOf(value)
        if (index < 0) {
            total += value
            maxLen = Math.max(total.length, maxLen)
            return total
        } else {
            total += value
            total = total.slice(index + 1)
            return total
        }
    }, '')

    return maxLen
}

// 功能测试
const str = '33213331'
console.log('输出:', lengthOfLongestSubstring(str))