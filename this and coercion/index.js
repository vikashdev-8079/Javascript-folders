"use strict";

// let name1="hye"
// console.log(name1);
// ======>This keyword <====

// let student ={
//     name : "Shyam",
//     printName: function(){
//         console.log( " hye",this.name);

//     }
// }
// let res =student.printName()
// res()
// student.printName()
// let student2 ={
//     name:"mohan",
//     printName:student.printName
// }

// student2.printName()
// let res = student.printName;

// res()

// function fun1(){
//     let name = "Sahu";
//     function fun2(){
//         console.log(name);
//     }
//     name = "Sohan"
//     return fun2;
// }
// const rest = fun1()
// rest()

// console.log(this);
// console.log(global === this);

// var a= 7;
// console.log(this.a);

// function fun1(){
//     console.log(this);
// }
// fun1()

// let name = "shyam"
// let product ={
// name : "Iphone",
// printName: ()=>{
// console.log(this.name);
// }

// }

// product.printName()
// let name = "something"
function fun3(){
    var name = "Mohan"
let product ={
name : "Iphone",
printName: function(){

    const print = ()=>{
    console.log(this.name);
    }
print()
}

}

product.printName()
}
fun3()

// let nestedObj = {
//   name: "Mohan",
//   fun: function () {
//     let product = {
//         name:"Iphone",
//         printName:  () => {
//           console.log(this.name);
//         }
       
      
      
//     }

//     product.printName();
//   }

// }

// nestedObj.fun();
