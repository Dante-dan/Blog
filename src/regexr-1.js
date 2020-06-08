// "I?   love ?? the ?great ? ?wall in  ?beijing"更改为:"I love the Great Wall in Beijing",主要是为了解决编码的问题导致的问题,规律:
//
// 1,乱码只有两种特殊字符分别是'?'和' ';
//
// 2,如果乱码的末尾是'?'则它的下一位字母肯定是大写;

// 其中一个字符有编码问题，现使用 & 替代
const str = 'I?&&&love&??&the&?great&?&?wall&in&&?beijing';

// 思路：使用【正向向后查找】找到 ?a-z 的字符串
const strWithUpperCase = str.replace(/(?<=\?)[a-z]/g, char => char.toUpperCase());
// 所有不连续为字母的字符，替换为 空格
const resultStr = strWithUpperCase.match(/[a-zA-Z]+/ig).join(' ');
// console.log(resultStr);


// 不使用循环给数组赋值, 同时也不使用自带语法糖 Array.from(), Object.keys(), ....拓展符
// 能实现loop的除了循环就是递归
function setArr(arr) {
  if(Array.isArray(arr)) {
    if(arr.length < 100) {
      arr.push(arr.length);
      setArr(arr);
    }
    return arr;
  }
  return [];
}
// console.log(setArr([]));

// 任务调度器
// 首先只考虑同步任务
function chained(fns) {
  return function(param) {
    return fns.reduce((param, fn) => {
      return fn(param)
    }, param)
  }
}

function taskController(fns, timers) {
  return function(param) {
    return fns.reduce((param, fn) => {
      return fn(param)
    }, param)
  }
}

const a = (a) => console.log('a');
const b = (b) => console.log('b');
const c = (c) => console.log('c');
chained([a, b, c])();

