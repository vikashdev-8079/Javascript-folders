// function convertToPositiveNumber(num){
// return num * -1;
// }

// let PositiveNumber=convertToPositiveNumber(-1000)
// console.log(PositiveNumber);

// ======>Math<======

// let PositiveNum2 =Math.abs(-80)
// console.log(PositiveNum2);

// console.log(Math.PI);

// console.log(Math.pow(2,3));

// console.log(Math.sqrt(25));

// console.log(Math.min(3,5,1,5,6,7,4,8,));

// console.log(Math.max(8,9,48,6,45));

//round ka mtb .5up then show value more .5 down show value low
//decimal deleat
// console.log(Math.round(5.6));
// console.log(Math.round(3.3));
// console.log(Math.round(7.3));
// console.log(Math.round(8.9));
// console.log(Math.round(1.3));

// console.log(Math.round(2.634345));
// console.log(Math.ceil(4.1));//if you give value actual value from .1 more then it takes full ing ceil 1.1==>2


// console.log(Math.floor(7.2));//if floor 1.1=>1






// ****IMP
// let result =Math.floor( Math.random() +1)
// console.log(result);//always 1


// ****IMP
// Ludo logic
// let min = 1;
// let max = 6;
// let result = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(result);



// ******=======>Number<======
// console.log(Number.isFinite(34));
// console.log("56");sting in number
// console.log(Number.parseInt("56"));intiger


//parInt
// let num1="20";//backend
// let num2="20";//backend
// console.log(num1 + num2);2 string ko add kar rha hai
// console.log(parseInt(num1)+parseInt(num2));


//====>toFixed deleat decimal you want (then giv number then it show kitna dikhan hai)
// let num=456.6535;
// console.log(num.toFixed(1));


//toPrecision
// let num=456.435;
// console.log(num.toPrecision(4));





// ++++++STRING+++++
// console.log("Mahesh".toLocaleUpperCase());//change uppercsae

// console.log("MAHESH".toLocaleLowerCase());CHANGE LOWER CSAE OF STRING


//includes =>yah batta hai ki mere paragraph me yah hai ki nahi
// let str="hye Shyam "
// console.log(str.includes("hye"));

// let emial ="example@gmail.com"
// console.log(emial.includes("@") && email.includes(".");


//endWith ==>batata hai ki yah end me hai ki hni
// let fileNmae= "image.png"
// console.log(fileNmae.endsWith(".png") || fileNmae.endsWith(".jpg"));



//replace ==>replace all ke liye
// let greet="hello Dosto,hello bachho"
// console.log(greet.replace("hello","hii"));
// console.log(greet.replaceAll("hello","hii"));



// +++++++====Date=====+++++
// console.log(Date.now());//to get corrrent unix timestemp

// let date= new Date();

// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toDateString());
// console.log(date.toTimeString());