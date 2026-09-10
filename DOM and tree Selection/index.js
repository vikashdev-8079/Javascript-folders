// ====>Fronted releated (js)<===

// let h1 = document.getElementById("h1")
// let h1 =document.querySelector("h1")//throw tag
// let h1 =document.querySelector(".h1")//throw class
// let h1 =document.querySelector("#h1")//throw id

// let h1 =document.querySelectorAll("h1")//throw id all select 
// console.log(h1);


// Method =>read and write
// let p = document.querySelector("p")
// console.log(p);
// p.textContent = "hello bacho kasie ho"//Text co change karna
// p.textContent = "<h2>hello sir</h2>"//
// p.innerHTML = "<h2>hello sir</h2>"//very very risky

// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);


// ====>Css manage from js<====
// SetAttribute=>attribute ko set krna 
// getAttribute =>attribue ko find karna
// removeAttribute =>attribute ko remove karna

// p.setAttribute("style" , "background-color: aqua; font-size:50px")


// let btn = document.querySelector("#btn")
// const res = p.getAttribute("style")
// console.log(res);
// p.removeAttribute("style")
// btn.setAttribute("disabled", "true")
// btn.textContent = "Remove"


// Classlist ke methed
// 1.add =>class add krna
// 2.removeAttribute =>class ko remove karna
// 3.toggle =>class exsit krti hai to add remov ekardo nhi to ad kardo
// 4.contains=> class hai ya nhi (true and flase data hai)
// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")
// console.log(p.classList.contains("random2"));


//style ke throw css lgana
// p.style.backgroundColor = "red" // Camelcase
// p.style.fontSize = "50px"

//Dataset attribute
// a way

// p.dataset.helloDostoHii = "hii"
// console.log(p.dataset.helloDostoHii = "hii");


// let product = [
//     {
//         name : "Iphone 20",
//         price: 12324235
//     },
//      {
//         name : "Sumsung 15",
//         price: 15464235
//     },
//      {
//         name : "Mi 23",
//         price: 123254545
//     },
//     {
//         name : "Poco",
//         price:546545
//     }
    
// ]
//1.********cerat element
// let div = document.createElement("div")
// let div2 = document.createElement("div")
// div.textContent = "hye sir"
// div2.textContent = "Div2"

// let body = document.querySelector("body")

// 2.*********append
// // body.appendChild(div)
// // body.appendChild(div2)

// // body.append(div,div2)last in body and yah row nodebhi hai
//  body.prepend(div,div2)//start in body


// let product = [
//     {
//         name : "Iphone 20",
//         price: 12324235,
//         imgUrl :"https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000" 
//     },
//      {
//         name : "Sumsung 15",
//         price: 15464235,
//           imgUrl :"https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000" 
//     },
//      {
//         name : "Mi 23",
//         price: 123254545,
//           imgUrl :"https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000" 
//     },
//     {
//         name : "Poco",
//         price:546545,
//           imgUrl :"https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000" 
//     }
    
// ]

// // let productList =document.querySelector("#product-list")
// // console.log(productList);

// // product.forEach((product)=>{
// //     const card =document.createElement("p")
// //     card.textContent = `${product.name} - ${product.price}`
// // productList.append(card)
// // })


// // long method
// // let productList =document.querySelector("#product-list")
// // console.log(productList);

// // product.forEach((product)=>{
// //     const card =document.createElement("div")
// //     card.classList.add("singleProduct");

// //     const upperDiv = document.createElement("div")
// //     const lowerDiv = document.createElement("div")

// //     const img = document.createElement("img")

// //     img.setAttribute("src","https://img.freepik.com/premium-photo/showcase-mobile-isolated-white-background_506134-18598.jpg?w=2000")
// // upperDiv.append(img)
// // productList.append(card)

// // card.append(upperDiv)


// //short method
// let productList =document.querySelector("#product-list")
// console.log(productList);

// product.forEach((product)=>{
//      const card =document.createElement("div")
//     card.classList.add("singleProduct");

//        card.innerHTML  =`  <div id="pic">
//             <img src=${product.imgUrl} alt="">
//            </div>
//            <div id="detalis">
//                <p>${product.name}</p>
//                <p>${product.price}</p>
//            </div>`


//     productList.append(card)


// })



// //Removing element
// // 1st way
// let body = document.querySelector("body")
// let h2 = document.querySelector("#h23")//ek h2 hai to
// let h2 = document.querySelector("#h23")// many hai to id dekar remove karnege
// // body.removeChild(h2)//you have to perform on parent

// // 2.way
// h2.remove() // Dircectly on the element you want to remove




// //clonenode
// let clone = productList.cloneNode(true);
// // console.log(clone);
// // body.append(clone)


// //.children =>retun html collection but not arry
// // console.log(productList.children);

// const items = productList.children

// // productList.insertBefore(h2, items[2])//for precise positing

// // items[2].before(h2)
// // items[2].after(h2)


//1. DOM Selectors



