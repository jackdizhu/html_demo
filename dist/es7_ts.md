## 装饰器 Decorator

```ts
// decorateTest 装饰器 @decorateTest
function decorateTest(target:any, key:string, descriptor:any): any {
  const method = descriptor.value;
  let test = 100;
  descriptor.value = (...args: any[])=>{
    // 增加逻辑
    console.log(test, 11);
    // 绑定 this 作用域
    let ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}
// decorateTest2 传参数 返回 一个装饰器 @decorateTest(1)
function decorateTest2 (num: number):any {
  return function (target:any, key:string, descriptor:any): any {
    const method = descriptor.value;
    let test = 100;
    descriptor.value = (...args: any[])=>{
      // 增加逻辑
      console.log(test + num, 11);
      // 绑定 this 作用域
      let ret = method.apply(target, args);
      return ret;
    }
    return descriptor;
  }
}
```
