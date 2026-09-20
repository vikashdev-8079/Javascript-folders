// ====>Promises<=====
// Promises ->
// console.log("a");
// const p = new Promise(function(resolve,reject){

//     resolve("hi")
// reject("Server Down ")

// })

// console.log(typeof p);
// console.log(p);
// p.then(function onFulfilled(val){
// console.log(val);

// },function onRejected(val){
//     console.log(val);
// })
//OR

// const res = p.then(function (val){
// console.log(val);

// },function (val){
//     console.log(val);
// })

// .then( ()=>{},()=>{})
// .then()
// .then()

// ++++Conusm/Access promis(.then(),.catch().finally)
// promise retun a object then thta object conusm three way
//1.then -> again return object => Handel resolve part
//2.catch ->again return object =>Hanedl Rejected part
//3.finaly ->again return object => alway run
//     const res = p.then(function (val){
// console.log(val);

// })
// .then(function (val){
// console.log(val);

// }).then(function (val){
// console.log(val);

// }).then(function (val){
// console.log(val);

// }).catch(function(val){
//     console.log(val);
// }).finally(function(){
//     console.log("It is always runs");
// })

//micro task queue
// console.log("a");

// const p2 =new Promise(function f1(resolve,reject){
//     console.log("b");
//     resolve("hello")
// })

// p2.then(function f2(val){
// console.log("then");
// console.log(val);
// }).catch(function f3(){
//     console.log("Catch");
// }).finally(function f4(){
// console.log("finally");
// })
// console.log("c");

// const p3 = new Promise( function f1(resolve,reject){
//     resolve()// ye line sirf itna batati hai ki promise fulfill ho gya hai
// })

// // all ready resolved
// Promise.resolve().then(function f2(){
//     console.log("inside resolve Promise");
// })
// p3.then( function f3(){
//     console.log(" f3 function");
// })




// solve version control with promises
function searchPizza() {
  return new Promise(function (resolve, reject) {
    console.log("Pizza Searching");
    setTimeout(function () {
      console.log("Here is the Pizza's Menu.");
      let price = 500;
      resolve(price);
    }, 2000);
  });
}

function addToCart(price) {
  return new Promise(function (resolve, reject) {
    console.log("Here is addind to Cart...");
    setTimeout(function () {
      console.log("pizza Added to Cart");
      resolve(price);
    }, 3000);
  });
}

function Payment(price) {
  return new Promise(function (resolve, reject) {
    console.log(`Paymnet Initiated, Ammount:${price}`);
    setTimeout(function () {
        let isPaymentSuccessful = false
        if(isPaymentSuccessful === true){
              console.log(`Payment Completed,Ammount${price}`);

      resolve();

        }
        else{
            reject("Payment failed");
        }
    
    }, 5000);
  });
}

// searchPizza().then(function (price) {
//   console.log(price);
// });

//here waste variable
let res = searchPizza();

res
  .then(function (price) {
    return addToCart(price);
  })
  .then(function (price) {
    return Payment(price);
  })
  .then(function () {
    console.log("Bass Aa hee gaya Pizza");
  }).catch(function(err){
    console.log(err);
  })
