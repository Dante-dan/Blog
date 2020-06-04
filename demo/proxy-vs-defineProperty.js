const vm = [];

// let arr = null;
//
// Object.defineProperty(vm, 1, {
//   set: (newValue) => {
//     console.log('defineProperty===检测改变', newValue);
//   },
//   get: () => {
//     console.log('defineProperty===获取')
//   }
// })
//
// vm[1] = 12;
// console.log(vm);

// 通过Proxy代理
const proxyVM = new Proxy(vm, {
  set: (target, propKey, newValue, receiver) => {
    console.log('proxy===检测改变', newValue);
    return Reflect.set(target, propKey, newValue, receiver)
  },
  get: (target, propKey, receiver) => {
    console.log('proxy===获取');
    return Reflect.get(target, propKey, receiver)
  }
})

proxyVM[1] = 12;
vm[1] = 11;
proxyVM[1];
console.log(proxyVM);
