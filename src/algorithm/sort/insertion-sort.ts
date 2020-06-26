/**
 * @author: duanjl
 * @date: 2020/6/26
 * @description: 插入排序：通过构建有序序列，对于未排序的数据，在有序序列中从后向前扫描，找到对应的位置并插入。
 * @description: in-place 排序【只需用到O(1)的额外空间】
 */
export default function insertionSort(array: number[]) {
  const { length } = array;
  if(length <= 1) {
    return array;
  }
  // 待插入的值,
  let currentValue;
  // 第一个元素为有序序列; i为控制外循环
  for(let i = 0; i < length - 1; i++) {
    currentValue = array[i + 1];
    // 前移指针
    let preIndex = i;
    while(preIndex >= 0 && currentValue < array[preIndex]) {
      // 因为已经是有序序列，所以能一直找到 小于currentValue的index
      array[preIndex + 1] = array[preIndex];
      preIndex -= 1;
    }
    array[preIndex + 1] = currentValue;
  }
  return array;
}

// 最佳情况：T(n) = O(n);
// 最坏情况：T(n) = O(n^2);
// 平均情况：T(n) = O(n^2)

console.log(insertionSort([1, 19, 17, 2, 1, 100, 92, 2, 5, 20, 1, 7, 11, 90, 200]))

