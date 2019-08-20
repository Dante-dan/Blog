/**
 * @author: duanjl
 * @date: 2019/8/20
 * @last: 2019/8/20
 * @description: 从数组结构遍历为树结构，是flatten-tree的反函数
 * */
/**
 * generateTree
 * @constructor
 * @param arr
 */
function generateTree(arr) {
  const res = [];
  // 处理成以id为key的对象，能去重
  const map = arr.reduce((res, item) => ((res[item.id] = {...item}), res), {});
  console.log(map);
  for (const item of Object.values(map)) {
    if (!item.parentId) {
      // 根节点
      res.push(item)
    } else {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item)
    }
  }
  return res
}

/**
 * @example
 * */
const array = [ { id: '1-1', value: '1-1', parentId: '1' },
  { id: '1-2', value: '1-2', parentId: '1' },
  { id: '1-3-1', value: '1-3-1', parentId: '1-3' },
  { id: '1-3-2', value: '1-3-2', parentId: '1-3' },
  { id: '1-3-3-1', value: '1-3-3-1', parentId: '1-3-3' },
  { id: '1-3-3-2', value: '1-3-3-2', parentId: '1-3-3' },
  { id: '1-3-3-3', value: '1-3-3-3', parentId: '1-3-3' },
  { id: '1-3-3', value: '1-3-3', parentId: '1-3' },
  { id: '1-3', value: '1-3', parentId: '1' },
  { id: '1-4-1', value: '1-4-1', parentId: '1-4' },
  { id: '1-4-2', value: '1-4-2', parentId: '1-4' },
  { id: '1-4', value: '1-4', parentId: '1' },
  { id: '1', value: '1' },
  { id: '2-3-3-1', value: '2-3-3-1', parentId: '2-3-3' },
  { id: '2-3-3-2', value: '2-3-3-2', parentId: '2-3-3' },
  { id: '2-3-3-3', value: '2-3-3-3', parentId: '2-3-3' },
  { id: '2-3-3', value: '2-3-3', parentId: '2-3' },
  { id: '2-3', value: '2-3', parentId: '2' },
  { id: '2', value: '2' },
  { id: '3', value: '3' } ];
console.log(JSON.stringify(generateTree(array)));
