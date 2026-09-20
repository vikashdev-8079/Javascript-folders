// // ===>Async/Await ,promise method,Erro handling<====

// async function f2() {

//     return 11

// }
// function f1(){

//     // return Promise.resolve(10)
//     return 10
// }

// // console.log(f2());
// console.log(f1());

// f2().then((data)=>{
//     console.log(data);
// })

// async function fun3() {
//   return "Hi"

// }

// function fun4(){
//   return Promise.resolve("Helloo")
// }
// console.log("1");

// async function fun5(){

//   console.log("2");
// let data = await fun3()
// console.log("3");
// let data2 = await fun4()
// console.log("4");
// console.log(data,data2);

// }
// console.log("shyam");

// fun5()

// console.log("5");

// console.log("a");

// async function random() {
//   console.log("b");

//   await 1;

//   console.log("c");
// }
// random()

// console.log("d");

// global me access karna
// let data;

// async function fun3() {
//   return "Hye";
// }

// function fun4() {
//   return Promise.reject("server issus");
// }

// async function fun5() {
//   try {
//     let data = await fun3();
//     let data2 = await fun4();
//     console.log(data, data2);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("I am always run");
//   }
// }

// fun5();


// function searchPizza() {
//   return new Promise(function (resolve, reject) {
//     console.log("Pizza Searching");
//     setTimeout(function () {
//       console.log("Here is the Pizza's Menu.");
//       let price = 500;
//       resolve(price);
//     }, 2000);
//   });
// }

// function addToCart() {
//   return new Promise(function (resolve, reject) {
//     console.log("Here is addind to Cart...");
//     setTimeout(function () {
//       console.log("pizza Added to Cart");
//       resolve();
//     }, 3000);
//   });
// }

// function Payment(price) {
//   return new Promise(function (resolve, reject) {
//     console.log(`Paymnet Initiated, Ammount:${price}`);
//     setTimeout(function () {
//       let isPaymentSuccessful = true;
//       if (isPaymentSuccessful === true) {
//         console.log(`Payment Completed,Ammount${price}`);

//         resolve();
//       } else {
//         reject("Payment failed");
//       }
//     }, 5000);
//   });
// }

// async function orderFood() {
//   try {
//     let price = await searchPizza();
//    data2 = await addToCart(price);
//    data3 = await Payment(price);
//     console.log("bas aa hi gay Pizza");
//   } catch (error) {
//     console.log(error);
//   }
// }
// orderFood();






