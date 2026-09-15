// ======>callback function<====

//====>Sync call back function
// function fun1(callback){
//     console.log("Hii");
//     callback()
// }

// function cb(){
//     console.log("This is call back function");
// }
// fun1(cb)


// let arr = ["a","b"]

// arr.forEach()
// arr.map()


//Async Call back function
// High Order function
// function a(){

//     function b(){

//     }
//     return b
// }



// =====>searchind Pizza
// function searchPizza(cb1){
//     console.log("Pizza Searching");
//     setTimeout(function(){
//         console.log("Here is the Pizza's Menu.");
//         let price = 500;
//         cb1(price)
//     },2000);
// }

// function addToCart(cb2){
//     console.log("Here is addind to Cart...");
//     setTimeout(function(){
//         console.log("pizza Added to Cart");
//         cb2();
//     },3000);
// }

// function Payment(price,cb3){
//     console.log(`Paymnet Initiated, Ammount:${price}`);
//     setTimeout(function(){
//      console.log(`Payment Completed,Ammount${price}`);
//      cb3();
//     },5000);
// }


// // *****Callback Hell OR Pramid
// searchPizza(function a(price){
//     addToCart( function b(){
//         Payment(price,function c(){
//            console.log("Bass Aa hee gaya Pizza");
//         });

//     });
   
// });



//====>In version of control
function searchPizza(cb1){
    console.log("Pizza Searching");
    setTimeout(function(){
        console.log("Here is the Pizza's Menu.");
        let price = 500;
        cb1(price)
    },2000);
}

function addToCart(cb2){
    console.log("Here is addind to Cart...");
    setTimeout(function(){
        console.log("pizza Added to Cart");
        cb2();
    },3000);
}

function Payment(price,cb3){
    console.log(`Paymnet Initiated, Ammount:${price}`);
    setTimeout(function(){
     console.log(`Payment Completed,Ammount${price}`);
      console.log("Bass Aa hee gaya Pizza");
    
    },5000);
}


// *****in version control
searchPizza(function a(price){
    addToCart( function b(){
        Payment(price);

    });
   
});

