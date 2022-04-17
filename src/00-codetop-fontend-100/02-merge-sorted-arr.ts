// @ts-nocheck
/**
 * 题目名称：合并两个有序的数组
 * leetcode 题目: https://leetcode-cn.com/problems/merge-sorted-array/
 * leetcode 题解: https://leetcode-cn.com/problems/merge-sorted-array/solution/by-hovinghuang-58f6/
 * 牛客网 题目: https://www.nowcoder.com/practice/89865d4375634fc484f3a24b7fe65665?tpId=295&tqId=658&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: https://blog.nowcoder.net/n/950d8331e9004749adc1a3d98a5ec29f
 */

/**
 * 解法一：JS Sort
 * 思路：
 * （1）先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
 * （2）将 B shift 填到 A 尾部的扩容区域，然后用 sort 排序
 * 时间复杂度：O(nlogn)， JS sort 方法基于快速排序实现
 * 空间复杂度：O(1)，常数级变量，无额外空间
 */
export function merge(A: number[], m: number, B: number[], n: number) {
    if (!B.length || !n) return

    for (let i = m; i < m + n; i++) {
        A[i] = B.shift()
    }

    // 升序排列
    A.sort((a, b) => a - b) 
}

/**
 * 解法二：双指针
 * 思路：
 * （1）先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
 * （2）使用三个指针，aIndex 指向数组 A 的最大元素，bIndex 指向数组B的最大元素，mIndex 指向数组A空间的结尾处。
 * （3）从两个数组最大的元素开始遍历，直到某一个结束，每次取出较大的一个值放入数组 A 空间的最后，然后指针依次往前。
 * （4）如果数组 B 先遍历结束，数组 A 前半部分已经存在了，不用管;但是如果数组 A 先遍历结束，则需要把数组 B 剩余的前半部分依次逆序加入数组 A 前半部分
 * 时间复杂度：O(m + n)，最坏情况遍历整个数组 A 和 数组 B
 * 空间复杂度：O(1)，常数级变量，无额外空间
 */
export function merge(A: number[], m: number, B: number[], n: number) {
    if (!B.length || !n) return
    if (!A.length || !m) {
        for (let i = 0; i < n; i++) {
            A[i] = B.shift()
        }
    }
 
    let aIndex: number = m - 1 // 指向数组 A 的结尾
    let bIndex: number = n - 1 // 指向数组 B 的结尾
    let mIndex: number = m + n - 1 // 指向数组 A 空间的结尾
     
    while (aIndex >= 0 && bIndex >= 0) {
        if (A[aIndex] >= B[bIndex]) {
            A[mIndex--] = A[aIndex--]
        } else {
            A[mIndex--] = B[bIndex--]
        } 
       
        // 数组 A 遍历完，B 还有
        if (aIndex < 0) {
            while (bIndex >= 0) {
                A[mIndex--] = B[bIndex--]
            }
        }
    }
}
