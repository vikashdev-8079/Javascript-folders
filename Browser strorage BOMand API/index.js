// ===>Storage BOM and WEB API<===


// ===>LOCAL-STORAGE
//1.setItem(key,value) a// string formate
//2.getItem(key)
//3.key( take index and batat hai ki key kis index par hai)
//4. removeIten(".remove the item isem key chahiye")
//5.cler(all  local storage clear krta hai

 localStorage.setItem("num" , 1)
localStorage.setItem("num2" , 1)
localStorage.setItem("num3" , 1)
localStorage.setItem("num4" , 1)


// let result = localStorage.getItem("num")
let result = localStorage.getItem("shyam")// null deg abecuse local stroage me shyam name koi key nhi hai

let result2 = localStorage.key("0")
console.log(result2);

 localStorage.removeItem("num")



document.querySelector("#Clear-local-Storage").addEventListener("click",()=>{
    localStorage.clear()

})


//SESSION STORAGE===>
    
document.querySelector("#Session").addEventListener("click",()=>{
sessionStorage.setItem("session" , "iteam")
})