// 类型声明
// 1.类型强约束
// 2.代码可读性强
function greeter(person: any) {
  return "Hello, " + person.indexOf("a");
}

let user = 1;

console.log(greeter(user));