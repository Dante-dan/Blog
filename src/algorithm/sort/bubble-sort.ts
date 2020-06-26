/**
 * @author: duanjl
 * @date: 2020/6/26
 * @description: 冒泡排序：每次比较相邻的两个元素，较大的放在后面，较小的放在前面。这样每次循环将最大的值放在最后的位置。
 */

export default function bubbleSort(array: number[]) {
  const { length } = array;
  if(length <= 1) {
    return array;
  }
  // 控制循环次数
  for(let i = 0; i < length; i++) {
    // 相邻比较，每次循环的最后一个就是最大值。
    for(let j = 0; j < length - 1 - i; j++) {
      if(array[j + 1] < array [j]) {
        let tempMin = array[j + 1];
        array[j + 1] = array[j];
        array[j] = tempMin;
      }
    }
  }
  return array;
}

console.log(bubbleSort([19, 10, 2, 1, 100, 92, 2, 5, 20, 10, 10, 11]))

// 返回原数组。
// 最佳情况：T(n) = O(n);
// 最差情况：T(n) = O(n^2);
// 平均情况：T(n) = O(n^2)
