// // let user = {
// //     name : "shyam"
// // }





// // let arr = [1 ,2 ,3]
// // let colors = ["Red","blue","Pink"]
// // //***Dunder __proto__.__proto__ <--- to access parents
// // // console.log(arr.__proto__.__proto__ === user.__proto__ );


// // // ***custom method Array
// // Array.prototype.printItem = function(){
// //     for(let i=0;  i<this.length; i++){
// //         console.log(this[i]);
// //     }

// // }

// // console.log(arr.__proto__);
// // arr.printItem()
// // colors.printItem()




// // //***custom method string
// // String.prototype.firstTwoLetters = function(){
// //     return this[0]+this[1]
// // }
// // let str = "Mohan"
// // console.log(str.firstTwoLetters());



// // //****prototype chaning
// // Object.prototype.allInone = function(){
// //     console.log("Hye bro this is one ");
// // }

// // function random(){

// // }

// // "Rakesh".allInone()
// // arr.allInone()
// // user.allInone()
// // random.allInone()
// // Number(1).allInone()



// //Shadowing
// // let user = {
// //     name: "shyam",
// //     toString(){
// //         console.log("Thiis is my method");
        
// // }
// // }

// // user.toString()


// //*** bojetc.creat */
// let common = {
//     eat(){}
// }

// let person = Object.create(common)

// person.walk = function(){
//     console.log("walk");
// }

// let student = Object.create(person)

// student.study = function(){
//     console.log("study");
// }

// console.log(person);
// console.log(student);


// console.log(student.hasOwnProperty("study"));
// console.log(student.hasOwnProperty("eat"));

// console.log(Object.getPrototypeOf(student));

// Object.setPrototypeOf(person,{
//     hello(){
        
//     }
// })

//  class User{
//         country = "india" //defautl proprty
//         constructor(name,country){
//           this.name = name// instance property
//           this.country = country
//         }

//         printName(){ // instance method
//             console.log(this.name);
//         }
//     }

//     const u1 = new User("shyam","India")
//     const u2 = new User("Mohan","India")

//     console.log(u1);
//     console.log(u2);

//     u1.printName()

// //** instenceof kya exist karti hai */
//  console.log(u1 instanceof User);
//  console.log(Number(1) instanceof Object);//false
//  console.log(new Number(1) instanceof Object);//true



// const obj = {
//     name:"Mohan",
//     age:100,
//     greet: function(){
//         console.log("hello ji");
//     }
// }

// console.log(obj.hasOwnProperty("name"));

// const arr =[10,20]

// console.log(arr.length);




//classes

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hii${this.name}`);
    }
}

const person1 =new person("Mohan",16)

const person2 =new person("Sohan",16)


// person1.sayHi()
// person2.sayHi()

// console.log(person1);


class Custmer extends person{
    constructor(name,age,account,balance){
        super(name,age)
        this.account = account;
        this.balance = balance;
    }
    checkBalcnce(){
        return this.balance
    }
}

const c1 = new Custmer("Shiva",12,23526562346,1500)

console.log(c1.account);

