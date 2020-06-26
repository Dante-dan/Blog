/**
 * @author: duanjl
 * @date: 2020/6/26
 * @description: 希尔排序 -- 插入排序的改进版本；把记录按下标的一定增量分组，对每组使用直接插入排序；随着增量逐渐减少，组内数字越来越多。
 */

export default function shellSort(array: number[]) {
  const { length } = array;
  if(length <= 1) {
    return array;
  }
  // 分多少组
  let gap = parseInt(String(length / 2));
  while(gap > 0) {
    for (let i = gap; i < length; i ++) {
      let currentValue = array[i];
      let preIndex = i - gap;
      while(preIndex >= 0 && array[preIndex] > currentValue) {
        array[preIndex + gap] = array[preIndex];
        preIndex -= gap;
      }
      array[preIndex + gap] = currentValue;
    }
    gap = parseInt(String(gap / 2));
  }
  return array;
}

// 最坏情况：T(n) = O(n lgn);
// 最坏情况：T(n) = O(n lgn);
// 平均情况：T(n) = O(n lgn);

console.log(shellSort([1, 19, 17, 2, 1, 100, 92, 2, 5, 20, 1, 7, 11, 90, 200]))
