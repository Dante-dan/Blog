# 工具函数

[hoc]

## 递归遍历树
[源码](../demo/flatten-tree.ts)

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

---
## 表单验证函数
[源码](../demo/get-fields-from-api-error.js)

此函数用于表单校验，当某个表单项无法通过后端验证时，只需返回对应字段的 `fieldName` 和 `fieldError` ，通过此函数将其处理为 `rc-form` 的`setFields` 可以使用的`object`。可以用于 `antd`
的表单组件。

## 生成树函数
[源码](../demo/generate-tree.ts)

此函数可以从扁平结构，遍历为树形结构，是`递归遍历树`  的反函数。首先使用 `reducer` 得到一个以 `id` 为key 的对象，然后遍历这个对象的`values`， 没有 `parentId` 的即根节点。有`parentId`直接挂在对应节点的 `children` 上，由于对象引用的是其地址。所以最后能得到一个符合预期的树结构。
```javascript
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

```
结果如下
```json
// result
[{
	"id": "1",
	"value": "1",
	"children": [{
		"id": "1-1",
		"value": "1-1",
		"parentId": "1"
	}, {
		"id": "1-2",
		"value": "1-2",
		"parentId": "1"
	}, {
		"id": "1-3",
		"value": "1-3",
		"parentId": "1",
		"children": [{
			"id": "1-3-1",
			"value": "1-3-1",
			"parentId": "1-3"
		}, {
			"id": "1-3-2",
			"value": "1-3-2",
			"parentId": "1-3"
		}, {
			"id": "1-3-3",
			"value": "1-3-3",
			"parentId": "1-3",
			"children": [{
				"id": "1-3-3-1",
				"value": "1-3-3-1",
				"parentId": "1-3-3"
			}, {
				"id": "1-3-3-2",
				"value": "1-3-3-2",
				"parentId": "1-3-3"
			}, {
				"id": "1-3-3-3",
				"value": "1-3-3-3",
				"parentId": "1-3-3"
			}]
		}]
	}, {
		"id": "1-4",
		"value": "1-4",
		"parentId": "1",
		"children": [{
			"id": "1-4-1",
			"value": "1-4-1",
			"parentId": "1-4"
		}, {
			"id": "1-4-2",
			"value": "1-4-2",
			"parentId": "1-4"
		}]
	}]
}, {
	"id": "2",
	"value": "2",
	"children": [{
		"id": "2-3",
		"value": "2-3",
		"parentId": "2",
		"children": [{
			"id": "2-3-3",
			"value": "2-3-3",
			"parentId": "2-3",
			"children": [{
				"id": "2-3-3-1",
				"value": "2-3-3-1",
				"parentId": "2-3-3"
			}, {
				"id": "2-3-3-2",
				"value": "2-3-3-2",
				"parentId": "2-3-3"
			}, {
				"id": "2-3-3-3",
				"value": "2-3-3-3",
				"parentId": "2-3-3"
			}]
		}]
	}]
}, {
	"id": "3",
	"value": "3"
}]
```
