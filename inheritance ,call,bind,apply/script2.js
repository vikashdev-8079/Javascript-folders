// ======>Call , apply ,bind<======
//call(this,arg1,arg2)
// apply(this,[])
//bind()


// 1.++++++====> call()
// let user1 = {
//     name:"Mohit",
//     age:22,
//     printName(){
//         console.log(`Hi I am ${this.name}`);
//     }
// }


// let user2 = {
//     name:"Rohit",
//     age:23,
 
// }

// let user3 = {
//     name:"sohan",
//     age:24,
 
// }

// user1.printName()
// user1.printName.call(user2)
// user1.printName.call(user3)


// **** OR

let user1 = {
    name:"Mohit",
    age:22,
  
}


let user2 = {
    name:"Rohit",
    age:23,
 
}

let user3 = {
    name:"sohan",
    age:24,
 
}

function  printName(country,state){
    console.log(this);
        console.log(`Hi I am ${this.name}, from ${country},${state}`);
    }

        //  1.++++++====> call()
    // printName.call(user1,"India","Delhi")
    // printName.call(user2,"Australia","Melbourne")
    // printName.call(user3,"Sri Lanka","Colmbia")



        //  2.++++++====> apply()
    // printName.apply(user1,["India","Delhi"])
    // printName.apply(user2,["Australia","Melbourne"])
    // printName.apply(user3,["Sri Lanka","Colmbia"])


        // 3.++++++====> bind(--retuen a new function )

        const newFun1 = printName.bind(user1,"India","Delhi")
        const newFun2 = printName.bind(user1,"Australia","Melbourne")
        const newFun3 = printName.bind(user1,"Sri Lanka","Colmbia")

        console.log(newFun1);

        newFun1()
        newFun2()
        newFun3()


