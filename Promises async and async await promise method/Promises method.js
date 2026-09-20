// ===++++>Promise Methodes<++++===
// 1.all()==> jah par sab sath me chahiye all fulfilled then run if any reject then all rejected
// 2.allsetteled() hrer reject,resolve ho dono show karga resolve(status adn value) ,reject(staus , reason)
// 3..rece() jo phale settled ho gya o output hai
// 4..any()=> jo pahle fullfil mil gya wo output


//  1.all() ===>
// function fun1(){

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("fun1")
//     }, 3000);
//   })
// }

//  function fun2() {
   
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("fun2")
//     }, 4000);
//   })
// }

//  function fun3() {
   
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("fun3")
//     },0);
//   })
// }


// let res = Promise.all([fun1() , fun2() , fun3()])
// let res = Promise.allSettled([fun1() , fun2() , fun3()])
// let res = Promise.race([fun1() , fun2() , fun3()])
// let res = Promise.any([fun1() , fun2() , fun3()])

// res.then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })
