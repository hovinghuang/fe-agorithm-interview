// @ts-nocheck
/**
 * 题目名称：LRU 缓存
 * leetcode 题目: https://leetcode-cn.com/problems/lru-cache/
 * leetcode 题解: 
 * 牛客网 题目: 
 * 牛客网 题解: 
 */

/**
 * 解法一：
 * 思路：
 * （1）
 * 时间复杂度：
 * 空间复杂度：
 */
class LRUCache {
    private caches: Map<number, number>;
    constructor(private capacity: number = 0) {
        this.caches = new Map()
    }

    get(key: number): number {
        const val = this.caches.get(key);
        if (val !== undefined) { // 新鲜度提高，重新排序到栈顶
            this.caches.delete(key)
            this.caches.set(key, val)
            return val
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        const val = this.caches.get(key)
        if (val !== undefined) {
            this.caches.delete(key)
            this.caches.set(key, value)
        } else {
            if (this.caches.size >= this.capacity) {
                let oldKey = this.caches.keys().next().value // 最旧的key
                this.caches.delete(oldKey)
            }

            this.caches.set(key, value)
        }
    }
}

