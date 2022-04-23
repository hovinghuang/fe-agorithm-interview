// @ts-nocheck
/**
 * 题目名称：买卖股票的最佳时机
 * leetcode 题目: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * leetcode 题解: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/by-hovinghuang-6qhi/
 * 牛客网 题目: https://www.nowcoder.com/practice/64b4262d4e6d4f6181cd45446a5821ec
 * 牛客网 题解: https://blog.nowcoder.net/n/4430ac0f65294e019d48345423b7e62f
 */

/**
 * 解法一：暴力法（嵌套循环）
 * 思路：
 * （1）我们需要找出给定数组中两个数字之间的最大差值（即，最大利润）。
 * （2）此外，第二个数字（卖出价格）必须大于第一个数字（买入价格）。
 * 时间复杂度：O(n^2)。
 * 空间复杂度：0(1)，只使用了一个常数变量。
 */
function maxProfit(prices: number[]): number {
    let maxprofit = 0

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i]
            maxprofit = Math.max(maxprofit, profit)
        }
    }

    return maxprofit
};

/**
 * 解法二：贪心
 * 思路：
 * （1）将第一天看成价格最低，后续遍历的时候遇到价格更低则更新价格最低，
 * （2）每次都比较最大收益与当日价格减去价格最低的值，选取最大值作为最大收益
 * 时间复杂度：O(n)。
 * 空间复杂度：0(1)，只使用了常数变量。
 */
function maxProfit(prices: number[]): number {
    let maxprofit = 0
    if (prices.length === 0) return maxprofit

    let minprice = prices[0] // 维护最低股票价格

    for (let i = 0; i < prices.length; i++) {
        minprice = Math.min(minprice, prices[i])
        maxprofit = Math.max(maxprofit, prices[i] - minprice)
    }

    return maxprofit
};

/**
 * 解法三：动态规划
 * 思路：
 * （1）用dp[i[0]表示 第i天不持股到该天为止的最大收益，dp[i][1]表 示第i天持股，到该天为止的最大收益。
 * （2）(初始状态) 第一 天不持股，则总收益为0，dp[0][0]=0; 第- -天持股，则总收益为买股票的花费，此时为负数，dp[0][1] = - prices[0]。
 * （3）(状态转移) 对于之后的每一天，如果当天不持股，有可能是前面的若干天中卖掉了或是还没买，因此到此为止的总收益和前一天相同，也有可能是当天才
 *     卖掉，我们选择较大的状态dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 * (4) 如果当天持股，有可能是前面若千天中买了股票，当天还没卖，因此收益与前一天相同，也有可能是当天买入，此时收益为负的股价，同样是选取最大值:dp[i][1] = max(dp[i - 1][1], -prices[i])。
 * 时间复杂度：O(n)，遍历一次数组
 * 空间复杂度：0(n)，动态规划富足数组的空间。
 */
function maxProfit(prices: number[]): number {
    const len = prices.length
    if (len === 0) return 0

    const dp: number[][] = [] // dp[i][0]表示某一天不持股到该天为止的最大收益，dp[i] [1]表示某天持股，到该天为止的最大收益
    for (let i = 0; i < len; i++) {
        dp[i]= []
    }
    dp[0][0] = 0 // 第一天不持股，总收益为0
    dp[0][1] = - prices[0] // 第一天持股，总收益为减去该天的股价

    for (let i = 1; i < len; i++) { // 遍历后续每天，状态转移
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
    }

    return dp[len - 1][0] // 最后一天不持股，到该天为止的最大收益
};

