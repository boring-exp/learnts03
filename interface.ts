// 一般比较大的对象类型声明时，使用interface
interface LabelledValue {
  label: string;
}

interface ILoginFrom {
  username: string;
  password: string;
}

function login(user: ILoginFrom) {
  console.log(user.password, user.username);
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);