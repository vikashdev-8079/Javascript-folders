// ======>OBJECT<======
// let user={
//     userEmail:'v7708349@gmail.com',
//     userPhone:8956868687,
//     userStatus:true,
//     userAddress:'mp',
    

// }
// Accessing properties
// console.log(user);
// console.log(user['1']);
// console.log(user.userAddress);//Dto notation
// console.log(user['userPhone']);//Dto notation

//==>new data add
// user['age']=22
// or
// user.age=22
// console.log(user);


//==>new data update
// user.userEmail="shyamroy@user.com"
// console.log(user);

// Destructing of Object
// let userName= "sk";
// let user={
//     userEmail:'v7708349@gmail.com',
//     userPhone:8956868687,
//     userStatus:true,
//     userAddress:'mp',
//     userName
// }
// // console.log(user);

// let{userEmail:email,userAddress,} =user
// console.log(email);


// ====Rest Operator====
 
let user={
    userEmail:'v7708349@gmail.com',
    userPhone:8956868687,
    userStatus:true,
    userAddress:'mp',
   
}

let{userEmail,...others} =user
console.log(userEmail);
console.log(others);
