// @ts-nocheck
/**
 * 题目名称：比较版本号
 * leetcode 题目: https://leetcode-cn.com/problems/compare-version-numbers/
 * leetcode 题解: https://leetcode-cn.com/problems/compare-version-numbers/solution/by-hovinghuang-rmlf/
 * 牛客网 题目: https://www.nowcoder.com/practice/2b317e02f14247a49ffdbdba315459e7
 * 牛客网 题解: https://blog.nowcoder.net/n/5569dbf30e3e45ea977152a629d86439
 */

/**
 * 解法一：分割截取
 * 思路：
 *（1）先根据.号分割成字符串数组，获取两个数组中的最大长度值，
 *（2）按顺序遍历比较，详细过程看以下代码
 * 时间复杂度：O(max(n, m))
 * 空间复杂度：O(max(n, m))
 */
function compareVersion(version1: string, version2: string): number {
    const arr1: any[] = version1.split('.')
    const arr2: any[] = version2.split('.')
    const maxLen = Math.max(arr1.length, arr2.length)
     
    for (let i = 0; i < maxLen; i++) {
        // arr1[i] - '0' ，js 会强制转换成 number 然后相减
        // 例如：（'01' - '0'）， 结果是 1 （number 类型）
        // @ts-ignore
        const num1 = arr1[i] ? arr1[i] - '0' : 0
        // @ts-ignore
        const num2 = arr2[i] ? arr2[i] - '0' : 0
        if (num1 > num2) return 1
        if (num1 < num2) return -1
    }
     
    return 0
};
