/**
 * @author: duanjl
 * @date: 2020/6/26
 * @description: 选择排序：每次从数据集合中选出最小的值，放在最开始的位置。依次往下
 */
export default function selectionSort(array: number[]) {
  const { length } = array;
  if(length <= 1) {
    return array;
  }
  for(let i = 0; i < length; i++) {
    // 因为要把最小的数，放在最开始的位置，所以每次都要遍历完所有的数。
    let minIndex = i;
    for(let j = i + 1; j < length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let tempMin = array[minIndex];
    array[minIndex] = array[i];
    array[i] = tempMin;
  }
  return array;
}

// 选择排序是性能最稳定的排序算法： T(n) = O(n^2);
// 每次都要比较完全部的数

console.log(selectionSort([1, 19, 17, 2, 1, 100, 92, 2, 5, 20, 1, 7, 11, 90, 200]))

