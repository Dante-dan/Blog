/**
 * @author: duanjl
 * @date: 2020/6/26
 * @description: 归并排序 -- 采用分支法（Divide and Conquer），先使每个子序列有序，再合并两个有序列表。称为 二路归并。 -- 递归
 */
export default function mergeSort(array: number[]) {
  const { length } = array;
  if(length < 2) {
    return array;
  }
  const mid = parseInt(String(length / 2));
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(arr1: number[], arr2: number[]){
  const array = [...arr1, ...arr2];
  for(let i = 0, index = 0, j = 0; index < array.length; index++) {
    if(i >= arr1.length) {
      array[index] = arr2[j++];
    } else if (j >= arr2.length) {
      array[index] = arr1[i++]
    } else if (arr1[i] > arr2[j]) {
      array[index] = arr2[j++]
    } else {
      array[index] = arr1[i++]
    }
  }
  return array;
}

// 最坏情况：T(n) = O(n);
// 最坏情况：T(n) = O(n lgn);
// 平均情况：T(n) = O(n lgn);

console.log(mergeSort([1, 19, 17, 2, 1, 100, 92, 2, 5, 20, 1, 7, 11, 90, 200]))
