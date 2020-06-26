/**
 * @author: duanjl
 * @date: 2020/6/11
 */
function debounce(fn, wait) {
  // 在这里写下你的代码
  let timeoutID = null;
  return function (...param) {
    if(timeoutID) {
      clearTimeout(timeoutID);
    } else {
      fn.apply(this, [...param])
    }
    timeoutID = setTimeout(() => {
      timeoutID = null
    }, wait)
  }
}

async function run() {
  const a1 = debounce(console.log, 50)
  a1(1, 2)
  await sleep(10)
  a1(2, 3)
  await sleep(20)
  a1(3, 4)
  await sleep(30)
  a1(4, 5)
  await sleep(40)
  a1(5, 6, 7)
  // 经过 50 毫秒（近似），只打印出 5 6

  await sleep(51)
  a1(6, 7)
  // 打印出 6 7
}

const sleep = ms =>
  new Promise(resolve =>
    setTimeout(resolve, ms)
  )

run()
