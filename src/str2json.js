function str2json(str) {
  const table = str.split('\n').map(row => row.split(','));
  const formatObj = [];
  let parentNode = null; // 当前的父节点
  for(let row = 0; row < table.length; row ++) {
    for(let col = 0; col < table[row].length; col ++) {
      if(row === 0 && col === 0) {
        formatObj[table[row][col]] = [];
      } else {
        if(table[row][col]) {
          // col 标志着当前节点属于第几层，根节点是第0层
          const node = {};
          node[table[row][col]] = [];
          parentNode = getLatestNode(formatObj, col)
          parentNode.push(node);
          parentNode = node[table[row][col]];
        }
      }
    }
  }
  console.log(formatObj);
  return formatObj;
}

function getLatestNode(obj, index) {
  let current = obj;
  let nextNode = obj;
  if(index === 0) {
    return obj;
  }
  for(let i = 0; i < index; i++) {
    const keyArr = Object.keys(nextNode);
    current = nextNode[keyArr[0]];
    nextNode = current[current.length - 1];
  }
  return current;
}

const str = "奴隶社会,非洲,古埃及文明,金字塔\n,亚洲,两河流域文明,汉谟拉比法典\n,,古印度,种姓制度\n,,,佛教的创立\n,欧洲,希腊,希腊城邦\n,,,雅典民主\n,,罗马,城邦\n,,,帝国的征服与扩展\n,,希腊罗马古典文化,建筑艺术\n,,,公历";

str2json(str);
