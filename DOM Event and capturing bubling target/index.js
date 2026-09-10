// ===>******DOM Events*****<===


// const btn = document.querySelector("#reveal-gift")

// btn.addEventListener('click', ()=>{
//     console.log("hello hello mic check");
// })

// btn.addEventListener("dblclick",  ()=> {
//     console.log("Double click hua");
// });

// const btn = document.querySelector("#reveal-gift")
// const h1 = document.querySelector("#gift")
// function revealGift(){
// // h1.classList.remove("hidden")
// h1.classList.toggle("hidden")
// // h1.classList.add(visible)
// }

//*****addEventListener */
// btn.addEventListener('click',revealGift)
// // // btn.addEventListener('dblclick',recealGift)
// // btn.addEventListener('mouseover',recealGift)

// ==>****Event Object****<====

// const div = document.querySelector("#reveal-gift")
// const h1 = document.querySelector("#gift")
// function revealGift(event){
//     // // console.log(event);
//     // console.log(event.type);
//     // console.log("target",event.target);//ki sapr tum click kar rhe ho
//     // console.log("currentTarget",event.currentTarget);
//     console.log(event.clientX);//X me kidar click kar rhe hai
//     console.log(event.clientX);//Y me kidar click kar rhe hai
//     console.log(event.clientY);//
// // h1.classList.remove("hidden")
// h1.classList.toggle("hidden")
// // h1.classList.add(visible)
// }

// div.addEventListener('click',revealGift)

/*****removeEventListener */
// remove me function ka reference dete hai('click' ,refernce here)

// let btn =document.querySelector("#btn")

// let counter = 1;

// function fun(e) {

//   if(counter <=10){
//     console.log(counter);
//     console.log(e);
//     counter++

//   }
//   else{
//  btn.removeEventListener("click", fun)
//   }

// }
// btn.addEventListener('click', fun)

//
// btn.addEventListener("click", fun, { once: true });
// btn.removeEventListener("click", fun); //remove

// ======>Bubbling vs capturing<=====
//but not currect way
// let outter = document.querySelector("#outter")
// let  inner= document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")

// outter.addEventListener('click' , (e) =>{
//   console.log("outter");
// },{capture : true})

// inner.addEventListener('click' , (e) => {
//   console.log("inner");
// })

// btn2.addEventListener('click' , (e) =>{
//   console.log("btn2");
// })

// //currect way
// let outter = document.querySelector("#outter")
// let  inner= document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")

// let body = document.querySelector("body")

// body.addEventListener('click' , (e) =>{
//     e.stopPropagation();
//   console.log("body");
// })

// outter.addEventListener('click' , (e) =>{
//     e.stopPropagation();//this is solution bubbling
//   console.log("outter");
// })

// inner.addEventListener('click' , (e) => {
//     e.stopPropagation();
//   console.log("inner");
// })

// btn2.addEventListener('click' , (e) =>{
//   e.stopPropagation();
//   console.log("btn2");
// })

// =====>Prevent default<=====

let product = [
  {
    id: 1,
    name: "Iphone 20",
    price: 12324235,
    imgUrl:
      "https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000",
  },
  { 
     id :2,
    name: "Sumsung 15",
    price: 15464235,
    imgUrl:
      "https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000",
  },
  {
     id :3,
    name: "Mi 23",
    price: 123254545,
    imgUrl:
      "https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000",
  },
  {
     id :4,
    name: "Poco",
    price: 546545,
    imgUrl:
      "https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000",
  },
];

//short method
let productList = document.querySelector("#product-list");

product.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("singleProduct");

  card.dataset.productId = product.id;

  const dltbtn = document.createElement("button");
  dltbtn.textContent = "Remove Product";

  const addToCart = document.createElement("button");
  addToCart.textContent = "Add to cart ";

  // dltbtn.addEventListener("click" , (e)=>{
  //   e.stopPropagation()
  //   card.remove()
  // })

  card.innerHTML = `  <div >
            <img src=${product.imgUrl} alt="">
           </div>
           <div id="detalis">
               <p>${product.name}</p>
               <p>${product.price}</p>
           </div>

  
           `;


  card.append(dltbtn);
  card.append(addToCart);
  productList.append(card);
});

// ==>****Event deligation
productList.addEventListener("click", (e) => {
  e.stopPropagation();

  const dltbtn = e.target;
//   console.log(dltbtn.parentElement);
//   console.log(dltbtn.tagName);
//   console.log(dltbtn.textContent);

//   //   if(dltbtn.textContent === "Remove Product "){
//   //  dltbtn.parentElement.remove()
//   //   }
// console.log(dltbtn.parentElement.dataset.productId);
  // if (dltbtn.textContent === "Remove Product" && dltbtn.tagName === "BUTTON") {
  //   dltbtn.parentElement.remove();
  //   dltbtn.closest(".singleProduct")
  // }


console.log(dltbtn.closest(".singleProduct"));
});
