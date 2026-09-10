// =====>Object_Descturing<=====
// let student = {
//     name:"Shaym",
//     rollNo:34,
//     subject:["math","english","hindi"],

// }

// let{subject,...hello}=student//Rest operator //it cpmes always last
// console.log(hello);

// =====>how to rename key
// student.name="mohan"
// student['name']="Mahesh"//1 way
// console.log(student);//2 way
// let{subject : vishay,...hello}=student//3 way
// console.log(vishay);
// console.log(student);

// =====>how to deleat key
// delete student.subject
// console.log(student);

//====>Dafault Value
//  let{subject : vishay,totalMarks = 500,...hello}=student
//  console.log(totalMarks);

// ====>Array Mearg
// let arr1= [1,2]
// let arr2= [3,4]
// let arr3=[...arr1,...arr2]
// console.log(arr3);
// for(let v of arr3){
//     console.log(v);
// }

//====>Object Mearg
// let obj1={
//     name:"shyam",
//     phone:9464373484,
//     // name:"Mohan"//if any key two bay then last most valid

// }

// let obj2={
//   address:"vrindavan",
//   addharCard:763485683465,
//   name:"Mahesh"

// }

// let obj3={...obj1,...obj2}
// console.log(obj3);

// ==>Array and object Update
// ++>Array update
// const arr=[1,2,3,4,]
// console.log(arr);
// // arr[1]="updated"//one to one change
// arr.splice(0,3,9,8,7)//start,last se ek kam tak update karega,value jo do
// console.log(arr);

// ++Object Update
// const obj ={
//     name:"Shivam",
//     rollNo:68,
//     address:null
// }
//

// obj ={     //=>>all update obj
//     add:"varnasi"
// }
// console.log(obj);   //one by one update
// obj['name']='mohan'
// obj.name='shyam'
// console.log(obj);

// delete obj.rollNo //properties deleated
// console.log(obj);

//===>Optional chnning
// const obj={
//  address:null
//  }
//  console.log(obj.address?.street);//(?=>optional channig)

// ======>Mutability and Imutibility<=====
//Mutability
// let arr=[1,2,3,4,5,6]
// arr.flat()
// let arrCopy=arr;

// let arrCopy2 =[...arr]//spread operator

// arrCopy2.pop()
// console.log("arr",arr);
// console.log("arrCopy",arrCopy2);
