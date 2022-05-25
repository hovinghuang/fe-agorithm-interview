<h1>前端算法面试（高频题库&题目解析）</h1>
<br>

> 一站式解决前端面试遇到的算法问题，咱们只专注于前端高频算法。
<br>

#### 解决痛点：

（1）LeetCode 题目太多，不知从何刷起？面试题目有些是前端常考，有些是后端常考？
<br>
答：本站参照 [CodeTop](https://codetop.cc/home)上的前端算法题目考察频度，抽取前 60 道题，知道你时间宝贵，咱们要把时间花在刀刃上。
<br>
（2）LeetCode 上面的题解鱼龙混杂，有些直接题目直接贴代码，没有任何分析过程，看不懂？
<br>
答：本站会带你理解题目，并且给出解题思路，分析时间&空间复杂度，一题多解，带你彻底搞懂。
<br>
（3）GitHub 有些仓库为了吸引关注数目，会尽量把所有题目列的很’全‘（刷不完那一种），根本没有照顾到求职心切的人的心情？
<br>
答：本站只做专精，不搞大而全。根据考试频率划分层次，让你做题时心里有数，减少求职者刷算法时的心理负担。
<br>
<br>

#### 刷题顺序：

首先我们要做好一个心理准备，对于大多数算法小白或者平时没有刷算法题习惯的人来说，刷完第一遍肯定会忘的。<br>
那么搞清楚刷题的目的（进大厂拿高薪）、要刷的次数（建议三次以上）、以及每一遍的刷题目的就很重要。<br>
将知识梳理结构化有利于记忆，而且多刷几次可以加深记忆这是毋庸置疑的。<br>
<br>
对于0基础小白，建议刷题前可先过一遍算法入门基础知识，以下是我梳理的一些基础知识点，<br>
主要是：<br>
（1）JS基础（你知道数组的哪些操作是会改变自身的？sort方法你真的了解？）<br>
（2）大学计算机专业课之一`算法与数据结构`这门课的主要内容的总结。（非科班同学必看，科班同学也可以复习一下）<br>    
- [前端算法入门一：刷算法题常用的JS基础扫盲](https://juejin.cn/post/7087134135193436197)
- [前端算法入门二：时间空间复杂度&8大数据结构的JS实现](https://juejin.cn/post/7087286814230183943)
- [前端算法入门三：5大排序算法&2大搜索&4大算法思想](https://juejin.cn/post/7088725301974269960)


推荐刷题顺序：<br>
第一遍：<br>
刷前端高频60，先把题目看懂，尝试自己解出来，实在想不出答案直接看题解，千万别浪费时间硬刚，<br>
其次要把题解看透，每一种解法的时间复杂度是怎么来的搞清楚，每一种解法思路&优劣也要搞清楚<br>
第二遍：<br>
参考专题突破的分类，学习一些相应的解题技巧，自己要会总结记到本本上，比如遇到“二叉树”遍历相关题型，首先想到 DFS & BFS<br>
第三遍：<br>
自己不看答案，靠自己前面两遍的刷题记忆以及自己总结的解题技巧，认认真真把每道题做出来，做不出来的题就圈出来，分析一下做不出来的原因<br>
更多遍：<br>
针对于第三遍做题技巧和思路的查漏补缺<br>

#### 使用方法：

Windows or Linux 可以用 （CTRL + click）题目 or 题解 打开一个新窗口。
<br>
这样当前页面可以保留，对于刷题比较友好。同理 MAC OS 可以用 CMD + click 

<br>

#### CodeTop 前端高频 60 （第1 ~ 20题）
<br>

*已完成的题目我会将其序号加星号*

|  序号 |  题目名称 |  考频  | LeetCode | 牛客 | 考点 | 难度 |
|  ----  |  ----  | ----  |  ----  |  ----  |  ----  |  ----  |
| 1* | [无重复字符的最长子串](./src/00-codetop-fontend-100/01-length-of-longest-substring.ts)| 58 |  [题目](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/) [题解](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/by-hovinghuang-qugo/)|  [题目](https://www.nowcoder.com/practice/b56799ebfd684fb394bd315e89324fb4?tpId=295&tqId=1008889&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295) [题解](https://blog.nowcoder.net/n/fce41b44190449f18c605a0a41db9c78) | `双指针` `哈希` | `medium` |
| 2* | [合并两个有序数组](./src/00-codetop-fontend-100/02-merge-sorted-arr.ts)| 44 |  [题目](https://leetcode-cn.com/problems/merge-sorted-array/) [题解](https://leetcode-cn.com/problems/merge-sorted-array/solution/by-hovinghuang-58f6/)|  [题目](https://www.nowcoder.com/practice/89865d4375634fc484f3a24b7fe65665?tpId=295&tqId=658&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295) [题解](https://blog.nowcoder.net/n/950d8331e9004749adc1a3d98a5ec29f) | `双指针` | `easy` |
| 3* | [字符串相加](./src/00-codetop-fontend-100/03-add-strings.ts)| 39 |  [题目](https://leetcode-cn.com/problems/add-strings/) [题解](https://leetcode-cn.com/problems/add-strings/solution/by-hovinghuang-l59r/)|  [题目](https://www.nowcoder.com/practice/11ae12e8c6fe48f883cad618c2e81475?tpId=295&tqId=1061819&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295) [题解](https://blog.nowcoder.net/n/1027295c5c8d44f7bbfe2b276e5adf20) | `双指针` `模拟` | `easy` |
| 4* | [比较版本号](./src/00-codetop-fontend-100/04-compare-version.ts)| 38 |  [题目](https://leetcode-cn.com/problems/compare-version-numbers/) [题解](https://leetcode-cn.com/problems/compare-version-numbers/solution/by-hovinghuang-rmlf/)|  [题目](https://www.nowcoder.com/practice/2b317e02f14247a49ffdbdba315459e7) [题解](https://blog.nowcoder.net/n/5569dbf30e3e45ea977152a629d86439) | `字符串` | `medium` |
| 5* | [有效的括号](./src/00-codetop-fontend-100/05-is-valid-brackets.ts)| 37 |  [题目](https://leetcode-cn.com/problems/valid-parentheses/) [题解](https://leetcode-cn.com/problems/valid-parentheses/solution/by-hovinghuang-6gz1/)|  [题目](https://www.nowcoder.com/practice/37548e94a270412c8b9fb85643c8ccc2?tpId=295&tqId=726&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295) [题解](https://blog.nowcoder.net/n/620e933e59534064a9722bfa6da0c3d0) | `栈` | `easy` |
| 6* | [两数之和](./src/00-codetop-fontend-100/06-two-sum.ts)| 34 |  [题目](https://leetcode-cn.com/problems/two-sum/) [题解](https://leetcode-cn.com/problems/two-sum/solution/by-hovinghuang-8jqr/)|  [题目](https://www.nowcoder.com/practice/20ef0972485e41019e39543e8e895b7f?tpId=295&tqId=745&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295) [题解](https://blog.nowcoder.net/n/61a9e5d2ac2f46db9f6f9e324faab016) | `哈希` | `easy`
| 7* | [爬楼梯](./src/00-codetop-fontend-100/07-climb-stairs.ts)| 25 |  [题目](https://leetcode-cn.com/problems/climbing-stairs/) [题解](https://leetcode-cn.com/problems/climbing-stairs/solution/by-hovinghuang-bl5r/)|  [题目](https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4) [题解](https://blog.nowcoder.net/n/7057ccebe8fd452580442b74ffbb8d90) | `递归` `动态规划` | `easy` |
| 8* | [全排列](./src/00-codetop-fontend-100/08-permutations.ts)| 25 |  [题目](https://leetcode-cn.com/problems/permutations/) [题解](https://leetcode-cn.com/problems/permutations/solution/by-hovinghuang-ubrb/)|  [题目](https://www.nowcoder.com/practice/4bcf3081067a4d028f95acee3ddcd2b1) [题解](https://blog.nowcoder.net/n/02102d26f1bb4026af9be0ec38984ec9) | `回溯` `递归` | `medium` |
| 9* | [最大子序和](./src/00-codetop-fontend-100/09-max-sub-array.ts)| 26 |  [题目](https://leetcode-cn.com/problems/maximum-subarray/) [题解](https://leetcode-cn.com/problems/maximum-subarray/solution/by-hovinghuang-exw9/)|  [题目](https://www.nowcoder.com/practice/459bd355da1549fa8a49e350bf3df484) [题解](https://blog.nowcoder.net/n/8d36ffcdc332432197d9f44e6af0e78c) | `贪心` `动态规划` | `easy` |
| 10*| [路径总和](./src/00-codetop-fontend-100/11-path-sum.ts)| 24 |  [题目](https://leetcode-cn.com/problems/path-sum/) [题解](https://leetcode-cn.com/problems/path-sum/solution/by-hovinghuang-ax6m/)|  [题目](https://www.nowcoder.com/practice/508378c0823c423baa723ce448cbfd0c) [题解](https://blog.nowcoder.net/n/b763226e0fd74c01a2a643a10db22c7b) | `递归` `DFS` | `easy` |
| 11*| [反转链表](./src/00-codetop-fontend-100/10-reverse-linked-list.ts)| 22 |  [题目](https://leetcode-cn.com/problems/reverse-linked-list/) [题解](https://leetcode-cn.com/problems/reverse-linked-list/solution/by-hovinghuang-zhkh/)|  [题目](https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca) [题解](https://blog.nowcoder.net/n/087ff0e6f04c4ff699596619f7b4adfd) | `链表` `递归` | `easy` |
| 12*| [三数之和](./src/00-codetop-fontend-100/14-three-sum.ts)| 22 |  [题目](https://leetcode-cn.com/problems/3sum/) [题解](https://leetcode-cn.com/problems/3sum/solution/by-hovinghuang-mo14/)|  [题目](https://www.nowcoder.com/practice/345e2ed5f81d4017bbb8cc6055b0b711) [题解](https://blog.nowcoder.net/n/c9e6f346004f4aedaf087cbdb099b2e6) | `双指针` | `medium` | 
| 13*| [二叉树的层序遍历](./src/00-codetop-fontend-100/12-binary-tree-level-order-traversal.ts)| 23 |  [题目](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/) [题解](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/by-hovinghuang-1hvt/)|  [题目](https://www.nowcoder.com/practice/04a5560e43e24e9db4595865dc9c63a3) [题解](https://blog.nowcoder.net/n/10b0073f1d0043eba3d0f9646e43bbb4) | `二叉树` `BFS` | `medium` |
| 14*| [数组中的第K个最大元素](./src/00-codetop-fontend-100/13-kth-largest-element-in-an-array.ts)| 22 |  [题目](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/) [题解](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/by-hovinghuang-mes5/)|  [题目](https://www.nowcoder.com/practice/e016ad9b7f0b45048c58a9f27ba618bf) [题解](https://blog.nowcoder.net/n/ea1b2f2bf02b48d38c75a4e684b5471e) | `快速排序` `二分` | `medium` |
| 15*| [买卖股票的最佳时机](./src/00-codetop-fontend-100/15-best-time-to-buy-and-sell-stock.ts)| 19 |  [题目](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/) [题解](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/by-hovinghuang-6qhi/)|  [题目](https://www.nowcoder.com/practice/64b4262d4e6d4f6181cd45446a5821ec) [题解](https://blog.nowcoder.net/n/4430ac0f65294e019d48345423b7e62f) | `贪心` `动态规划` | `easy` |
| 16*| [手撕快速排序](./src/00-codetop-fontend-100/16-sort-an-array.ts)| 19 |  [题目](https://leetcode-cn.com/problems/sort-an-array/) [题解](https://leetcode-cn.com/problems/sort-an-array/solution/by-hovinghuang-4j3t/)|  [题目](https://www.nowcoder.com/practice/2baf799ea0594abd974d37139de27896) [题解](https://blog.nowcoder.net/n/ed60ab35639e4289bf51b7253d3a5c45) | `快速排序` `二分` | `medium` |
| 17*| [环形链表](./src/00-codetop-fontend-100/17-linked-list-cycle.ts)| 20 |  [题目](https://leetcode-cn.com/problems/linked-list-cycle/) [题解](https://leetcode-cn.com/problems/linked-list-cycle/solution/by-hovinghuang-ktep/)|  [题目](https://www.nowcoder.com/practice/650474f313294468a4ded3ce0f7898b9) [题解](https://blog.nowcoder.net/n/ab8ae19d162a46c38761246e67aaf06f) | `双指针` `哈希` | `easy` |
| 18*| [最长回文子串](./src/00-codetop-fontend-100/18-longest-palindromic-substring.ts)| 21 |  [题目](https://leetcode-cn.com/problems/longest-palindromic-substring/) [题解](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/by-hovinghuang-0ru8/)|  [题目](https://www.nowcoder.com/practice/b4525d1d84934cf280439aeecc36f4af) [题解](https://blog.nowcoder.net/n/2759f3a8d3d742a7aca16768d196fc21) | `动态规划` | `medium` | 
| 19*| [求根节点到叶节点数字之和](./src/00-codetop-fontend-100/19-sum-root-to-leaf-numbers.ts)| 18 |  [题目](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/) [题解](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/solution/by-hovinghuang-fq9e/)|  [题目](https://www.nowcoder.com/practice/185a87cd29eb42049132aed873273e83) [题解](https://blog.nowcoder.net/n/08dbb5d39ecb4776889e7d8a7f31f736) | `DFS` `BFS` | `medium` |
| 20*| [二分查找](./src/00-codetop-fontend-100/20-binary-search.ts)| 15 |  [题目](https://leetcode-cn.com/problems/binary-search/) [题解](https://leetcode-cn.com/problems/binary-search/solution/by-hovinghuang-ks00/)|  [题目](https://www.nowcoder.com/practice/d3df40bd23594118b57554129cadf47b?) [题解](https://blog.nowcoder.net/n/18779274e55745b682ab9be9bb9f438d) | `递归` | `easy` |
 
#### CodeTop 前端高频 60 （第21 ~ 40题）
<br>

*已完成的题目我会将其序号加星号*
 
|  序号 |  题目名称 |  考频  | LeetCode | 牛客 | 考点 | 难度 |
|  ----  |  ----  | ----  |  ----  |  ----  |  ----  |  ----  |
| 21*| [岛屿数量](./src/00-codetop-fontend-100/21-number-of-islands.ts)| 15 |  [题目](https://leetcode-cn.com/problems/number-of-islands/) [题解](https://leetcode-cn.com/problems/number-of-islands/solution/by-hovinghuang-d8tz/)|  [题目](https://www.nowcoder.com/practice/0c9664d1554e466aa107d899418e814e) [题解](https://blog.nowcoder.net/n/73610fd87bd94e9590a4d71b9a898f79) | `DFS` `BFS` | `medium` |
| 22*| [括号生成]()| 13 |  [题目]() [题解]()|  [题目]() [题解]() | `递归` | `medium` |
| 23*| [合并两个有序链表]()| 12 |  [题目]() [题解]()|  [题目]() [题解]() | `链表` `递归` | `easy` |
| 24*| [螺旋矩阵]()| 13 |  [题目]() [题解]()|  [题目]() [题解]() | `-` `-` | `medium` |
| 25*| [最长上升子序列]()| 12 |  [题目]() [题解]()|  [题目]() [题解]() | `动态规划` `贪心` `二分` | `medium` |
| 26*| [二叉树的中序遍历]()| 13 |  [题目]() [题解]()|  [题目]() [题解]() | `二叉树` `DFS` `BFS` | `easy` |
| 27*| [二叉树的最大深度]()| 12 |  [题目]() [题解]()|  [题目]() [题解]() | `二叉树` `-` | `easy` |
| 28| [岛屿的最大面积]()| 11 |  [题目]() [题解]()|  [题目]() [题解]() | `DFS` `BFS` | `medium` |
| 29| [LRU缓存机制]()| 11 |  [题目]() [题解]()|  [题目]() [题解]() | `-` `-` | `medium` |
| 30| [零钱兑换]()| 12 |  [题目]() [题解]()|  [题目]() [题解]() | `-` `-` | `medium` |
| 31| [链表中倒数第K个节点]()| 11 |  [题目]() [题解]()|  [题目]() [题解]() | `链表` `-` | `easy` |
| 32| [斐波那契数列]()| 10 |  [题目]() [题解]()|  [题目]() [题解]() | `递归` `-` | `easy` |
| 33| [翻转二叉树]()| 10 |  [题目]() [题解]()|  [题目]() [题解]() | `二叉树` `-` | `easy` |
| 34| [长度最小的子数组]()| 9 |  [题目]() [题解]()|  [题目]() [题解]() | `-` `-` | `medium` |
| 35| [接雨水]()| 9 |  [题目]() [题解]()|  [题目]() [题解]() | `-` `-` | `hard` |
| 36| [最长重复子数组]()| 10 |  [题目]() [题解]()|  [题目]() [题解]() | `-` `-` | `medium` |
| 37| [二叉树的前序遍历]()| 9 |  [题目]() [题解]()|  [题目]() [题解]() | `二叉树` `-` | `easy` |
| 38| [合并区间]()| 10 |  [题目]() [题解]()|  [题目]() [题解]() | `-` `-` | `medium` |
| 39| [二叉树的锯齿形层序遍历]()| 8 |  [题目]() [题解]()|  [题目]() [题解]() | `二叉树` `-` | `medium` |
| 40| [由前序中序遍历构造二叉树]()| 8 |  [题目]() [题解]()|  [题目]() [题解]() | `二叉树` `-` | `medium` |

#### CodeTop 前端高频 60 （第41 ~ 60题）
<br>

*已完成的题目我会将其序号加星号*
 
|  序号 |  题目名称 |  考频  | LeetCode | 牛客 | 考点 | 难度 |
|  ----  |  ----  | ----  |  ----  |  ----  |  ----  |  ----  |
| 41 | [不同路径]() | 8 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 42 | [青蛙跳台阶问题]() | 8 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `easy` |
| 43 | [打乱数组]() | 8 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 44 | [相交链表]() | 8 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `easy` |
| 45 | [旋转图像]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 46 | [复原IP地址]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 47 | [圆圈中最后剩下的数字]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `easy` |
| 48 | [K个一组翻转链表]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `hard` |
| 49 | [斐波那契数]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `easy` |
| 50 | [二叉树的右视图]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 51 | [最小栈]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `easy` |
| 52 | [打家劫舍]() | 7 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 53 | [两数相加]() | 6 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 54 | [移动零]() | 6 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `easy` |
| 55 | [删除链表的倒数第 N 个结点]() | 6 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 56 | [最长公共前缀]() | 6 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `easy` |
| 57 | [字符串相乘]() | 6 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 58 | [二叉搜索树中第K小的元素]() | 6 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 59 | [最小路径和]() | 6 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |
| 60 | [阿拉伯数字转中文数字]() | 5 | [题目]() [题解]() | [题目]() [题解]() | `` `` | `medium` |

<br>

TODO LIST （已完成的加星号）
- [前端算法·专项攻破一：链表]()
- [*前端算法·专项攻破二：二分查找&排序](https://juejin.cn/post/7093921550277181470)
- [前端算法·专项攻破三：二叉树]()
- [前端算法·专项攻破四：栈&队列]()
- [前端算法·专项攻破五：哈希]()
- [前端算法·专项攻破六：递归&回溯]()
- [前端算法·专项攻破七：动态规划]()
- [前端算法·专项攻破八：字符串]()
- [前端算法·专项攻破九：双指针]()
- [前端算法·专项攻破十：贪心]()
- [前端算法·专项攻破十一：模拟]()

<br>
本站持续更新（每周一凌晨更新20份题解，每个月的1号同步CodeTop上的考频），敬请期待……
<br>
<br>
每一个的一个小小的 star 都汇聚成我更新的动力，非常感谢您的关注。