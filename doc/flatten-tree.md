# 递归遍历树结构
[源码](../demo/flatten-tree.js)

使用递归遍历树结构，向外暴露2个参数，分别是`原始树` 和 `节点处理函数`,当我们需要遍历的树结构不符合约定时，使用`节点处理函数` 将其处理为目标节点。



```javascript
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
```

```javascript
// result
const resultArr = [ { id: '1-1', value: '1-1', parentId: '1' },
                    { id: '1-2', value: '1-2', parentId: '1' },
                    { id: '1-3-1', value: '1-3-1', parentId: '1-3' },
                    { id: '1-3-2', value: '1-3-2', parentId: '1-3' },
                    { id: '1-3-3-1', value: '1-3-3-1', parentId: '1-3-3' },
                    { id: '1-3-3-2', value: '1-3-3-2', parentId: '1-3-3' },
                    { id: '1-3-3-3', value: '1-3-3-3', parentId: '1-3-3' },
                    { id: '1-4-1', value: '1-4-1', parentId: '1-4' },
                    { id: '1-4-2', value: '1-4-2', parentId: '1-4' },
                    { id: '2-3-3-1', value: '2-3-3-1', parentId: '2-3-3' },
                    { id: '2-3-3-2', value: '2-3-3-2', parentId: '2-3-3' },
                    { id: '2-3-3-3', value: '2-3-3-3', parentId: '2-3-3' },
                    { id: '3', value: '3' } ];
```
