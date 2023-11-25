// 类型声明
// 1.类型强约束
// 2.代码可读性强
function greeter(person: string): string {
  return "Hello, " + person.indexOf("a");
}

// 类型推导
let user = '1';

console.log(greeter(user));

// let arr: Array<any> = ['1', '2'];

// arr[1].pjw()

