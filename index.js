// 类型声明
// 1.类型强约束
// 2.代码可读性强
function greeter(person) {
    return "Hello, " + person.indexOf("a");
}
var user = 1;
console.log(greeter(user));
