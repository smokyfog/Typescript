// val

function f() {
  var a = 20
  var message = 'Hello World'
  return function g() {
    var b = a + 1
    return b
  }
}
var g = f()
console.log(g()) 



function f1(shouldInitialize) {
  if ( shouldInitialize ) {
    var x = 10
  }
  return x
}
console.log(f1(true), f1(false))



function sumMatrix(matrix) {
  var sum = 0
  for(var i = 0; i< matrix.length; i++) {
    var currentRow = matrix[i]
    for(var j = 0; j< currentRow.length; j++) {
      sum += currentRow[j]
    }
  }
  return sum
}
var matrix = [
  [1,2,3],
  [4,5,6]
]
console.log(sumMatrix(matrix))



for(var i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j)
    }, 100 * j)
  })(i)
}




// let

// function f3(input: boolean) {
//   let a = 100
//   if (input) {
//     let b = a + 1
//     return b
//   }
//   return b
// }

try {
  throw 'Oh no'
} catch (e) {
  console.log('Catch it')
}

function foo() {
  return a
}
let a
foo()




// const

const numLivesForCat = 9
const kitty = {
  name: 'Kitty',
  numLives: numLivesForCat
}
kitty.name = 'Jerry'
kitty.numLives--


// 解构
let input = [1, 2]
let [first, second] = input
console.log(first) // outputs 1
console.log(second) // outputs 2


let input1: [number, number] = [1, 2]
function f5([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}
f5(input1)


let [first1, ...rest] = [1, 2, 3, 4]
console.log(first1) // outputs 1
console.log(rest) // outputs [ 2, 3, 4 ]