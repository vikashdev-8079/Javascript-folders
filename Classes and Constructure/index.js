// ===>this keyword<====
//funciton decleratin k hota hai



// function outter(){
//     console.log(this);
// }
// outter()




// iska this nhi hota ya paren se leta hai
// const random = ()=>{
//     console.log(this);
//    }


// like here ==>
//    function outter(){
//    const random = ()=>{
//     console.log(this);
//    }
// random()
// }
// outter()

// this target same
// function product(name,price){
//    this.productName = name
//    this.productPrice= price
//     return this;
// }
// const p1 = product("Iphone Ultra pro max",2364744)
// const p2 = product("Sumsung glaxy ",12344744)

// console.log(p1.productName);



// new object
// 1 {}
// 2 function->{}
// 3 Prototype
// 4 Automatcly returns new object
// function product(name,price){
//    this.productName = name
//    this.productPrice= price
//     return this;
// }
// const p1 = new product("Iphone Ultra pro max",2364744)
// const p2 = product("Sumsung glaxy ",12344744)

// console.log(p1.productName);
// console.log(p2.productName);


// ===>Contructure Function<=====
// function product(name,price){
//   this.name = name
//   this.price = price
//   return "hello"
// }
// const p1 = new product("Iphone Ultra pro max",2364744)
// const p2 = new product("Sumsung glaxy ",12344744)

// console.log(p1);
// console.log(p2);



//===>ES6 (class) ===>
// constructur function automatecly invoke while creating new instance of class
    class User{
        country = "india" //defautl proprty
        constructor(name,country){
          this.name = name// instance property
          this.country = country
        }

        printName(){ // instance method
            console.log(this.name);
        }
    }

    const u1 = new User("shyam","India")
    const u2 = new User("Mohan","India")

    // u1.name = "Rakesh"
    // console.log(u1);
  

    class BankAccount{
        #balance; // this is private property
        static totalBankAccount = 0;
        constructor(initialBalance){
            this.#balance = initialBalance
            BankAccount.totalBankAccount++

        }

        get(){ // method
            console.log(this.#balance);

        }

        withdarw(ammount){  // method
            if(ammount>this.#balance){
                console.log("No money that excat ammount");
                return
            }
        
                this.#balance= this.#balance - ammount
            

        }

        deposit(ammount){  // method
          if(ammount <=0 ){
            console.log("Ammount must be grater then 0");
            return 
          }
            this.#balance = this.#balance + ammount

        }
        static claculateTax(){ // static method
            console.log("calculating tax...");
        }
    }
   
    let acc1 = new BankAccount(1000)
    let acc2 = new BankAccount(1000)
    let acc3 = new BankAccount(1000)
    let acc4 = new BankAccount(1000)

//     acc1.get()
//   acc1.withdarw(1500)
//   acc1.get()
//   acc1.deposit(14233)
//   acc1.get();
//   acc1.withdarw(14000)
//     acc1.get();
   

// not better way to make private (#blance)
acc1.blaance = 120000;
acc1.get()

//edge case
   acc1.deposit(-100)
    acc1.get()
    // acc1.claculateTax()//acc1.claculateTax is not a function

//Calculate tax to work BankAccont not instance(copies me) here methos staic =>
// BankAccount.claculateTax
  console.log(BankAccount.totalBankAccount);


    


