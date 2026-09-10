// ++++++++======>OBJECT<======+++
// let prodects = {
//   price: 675874,
//   totoalReviews: 75,
//   avgRating: 4.5,
//   discount: 10,
//   323: "inphone",
//   // "#":4573,
//   //  'first-nmae':437387
//   printProductName: function () {
//     console.log("Radhhekrishn is a best soual");
//   },
//   addDiscount: function () {
//     console.log("10%");
//   },
// };
// console.log(prodects.avgRating);//Dot notation
// console.log(prodects['323']);//[] notatation

// prodects.'first-name'//error
// console.log(prodects['first-nmae']);

// +++++==Method==++++++
// let prodects = {
//   price: 675874,
//   totalReviews: 75,
//   avgRating: 4.5,
//   discount: 50,
//   productName: "inphone 22 pro max",

//   printProductName: function() {
//     console.log(this.productName);//this ka used  khud ka object access karega
//   },
//   printDiscoutn(){
//     console.log(this.discount);
//   }
// };

// prodects.printProductName()
// prodects.printDiscoutn()

//  let res=prodects.printProductName();
//  console.log(res);
// prodects.printDiscount();

// ++++====BUILT FUNCTION++++=====
// console.log(Object.keys(prodects));//return array of key
// console.log(Object.values(prodects));//array of value
// console.log(Object.entries(prodects));//array of array

// +++=for-of-loop=++++
// let product2 = [47,45,56,67,57]
// for(value of product2){
//   console.log(value);
// }

// +++=for-each-method=++++
// let product2 = [47,45,56,67,5]
// product2.forEach(function(value ,index){
//   console.log(value , index);

//})

// function a(number){
//   console.log("a");
//   // console.log(number);
//   number()

// }
// // a(function(){
// //   console.log("b");
// // })
// // OR
// let b=function(){
//   console.log("b");
// }
// a(b)

// +++=for-in-method=++++

//  let prodects = {
//   name:" iphone",
//   price: 675874,
//   totoalReviews: 75,
//   avgRating: 4.5,
//   discount: 10,

//   // "#":4573,
//   //  'first-nmae':437387
//   printProductName: function () {
//     console.log("Radhhekrishn is a best soual");
//   },
//   addDiscount: function () {
//     console.log("10%");
//   },
// };
// for(value in prodects){
//   console.log(value);
// }

//  let arr = [47,45,56,67,5]
// for (value in arr){
//   console.log(arr[value]);
// }

// +++Destructring of object & array++
// ====>Array destructring
// // let product1 = [47, 45, 56, 67, 5];
// const [a,b,c,d,e,f] = [47, 45, 56, 67, 5];
// console.log(e);

// ====>object destructring

// let prodects = {
//   nameP: " iphone",
//   price: 675874,
//   totoalReviews: 75,
//   avgRating: 4.5,
//   discount: 10,
//   printProductName: function () {
//     console.log("Radhhekrishn is a best soual");
//   },
//   addDiscount: function () {
//     console.log("10%");
//   },
// };

// let { price, avgRating, printProductName, addDiscount, totoalReviews,nameP } =
//   prodects
// // console.log(price, avgRating,nameP );

// for([key , value] of  Object.entries(prodects)){
//   console.log(key , value);
// }

// ++++====REST & SPREAD OPERATOR===++++
// =====>Spread Operator<=====
//  let arr = [34,46,6,64,465,5,75,]
//  console.log(arr);
// console.log(Math.min(...arr));//spread unboxing in array or etc
// console.log(Math.max(...arr));

// let a = [1,2]
// let b = [3,4]
// let c = [...a ,...b]//array merging by spread operator
// console.log(c);
// console.log(...c);

// =====>Rest operator<=====bachhi hui item ko pacck combine kardo array me show kardo
//   let product1 = ["iphone", 45546, 56, 67, 5];
//   const [n,p, ...restop] = ["iphone", 45546, 56, 67, 5];
// console.log(restop);

// function add(...numbers) {
//   let total = 0;
//   for (value of numbers) {
//     total += value;
//   }
//   return total;
// }
// console.log(add(345, 354, 45, 45, 54, 345));



// let prodects = {
//   nameP: " iphone",
//   price: 675874,
//   totoalReviews: 75,
//   avgRating: 4.5,
//   discount: 10,
//   menufactuare :{
//     city :"varansi",
//     state :"mp",
//     country:"india"
//   },
//   printProductName: function () {
//     console.log("Radhhekrishn is a best soual");
//   },
//   addDiscount: function () {
//     console.log("10%");
//   },
// };

// let{menufactuare,...userdetils}=prodects
// console.log(userdetils);