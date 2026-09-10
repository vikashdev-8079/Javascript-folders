// ========>FUNCTION<=======
// ***Simple functon

// function functionName(){
//     console.log("welcome to function");
// }
// functionName()

// ***function with  Arguments&paramertes
// function showName(userName) {
//   //Argument
//   console.log("welcome ", `${userName}`);
// }
// showName("ravi"); //parameters
// showName("Shaym");
// showName("prince");

// function adData(num1,num2){
//     console.log(num1+num2);

// }
// adData(10,20)
// adData(90,20)

// ****Default parmeters
//  function adData(num1,num2=1){//defaut parameters

//     console.log(num1+num2);

//  }
//  adData(10,89)//99
// adData(90)//90+1=91

//**spread operator */
// function sumData(...allAdd){
//     console.log(allAdd);

// }
// sumData(10,20,34,34,43)

//====RETURNTYPE FUNCTION====
// function addData(num1,num2)
// {
//    return num1+num2//44
// }
// console.log(addData(10,34));

// function taxCal(price){
//     return price*.10
// }
// let productPrice=50000;
// let total= taxCal(productPrice)+productPrice
// console.log(total);

//***=== Anonymous Functiom
//  let display=function(){
//     console.log("welcome");
// }
// display()

//***=== Call back function
// function addData(num1,num2){
//     return num1+num2
// }
// function minData(num1,num2){
//     return num1-num2
// }
// function calculate(num1,num2,callBack){
//     // console.log(num1);
//     // console.log(num2);
//     console.log("finalCal",callBack(num1,num2));

// }
// calculate(10,20,addData)
// calculate(40,20,minData)

//****ARROW FUNCTION */
// let addData=()=>{
//     console.log("Welcome");

// }
// addData()

//parameters Arrow fun
// let addData=(n,m)=>{
//   return n+m

// }
// console.log( addData(1,2));

//+++Implicit return
// let addData=(n,m)=>n+m
// console.log(addData(10,20));

// task1
// A string to find Vowels
// let vowerlsLetters="AEIOUaeiou"
// let checkVowels=(str)=>{
//      let count=0
//     for(let v of str ){

//         if(vowerlsLetters.includes(v)){
//              count++

//         }

//     }
//     return count

// }
// console.log(checkVowels("wlecomesiraiou"));

// function==>clear
// function decleration
// function funDecleration(){
//     console.log("hello,shyam");
// }

// funDecleration()

// //function with paramerters and arguments
// function addFun(num1,num2){ //parameters
//     let sum=num1+num2;
//     console.log(sum);
// }
// addFun(10,20)//arguments

//function with parameters ,arguments and return
// function funDecleration(){
//     console.log("hello,shyam");
//     return 10;

// }
// console.log(funDecleration());

// Default parameters me value
// function addFun(num1,num2,num3=0,num4=0){ //parameters
//     let sum=num1+num2+num3+num4;
//     console.log(sum);
// }
// addFun(10,20)//arguments
// addFun(10,20,60)//arguments
// addFun(10,20,60,70)//arguments

//Rest Operator

// function addNumber(...num){ //parameters
//     let sum=0;

//     for(let vlaue of num){
//         sum+=vlaue;
//     }
//     console.log(sum);

// }
// addNumber(10,20)

// addNumber(10,20,30)
// addNumber(10,20,30,40)
// addNumber(10,20,30,40,50)

// Spread Operator
// let arr1=[1,2]
// let arr2=[2,[3],3,[5,6,7,8],9,]
// let sumOfArray=[...arr1,...arr2]
// console.log(sumOfArray);

//function:Expression

// let addNumber=function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4));

// arrow function
// way====>1
// const addNumber = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addNumber(10,20));

// way====>1
// const addNumber = (num1, num2) => num1 + num2;
// console.log(addNumber(10, 20));

// way====>1
// if you have sigle parametes ,no need of ()
// const squar = num => num * num;
// console.log(squar(5));

// let greeting = () => {
//   return  {
//     name: "rohit",
//     age: 20,
//   }
  
// }
// console.log(greeting());



// =>this used ()
// let greeting = () => ({ name: "rohit",age: 20,})
// console.log(greeting());



/////=>IIFE(Imideatly invoke function)
// (function greeting(){
//     console.log("Hello ji");
// })();


// (()=>{
//     console.log("hello");
// })()




// ======>CALL BACK FUNCTION<=======
// function greet(){
//     console.log("Hello ji kaise ho");
// }
// function dance(){
//     console.log("Hello I am dancing here");
// }

// function meet(callBack){
//     console.log("I am going to meet some one");
//     callBack();

//     console.log("I ahve finised metting");
// }
// meet(greet);
// // meet(dance)

// function blinkitOrderPalced(){
//     console.log("We have started packing your order");
// }

// function zomatoOrderPalce(){
//     console.log("we have started preparring your food");
// }


// function payment(ammount,callBack){
//     console.log(`${ammount} payment has inisilized`);
//     console.log("payment is received");
//   callBack()

//     //GST
//     //Rider ko kitna
//     //compney ko kitna profite
// }
// payment(500,zomatoOrderPalce);
// // payment(300,blinkitOrderPalced);
