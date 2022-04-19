function sayHello(){
    console.log("hello to functions");
}
sayHello();

// function with parameter

function sum(num1 , num2){
    let addition = num1 + num2;
    console.log("addition of given numbers:"+addition)
}
sum(3,5);

// function with return type
function multiply(num1 , num2){
    return num1*num2;
}
let ans = multiply(3,5);
console.log(ans);

// Store a function in variable

let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5));

let b = function div(num1 , num2){
    return num1/num2;
}
console.log(b(10,5));

// IIFE ..> immediately invoked function expression
(function(){
    console.log("hello from IIFE");
})();

// IIFE with parameter

(function(num1 , num2){
    console.log(num1/num2);
})(10,5);