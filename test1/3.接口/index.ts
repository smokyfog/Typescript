// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label)
// }

// let myObj = { size: 10, label: 'Size 10 Object' }
// printLabel(myObj)


interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj)






// 可选属性
interface Square {
  color: string,
  area: number
}

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare (config: SquareConfig): Square {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color: 'black'})






// 只读属性

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // error!

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12 // error!
// ro.push(5) // error!
// ro.length = 100 // error!
// a = ro // error!
a = ro as number[]




interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare2 (config: SquareConfig): { color: string; area: number } {
let newSquare = {color: 'white', area: 100}
if (config.color) {
  newSquare.color = config.color
}
if (config.width) {
  newSquare.area = config.width * config.width
}
return newSquare
}

// error: 'colour' 不存在于类型 'SquareConfig' 中
let mySquare2 = createSquare({ colour: 'red', width: 100 })


let mySquare3 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)

let squareOptions = { colour: 'red', width: 100 }
let mySquare5 = createSquare(squareOptions)




// 函数类型
interface SearchFunc {
  (source: string, subString: string) : boolean
}

// let mySearch: SearchFunc
// mySearch = function (source: String, subString: string): boolean {
//   let result = source.search(subString)
//   return result > -1
// }

// 简写
let mySearch: SearchFunc
mySearch = function (src, sub): boolean {
  let result = src.search(sub)
  return result > -1
}


// 可索引的类型
interface StringArray {
  [index: number]: string
}

let myArray : StringArray

myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]



class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  [x: number]: Dog
  [x: string]: Animal
}


interface NumberDictionary {
  [index: string]: number

  length: number
  // name: string
}



interface ReadonlyStringArray {
  readonly [index: number] : string
}

let myArray5: ReadonlyStringArray = ['alice', 'Bob']
// myArray[2] 'me'



// 类类型

interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

interface ClockContructor {
  new(hour: number, minte: number)
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) {

  }
  setTime(d: Date) {
    this.currentTime = d
  }
}













