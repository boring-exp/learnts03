// 类型断言
// 基本上都是用来解决编译器报错问题
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

export {}