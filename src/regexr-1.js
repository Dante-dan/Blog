
{
  // "I?   love ?? the ?great ? ?wall in  ?beijing"更改为:"I love the Great Wall in Beijing",主要是为了解决编码的问题导致的问题,规律:
  //
  // 1,乱码只有两种特殊字符分别是'?'和' ';
  //
  // 2,如果乱码的末尾是'?'则它的下一位字母肯定是大写;
  // 其中一个字符复制出来有编码问题，现使用 & 替代
  const str = 'I?&&&love&??&the&?great&?&?wall&in&&?beijing';

// 思路：使用【正向向后查找】找到 ?a-z 的字符串
  const strWithUpperCase = str.replace(/(?<=\?)[a-z]/g, char => char.toUpperCase());
// 所有不连续为字母的字符，替换为 空格
  const resultStr = strWithUpperCase.match(/[a-zA-Z]+/ig).join(' ');
console.log(resultStr);
}

{
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
  console.log(setArr([]));
}


{
  // 任务调度器
  const orderTasks = [];
  const timerTasks = [];
  const timerIds = [];
  const ORDER = Symbol('order')
  const TIMER = Symbol('timer')
  const startOrderTask = () => {
    return new Promise((resolve, reject) => {
      if(Array.isArray(orderTasks) && orderTasks.length > 0) {
        const current = orderTasks.shift();
        const { task, time } = current;
        setTimeout(() => {
          task.call();
          resolve(startOrderTask());
        }, time);
      } else {
        // console.log('顺序队列已经清空');
      }
    })
  };
  const startTimerTask = () => {
    return new Promise((resolve, reject) => {
      if(Array.isArray(timerTasks) && timerTasks.length > 0) {
      timerTasks.forEach(item => {
        const { task, time } = item;
        setInterval(task, time)
      })
      } else {
        // console.log('定时队列已执行');
      }
    })
  };

  // 任务调度
  function controller(tasks) {
    // 任务队列
    if(Array.isArray(tasks) && tasks.length > 0) {
      tasks.forEach(task => controller(task));
    } else {
      // 单个任务
      const { task, type, time } = tasks;
      if(type === ORDER) {
        if(typeof task === 'function') {
          orderTasks.push({ task, type, time });
        }
      }
      if(type === TIMER) {
        if(typeof task === 'function') {
          timerTasks.push({ task, type, time });
        }
      }
    }
  }
  const a = () => console.log('a');
  const b = () => console.log('b');
  const c = () => console.log('c');
  const d = () => console.log('d');

  function case1() {
    controller([
      {
        task: () => {
          controller([
            {task: () => {
                a();
                controller([
                  {
                    task: a, type: ORDER, time: 1000
                  }
                ])
                startOrderTask();
              }, type: ORDER, time: 5000},
            {task: () => {
                b();
                controller([
                  {
                    task: b, type: ORDER, time: 3000
                  }
                ])
                startOrderTask();
              }, type: ORDER, time: 3000},
          {task: b, type: ORDER, time: 3000}
          ])
          startOrderTask();
        },
        type: TIMER,
        time: 14 * 1000
      },
    ]);
  }
  function case2() {
    controller([
      {
        task: a, type: TIMER, time: 6000,
      },
      {
        task: c, type: TIMER, time: 4000,
      }
    ]);
    startTimerTask();
  }
  function case3() {
    const order = [
      {task: a, type: ORDER, time: 1000},
      {task: b, type: ORDER, time: 3000},
    ];
    controller([
      ...order,
      {task: c, type: TIMER, time: 3000},
      {task: d, type: TIMER, time: 4000},
      {task: () => {
          controller(order);
          startOrderTask()
        }, type: TIMER, time: 4000
      }
    ])
    startOrderTask(orderTasks);
    startTimerTask(timerTasks);
  }
  function case4() {
    const order = [
      {task: b, type: ORDER, time: 3000},
      {task: c, type: ORDER, time: 3000},
    ];
    controller(order)
    startOrderTask(orderTasks);
  }
  case1();
}


