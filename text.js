console.log("Ayush")
// let var const
// type of scope 
// global or local scope
// VAr declaration in js
var globalVar = "i'm GLobal";
console.log(globalVar)
// local scope
// function
function localVar() {
    var localVar = "i m loacl"
    console.log(localVar)
    console.log(globalVar)

}
localVar();
//console.log(localVar)

// redeclartion in 'var'
function redec() {
    // using var declation we can decalre the value again
    var x = 15;
    var x = 20;
    console.log("redeclare value of x", x)
}
redec()

function reassignmentVar() {
    var y = 90;
    y = 55;
    console.log(y)
}
reassignmentVar() // reassignment is allowed in var declaration

// hoisting 
// use the variable before defining directly in our program
function a() {
    console.log("before declartion", t)
    var t = 90;
    console.log("after dec", t)
}
a()

let globalLet = "i m global let"
console.log(globalLet)

function g() {
    let loacallet = "i m local with let"
    console.log(loacallet)
}
g()

// console.log(loacallet)
// redeclation in let
function w() {
    let z = 9
    // let z = 69
    console.log("declaration in let", z)

}
w()

// reassignment in let
function h() {
    let a = 89;
    a = 78;
    console.log(a)
}
h()

// hoisting
function hoistinglet() {
    // console.log("before declation", f)
    let f = 4;
    console.log(f)
}
hoistinglet()

// cont declartion

const a1 = 5;
function con() {
    const b = 10;
    console.log(a1);
    console.log(b);
}
con()
// console.log(b)

// redeclaration
function redec() {
    const b1 = 46;
    // const b1 = 96;
    // b1 = 69;   not possible 
    console.log(b1)
}
redec()
// hoisting
// function n2(){
//     console.log(t1);
// }

// n2() not possible 


// datatype
let number = 45; //int
let name = 'text' //string
let isActive = true // boolean
let user = null
let age;
let person={
    name:'text',//object
    age:54
}
let number1=[1,2,3]


