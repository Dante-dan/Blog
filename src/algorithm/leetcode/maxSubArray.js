//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//
// 示例:
//
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
//输出: 6
//解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
//
//
// 进阶:
//
// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
// Related Topics 数组 分治算法 动态规划
// 👍 2144 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 最大连续子数组。
  // 考虑何种情况应该舍弃之前的累加
  // 如果之前的累加小于0，则应该舍弃
  // 如果当前值大于累加之后的值，则应该以当前值为最大值
  let max = -Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for(let num of nums) {
    if(sum < 0) {
      sum = 0;
    }
    sum += num;
    max = Math.max(sum, num);
    console.log(num);
  }
  return max;
};
//leetcode submit region end(Prohibit modification and deletion)
