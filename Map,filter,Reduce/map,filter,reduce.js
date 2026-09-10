// ==========>****MAP****<=========
// let orignalPrice=[100,345,5456,657,657]

// let discountPrice=[]

// for(let value of orignalPrice){
//     // let discount = value*20/100
//     // discountPrice.push(value-discount)//10% discount
//     // //OR
//     discountPrice.push(value * 0.9)//10% discount
// }
// orignalPrice.forEach((value) =>{
//     discountPrice.push(value * 0.9)//10% discount
// })

// console.log(orignalPrice);
// console.log(discountPrice);

// // ======>Mapping
// const discountPrice1 = orignalPrice.map((value)=> value*0.9)
// console.log(discountPrice1);

// let student =[ //Array of object
//    {
//         name:"Shyam",
//         marks:45
//     },
//       {
//         name:"Mohan",
//         marks:56
//     },
//       {
//         name:"sohan",
//         marks:49
//     },
//       {
//         name:"rakesh",
//         marks:47
//     }
// ]

// let studentNames =[]
// student.forEach((value)=>{
//     studentNames.push(value.name)
// })
// console.log(studentNames);
// const studentNames=student.map((student)=>student.name)
// const studentMarks=student.map((student)=>student.marks)
//     console.log(studentNames);
//     console.log(studentMarks);

// let bostedMarks= student.map((student)=>
// {
//     return{...student, marks: student.marks+10}

// })
// console.log(bostedMarks);

// let bostedMarks= student.map(student=>({...student, marks: student.marks+10})

// )
// console.log(bostedMarks);

// // =====>****FILTER*****<=====
// let student =[ //Array of object
//    {
//         name:"Shyam",
//         marks:45
//     },
//       {
//         name:"Mohan",
//         marks:56
//     },
//       {
//         name:"sohan",
//         marks:49
//     },
//       {
//         name:"rakesh",
//         marks:40
//     },
//     {
//         name:"Mukesh",
//         marks:38
//     }
// ]

// let failedStudent=[]
// student.forEach((student)=>{
//     if(student.marks < 43){
//         failedStudent.push(student)
//     }
// })

// console.log(failedStudent);

// const failedStudent=student.filter((student) => student.marks <43).map((student)=>student.name)
// console.log(failedStudent);

// ======>***Reduce****<====

// let marks = [56, 78, 45, 76, 65, 78];
// let totalMarks = 0

// marks.forEach((mark)=>totalMarks +=mark)

// console.log(totalMarks);

// const totalMarks = marks.reduce((accumulator, currentValue) => {

//     return accumulator + currentValue;

// },0)
// console.log(totalMarks);
//OR

// const totalMarks = marks.reduce((totoalMarks, mark) => {
//   return totoalMarks + mark;
// }, 0);
// console.log(totalMarks);


// const totalMarks = marks.reduce((totoalMarks, mark) => totoalMarks + mark,0)
// console.log(totalMarks);


// const totalMarks = student.reduce((totoalMarks, student) => totoalMarks + student.marks,0)
// console.log(totalMarks);


const attendence =["present","absent","present","present","absent"]

//=>{present :3 ,absent:2}
// let obj={}

// attendence.forEach((value)=>{
//     if(obj[value]){
//         obj[value]=obj[value]+1
//     }
//     else{
//         obj[value]=1
//     }
// })
// console.log(obj);

//byreduce
// const obj=attendence.reduce((acc , value)=>{
//     acc[value] = (acc[value] || 0)+1;
//     return acc

// },{})
// console.log(obj);