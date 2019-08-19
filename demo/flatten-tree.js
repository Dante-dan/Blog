/**
 * @author: duanjl
 * @date: 2019/8/19
 * @last: 2019/8/19
 * @description: 树形结构的遍历
 * */

/**
 * @typedef treeNode
 * @type {{children: [*], id: string, value: string}}
 */

/**
 * flattenTreeByRecursion
 * @constructor
 * @param {[treeNode]} data (origin tree)
 * @param {function} nodeHandle 用于将树节点处理成，treeNode 的格式 (call node transform to treeNode)
 * @param {[]} result 用于向下传递以遍历的节点 (result array)
 * @returns {[]|Array}
 */
function flattenTreeByRecursion(data, nodeHandle = value => value, result = []) {
    if (!Array.isArray(data)) return [];
    const queue = [...data];
    queue.forEach((treeNode) => {
      const currNode = nodeHandle(treeNode);
      if (currNode && Array.isArray(currNode.children)) {
        flattenTreeByRecursion(currNode.children.map(node => ({...node, parentId: currNode.id})), value => value, result);
      } else {
        result.push(currNode);
      }
    });
  return result;
}

function flattenTree(data, nodeHandle) {
  return flattenTreeByRecursion(data, nodeHandle);
}

/**
 * @example
 * flattenTree(tree)
 */
const tree = [
    {
        id: '1',
        children: [
            {
                id: '1-1',
                value: '1-1',
            },
            {
                id: '1-2',
                value: '1-2',
            },
            {
                id: '1-3',
                children: [
                    {
                        id: '1-3-1',
                        value: '1-3-1',
                    },
                    {
                        id: '1-3-2',
                        value: '1-3-2',
                    },
                    {
                        id: '1-3-3',
                        children: [
                            {
                                id: '1-3-3-1',
                                value: '1-3-3-1',
                            },
                            {
                                id: '1-3-3-2',
                                value: '1-3-3-2',
                            },
                            {
                                id: '1-3-3-3',
                                value: '1-3-3-3',
                            }
                        ]
                    }
                ],
            },
            {
                id: '1-4',
                children: [
                    {
                        id: '1-4-1',
                        value: '1-4-1',
                    },
                    {
                        id: '1-4-2',
                        value: '1-4-2',
                    },
                ],
            }
        ],
    },
    {
        id: '2',
        children: [
            {
                id: '2-3',
                children: [
                    {
                        id: '2-3-3',
                        children: [
                            {
                                id: '2-3-3-1',
                                value: '2-3-3-1',
                            },
                            {
                                id: '2-3-3-2',
                                value: '2-3-3-2',
                            },
                            {
                                id: '2-3-3-3',
                                value: '2-3-3-3',
                            }
                        ]
                    }
                ],
            },
        ],
    },
  {id: '3',value: '3'},
];

console.log(flattenTree(tree));
