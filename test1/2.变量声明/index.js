// val
function f() {
    var a = 20;
    var message = 'Hello World';
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g());
function f1(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f1(true), f1(false));
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(sumMatrix(matrix));
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 100 * j);
    })(i);
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
    throw 'Oh no';
}
catch (e) {
    console.log('Catch it');
}
function foo() {
    return a;
}
foo();
var a;
