// ==>
// console.log(a);//undefine
//     var a=5;

// console.log(b);//TDZ because Value Unavailable
//     let b=6;

// fun1()// all copy in memory
// function fun1(){
//     console.log("Hello");
// }

// fun2()//fun2 is not a function type error
// var fun2= function(){
//     console.log("Hii");
// }

// fun3()//TDZ ke karan Reference error
// const fun3=function(){
//     console.log("Namaste Dosto");
// }

// var a = 5;
// let b = 10;
// console.log(a + b);

// function outer() {
//   let num1 = 10;
//   let num2 = 20;
 

//   function inner() {
//     let num1 = 50;
//     let num2 = 60;
//     return num1 + num2;
//   }
//   const result = inner() + num1 + num2;
//   return result;
// }

// const result = outer();
// console.log(result);



// let a=10;

// function gun(){// phle apne inner me dekhega
//     console.log(a);
//     let a=10;
// }
// gun()
  