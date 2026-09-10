// ++++++======ARRAY======++++
// let products = ["tshirt", "lower", "cap", "shoes"]
// console.log(products);

// //indexing array
// let products = ["tshirt", "lower", "cap", "shoes"];
// console.log(products[2], products[3]);//find index
// console.log(typeof products);//type of array
// console.log(products.length);//length of array
// console.log(products[products.length - 1]);//last index find
// console.log(products.at(-1));//last index find

// for (let i = 0; i < products.length; i++) {
//  console.log(products[i]);
// }

// ++=====>Nested Array<=====+++
// let products = [
//   ["tshirt", 566],
//   ["lower", 543],
//   ["cap", 53],
//   ["shoes", 678],
// ];
// // let firstProduct=products[0]
// // console.log(firstProduct);
// // console.log(products[0][0]);
// // OR
// for (let i = 0; i < products.length; i++) {
// //   console.log(products[i][1]);//wrong tarika it used object throw acces
// console.log(products[i][0],products[i][1]);
// }


// let products = ["tshirt", "lower", "cap", "shoes"];


// products.push("hello")//end me add karta hai
// products.pop()//lst se delete karo
// products.unshift("hello")//strat me add krta hai
// products.shift()//start se delete
// console.log(products);

// console.log(products["3"]);
// console.log(typeof products)

// =======>Array<======

// let arr = [10,50,70,80,90]

// console.log(arr);
// console.log(arr.length);

// let arr = [10,50,"Shyam",80,90,true]
// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr);
// arr[1]=90
// console.log(arr);
// arr.push(90,59,"Strike")
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(10,20,30);
// console.log(arr);
// let arr = [10,50,"Shyam",80,90,true]
// arr.shift()
// console.log(arr);


// let arr = [10,20,30,50,90]
// for( let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//OR better way
// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,20,30,50,90]
// let arr2=arr
// arr2.push(100)
// console.log(arr);


// const arr = [10,20,30,50,90]

// arr [2]= 89
// console.log(arr);

// const arr = [10,20,30,50,90]

// const arr2 =arr.slice(1,3)
//copy
// console.log(arr2);

// const arr2 =arr.splice(1,3,"shyam",90,"sk")
// console.log(arr);
// console.log(arr.splice(1,3,"Shyam"));//orginal me chane or tream

// const arr=[1,2]
// const arr2=[10,20]
// const arr3=[10,20]

// const combindarr=arr.concat(arr2,arr3)
// console.log(combindarr);
// const combineArr=[...arr,...arr2,...arr3]
// console.log(combineArr);



// let arr =[190,234,43,[24234,324,34,[32423,34,34,34]]]
// const arr2 = arr.flat(Infinity)
// console.log(arr2);


// const arr = ["Shaym","mohan","shiva"]
// console.log(arr.toString());
// console.log(arr.join("==>"));
// console.log(arr.indexOf("mohan"));
// console.log(arr.includes("mohan"));


// const arr = ["Shaym","mohan","shiva","Mohit","shyam"]
// arr.sort()//it according ascii table used
// console.log(arr);
// arr.sort()
// arr.reverse()
// console.log(arr);

// const a =[101,90,50,30,"mohan","alice",true]
// a.sort()
// console.log(a);

let arr = [10,20,30,435,2,4]

// arr.sort((a,b)=>a-b)
arr.sort((a,b)=>b-a)
console.log(arr);


