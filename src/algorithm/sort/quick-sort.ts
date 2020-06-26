/**
 * @author: duanjl
 * @date: 2020/6/26
 * @description: 快速排序：找到基准，将记录分为两个独立的部分，其中一部分均比另外一部分小，则继续对子序列排序，以求整个序列有序。分治法 + 递归
 */
export default function quickSort(array: number[]) {
  const { length } = array;
  if(length <= 1) {
    return array;
  }
  const pivotIndex = Math.floor(array.length / 2);
  const pivotValue = array.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivotValue, ...quickSort(right)];
}

// 最坏情况：T(n) = O(n lgn);
// 最坏情况：T(n) = O(n^2);
// 平均情况：T(n) = O(n lgn);

console.log(quickSort([1, 19, 17, 2, 1, 100, 92, 2, 5, 20, 1, 7, 11, 90, 200]))

