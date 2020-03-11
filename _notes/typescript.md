
## TypeScript Pros
- Static type checking, coding errors can be caught in the development process earlier
- Edtior support: Code IntelliSense, Error hightlight

- Using future JavaScript features, like 2**3

## TypeScript Cons
- Extra code
- Unnecessary for smaller project


## TypeScript shares the following primitive types with JavaScript:
- string: Represents a sequence of Unicode characters
```
  let str: string = 'Hello World!';
```
- number: Represents both integers and floating-point numbers
```
  let num: number = 0.222;
  let hex: number = 0xbeef;
  let bin: number = 0b0010;
```
- boolean: Represents a logical true or false
```
  let boolFalse: boolean = false;
  let boolTrue: boolean = true;
```
- undefined: Represents a value that hasn't been initialized yet
- null: Represents no value

## TypeScript types
- Any
```
  function test(name): any{
      console.log(name)
  }
```
- Tuple
```
  let x:[number, string];
  x = [1, 'maobar_front'];
```
- enum
```
  enum Color { Red, Green, Blue };
  console.log(Color.red);//0
```
- Void

- Interface
```
  interface People{
      name: string;
      age: number;
  }
  
  class Tom implements Peole {
      name: string = 'Tom';
      age: number = 25;
      getName(): void{ 
          console.log(this.name);
      }
  }
```

- Gerneric
```
  function identity<T>(arg:T): T{
      return arg
  }

  function identity1<T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg;
  }
```

## 类型检测
现在让我们看看如何检查变量是否具有正确的类型。我们有多种选择，但在这里我只展示了两个最常用的选项。

- Typeof
typeof 仅仅知道基本类型。这意味着它只能检查变量是否是我们上面定义的数据类型之一。

let str: string = 'Hello World!'
if(typeof str === number){
 console.log('Str is a number')
} else {
 console.log('Str is not a number')
}
在此示例中，我们创建一个字符串类型变量并使用 typeof 命令检查 str 是否为 Number 类型（始终为 false）。然后我们打印是否是数值。

- Instanceof
instanceof 运算符与 typeof 几乎相同，只是它还可以检查 JavaScript 尚未定义的自定义类型。

class Human{
 name: string;
 constructor(data: string) {
  this.name = data;
 }
}
let human = new Human('Gabriel')
if(human instanceof Human){
 console.log(`${human.name} is a human`)
}

## 类型断言
有时我们还需要将变量转换为特定的数据类型。这经常发生在你已经指定了一个泛型类型像 any 并且你想使用它具体的类型的方法。

有很多选择可以解决这个问题，但在这里我只分享其中两个。

As 关键字
通过在变量名之后使用 as 关键字跟随具体的数据类型来转换变量的类型。

let str: any = 'I am a String'
let strLength = (str as string).length
这里我们将 str 变量转换为字符串，以便我们可以使用 length 属性（如果您的 TSLINT 设置允许，甚至可以在没有转换的情况下工作）。

<> 操作符：
我们也可以使用 <> 运算符，它与 as 关键字具有完全相同的效果，只有语法差异。

let str: any = 'I am a String'
let strLength = (<string>str).length
此代码块与上面的代码块具有完全相同的功能。它只是语法不同。
