// 布尔
let isDone: boolean = true


// 数字
let decLiteral: number = 20   // 十进制
let hexLiteral: number = 0x14     // 十六进制
let bingryLiteral: number = 0b10100   // 二进制
let octalLiteral: number = 0o24   // 八进制


// 字符串
let name1: string = 'bob'
name1 = 'smith'

let name2: string = 'yan'
let age: number = 18
let sentence = `hello, my name is ${name2}
I'll be ${ age + 1 } year old next month.`


// 数组
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]


// 元组
let x: [string, number]
x = ['hello', 10]
console.log(x[0].substr(1, 2))

// 枚举类型
enum Color {
  Red = 1,
  Green,
  Blue = 4
}
let c:Color = Color.Green
let colorName: string = Color[2]
let colorIdx: number = Color['Green']
console.log(colorName, colorIdx)

// any 任何类型
let notSure: any = 4
notSure = 'maybe a string instead'
let list: any[] = [1, true, 'free']


// void 没有任何类型 没有任何返回值
function warnUser(): void {
  console.log('This is my warning message')
}

let unusable1: void = null   // 没有意义
let unusable2: void = undefined   // 没有意义


// null undefined
let u: undefined = undefined
let n: null = undefined

let num1: number = 3
num1 = null

let num2: number | null = 3
num2 = null


// never 永不存在的值的类型
function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('something faild')
}

function inifiniteLoop(): never {
  while (true) {

  }
}


// object 非原始类型
declare function create(o: object | null): void;
// create({ prop: 0 }) // OK
// create( null ) // OK
// create('string') // Error
// create(false) // Error
// create(undefined) // Error



// 类型断言
let someValue: any = 'this is a string'
someValue.length
// 强制转换为字符串
// 1.
let strLength1: number = (<string>someValue).length
// 2.
let strLength2: number = (someValue as string).length


