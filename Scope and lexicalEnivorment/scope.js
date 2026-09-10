// ========>Scope<=======

// ----->(i)GlobalScope
// it is accessiable any where of the program

// let userName = "Shaym"
// console.log(userName);


// ----->(i)Block Scope
// it used within the block of the code
// not access  outside the {} <- this
// {
//     let blockScope = "block"
//     console.log(blockScope);
// }



// ----->(i)Function
// it is accessiable {}<-- in function
// function functionScope(){
//     let fun = "sk"
//     console.log(fun);

// }



// ===>Variable<===
// ==>Var ReDeclear Reassign ->function scope
// ==>let ReDeclear(No) Reassign(yes) ->block scope
// ==>let ReDeclear(No) Reassign(yes) ->block scope



// function counter(){
//      let count = 0
//     count = count+ 1
//     console.log(count);
// }
// counter()//=>1
// counter()//=>1


// this is global scope
//    let count = 0
// function counter(){
//     count = count+ 2
//     console.log(count);
// }
// counter()//=>2
// counter()//=>4




// this is global scope and function scope
//    let count = 2
// function counter(){
//         let count =0
//     count = count+ 2
//     console.log(count);
// }
// counter()//==>2
// counter()//==>2




