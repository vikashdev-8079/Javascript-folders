// synatx
// function totalMarks(){
//     console.log("shyam");
// }
//  totalMarks()

// let ramMarks=(10 + 20 + 30);
// let mohanMarks=(30 +20 +50);
// let sohanMarks=(40 + 47 +48);
// let mukeshMarks=(57+57+48);

// function totalMarks(studnetName, hindi, eng, math){ //parameters

//     console.log(`${studnetName}total marks:`,hindi+eng+math);
// }
// totalMarks("Ram",10 , 20 , 30)//Argument
// totalMarks("Shaym",30 , 20 , 50)
// totalMarks("Sohan",40 , 47 , 38)
// totalMarks("Mukesh",57 , 57 , 48)

// function greetingMsg(userName="Guest", greetings="Hii") {
//   console.log(`${userName} ${greetings}`);
// }
// greetingMsg("shyam", )
// greetingMsg("mohan", "hello" )
// greetingMsg("sohan",  )
// greetingMsg("shyam", )

// function claculator(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       console.log(`${num1} ${operator} ${num2}=`, num1 + num2);
//       break;
//     case "-":
//       console.log(`${num1} ${operator} ${num2}=`, num1 + num2);
//       break;
//   }
// }
// claculator(10, 20, "-")//Argument



// +++++++===>Function declerstion<=====++++++++
// let ramMarks = 10 + 20 + 30;
// let mohanMarks = 30 + 20 + 50;
// let sohanMarks = 40 + 47 + 48;
// let mukeshMarks = 57 + 57 + 48;

// function totalMarks(hindi, eng, math) {
//   return hindi + eng + math;
// }

// function calParcentage(studentName, hindi, eng, math) {
//   let total = totalMarks(hindi, eng, math);
//   let percentage =(total/300 *100)
//   console.log(`${studentName} percentage :`,total,percentage);
// }

// calParcentage("Ram", 10, 20, 30);
// calParcentage("Mohna", 30, 20, 50);
// calParcentage("Sohan", 40, 47, 48);
// calParcentage("Mukesh", 57, 57, 48);

// fun() // it used before fundecleration behind hosting concept
// Hosting used before decleration 
// function fun(){
//     console.log("function decleration");
// }




// +++++++===>Function Exepresion<=====++++++++
// let add = function(num1,num2){
//     return num1+num2
// }
// // let result=add(5,7)
// // console.log(result);
// // OR short cut bellow
//  console.log(add(5,7));



// +++++++===>Arrow function<=====++++++++
// // syntax 1 single para no parentheses needed
// let add = num1 => num1 + 4;


// //syntax 2 by default return
// let add = (num1,num2) => num1 + num2;

// // syntax 3//multipal lines
// let add = (num1,num2) =>{
//     // somthing 
//     // somthing
//     return num1+num2
// }


//  let add = (num1,num2) => {
//     return num1+num2
//  }
//  console.log(add(80,7));

// =========>function<=========
// ======>Function<======

//function decleration
// function greeting(){
//     console.log("Hello sir");
// }

// greeting()

//function with parameters and arguments
// function addNumber(num1,num2,)//parameters
// // {
// const sum=num1+num2+num3+num4;
// console.log(sum);

// }
// // addNumber(5,6)//argument
// addNumber(6,7)

//function with default parametrs
// function addNumber(num1,num2,num3=0,num4=0)//parameters
// {
// const sum=num1+num2+num3+num4;
// console.log(sum);

// }
// // addNumber(5,6)//argument
// addNumber(6,7)
// addNumber(6,7,8)
// addNumber(6,7,8,9)

//rest operator

// function addNumber(...num)//parameters
// {
// let sum=0;
// for(let n of num){
//     sum+=n
// }
// console.log(sum);

// }
// // addNumber(5,6)//argument
// addNumber(6,7)
// addNumber(6,7,8)
// addNumber(6,7,8,9)
// addNumber(6,7,8,9,10,20,30)

//function with return type
// function greeting(){
//     console.log("Hello sir");
//     return 10;
// }

// console.log(greeting());

//function Expression

// let add= function(num1,num2){
//     return num1+num2
// }
// console.log(add(4,5));

// let res=add(4,5)
// console.log(res);

//Arrow function
// const addNumber= (num1,num2)=>{
// return num1+num2;
// }
// console.log(addNumber(1,2));

//if singal value return then used it
// const addNumber= (num1,num2)=>num1+num2;
// console.log(addNumber(5,5));

//if we have single parameters, no need of this()
// const sqrt = num => num * num;
// console.log(sqrt(6));




//function with single object return

// const greeting =()=>({  name:"Shyam", age:20})
// console.log(greeting());

// OR

// const greeting = () => {
//   return {
//     name: "Shyam",
//     age: 20,
//   };
// };
// console.log(greeting());


// IIFE =>Imediatly invoke function
// (function greeting(){
//     console.log("Hello");
// })();

// (()=>{
//     console.log("hye");
// })();

//Call back function
// function greet(){
//     console.log("Hello ji kaise ho");
// }

// function dance(){
//     console.log("I am dancing");
// }

function meet(callBack){
    console.log("I am going to meet some one");
    callBack();
    console.log("I have finised mu meeting");
}
meet(greet())//greet call ho jayega
meet(greet);
meet(dance)
