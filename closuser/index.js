
// function outter(){
//     var a=5;
//     function inner(){
//         console.log(a);//undefine
//         var a=7;
//     }
//     inner()
// }
// outter()



// function outter(){
//     let a=5;
//     function inner(){
//         console.log(a);//reference error (TDZ)
//         let a=7;
//     }
//     inner()
// }
// outter()



// function outter(){
//     const a=5;
//     function inner(){
//         console.log(a);//reference error (TDZ)
//         const a=7;
//     }
//     inner()
// }
// outter()


// function outter(){
//     const a=5;
//     function inner(){
//         console.log(a);//undefine
//         var a=7;
//     }
//     inner()
// }
// outter()



// =======>CLOSUER<========
// function outter(){
//     const a=5;
//     function inner(){
//         console.log(a);
      
//     }
//     return inner;
// }
// const response =outter();
// response()


//references
// function outter(){
//     let a=5;
//     function inner(){
//         console.log(a);
      
//     }
//     a=10;//refrence
//     return inner;
// }
// const response =outter();
// response()


// function outter(){
//     let count=0;
//     function counter(){
//         count=count+1;
//         console.log(count);
//     }
//     return counter;
    
// }
// const counter1 =outter();
// const counter2 =outter();
// counter1();//clouser ki maddat se update kar rha hai
// counter1();//clouser ki maddat se update kar rha hai
// counter2();

