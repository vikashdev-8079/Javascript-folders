// =====>****Inheritance***<======
// --> extends
//--> super()
//--> static
//--> #

// Customer - seller - Admin

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log("login");
  }
  logOut() {
    console.log("logOut");
  }
}


class Customer extends User {
  cart = [];
  constructor(name, email,password) {
    super(name, email);
    this.password= password
  }
  buyProduct() {
    console.log("buyProduct");
  }
  addToCart(item) {
    console.log(this.cart.push(item));
  }
  showCardItem() {
    console.log(this.cart);
  }

  static sendEmail(){}
}



class Seller extends User {
  constructor(name, email) {
    super(name, email);
  }
  addProduct() {
    console.log("addToCart");
  }
}



class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  hideProduct() {
    console.log("HideProduct");
  }
}



class PremiumCustmer extends Customer{
    constructor(name,email,password){
        super(name,email,password)

    }
    getDiscount(){

    }
}





const c1 = new Customer("Shyam", "shyam@email.com",12345);
const s1 = new Seller("Mohan", "mohan@gmail.com");
// const a1 = new Admin("Kanha","mohan@gmail.com")

// c1.addToCart("mackbook");
// c1.showCardItem();
// console.log(c1);
// console.log(s1);
// console.log(a1);

// c1.logOut()

const p1 = new PremiumCustmer("Deva","deva@gmail.com",77777)
console.log(p1);


// p1.sendEmail()






