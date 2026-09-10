// =======>ARRAY<======
// Arraya index
// let colors =["red","blue","green","purple"]
// console.log(colors[1]);

//Array me array
// let l=[10,34,43,53,[34,45,54]]
// console.log(l[4][0]);//[34,45,54]

//Array itration
// for,forin,forof ka used to find array data
// =>for loop
// let colors =["red","blue","green","purple",10,20]

// for(let i=0; i<colors.length;i++){
//     console.log(i,colors[i]);//index and value
// }

// let p=colors.length;
// for(let i=0; i<p; i++)
// {
// // console.log(i);//index
// console.log(i,colors[i]);//index and value
// }

// for(let i=p-1; i>=0; i--){
//     // console.log(i);//opposite index
//     console.log(i,colors[i]);
// }

// // for of loop
// let l=[14,45,45,54,35,45,45,456,54,]
// let sum=0;
// for(let v of l){
//     sum+=v

//     console.log(v);//find array value
// }
// console.log(sum);//find sum of array
// // for(let k in  l){

//     console.log(k,l[k]);//find array and indexnumber
// }

// let l=[23,34,43,44,54,4,5,54,]
// //find all even number
// for(let v of l){
//     if(v%2==0){
//          console.log(v);

//     }

//}

//find all odd number
// for(let v of l){
//     if(v%2!=0){
//          console.log(v);

//     }

// }

// let l=[1,2,3,5,5]
// console.log(l);
//  l[2]=9
// console.log(l);

// built in array method
// let l= [10,20,30,40,50]
// console.log(l);
// // l.push(60)//push()=>last me value add one or more
// // l.push(70)OR
// l.push(50,60,70)
// console.log(l);

// let l= [10,20,30,40,50]
// console.log(l);
// // l.push(60)//pop()=>last me value deleat krta hai
// // l.push(70)OR
// console.log(l.pop());
// // l.pop()
// // l.pop()
// console.log(l);

// let l= [10,20,30,40,50]
// console.log(l);
// console.log(l.shift());
// // l.shift()
// // l.shift()//strat me value deleat
// console.log(l);

// let l= [10,20,30,40,50]
// console.log(l);
// l.shift()
// l.unshift(59,56,67)//strat me value add
// console.log(l);

//0 1 2 3 4 5
// let l= [10,20,30,40,50]
// console.log(l);
// l.splice(1,2)//first is possiton and second is us position se kitna value deleat kena hai
// console.log(l);

//splice()it is used mid add and deleat
// let l= [10,20,30,40,50]
// console.log(l);
// l.splice(1,2,100,200,300,400)//first is possiton and second is us position se kitna value deleat kena hai third is jitni entery doge add hoga
// console.log(l);

// let l= [20,30,60,40,10]
// console.log(l);
// l.sort()//assending arrder
// console.log(l);

//  let l= [20,30,60,40,10]
//   console.log(l);
//  l.sort()//assending arrder
//  console.log(l);
//  l.reverse()
//  console.log(l);

// let l= [20,30,60,40,10]
// console.log(l);
// l.fill(5,0,3)//0->strat 2<- last->phle== 0->1
// console.log(l);

// let l=[1,2,3,4]
// for(let v of l){
//     l[3]=v;

// }
// console.log(l);

//slice it to copy provide particular
// let l=["blue","red" ,"green","pink"]
// console.log(l);
// let copyArr=l.slice(1,2)//strat->end-1 tak
// console.log(copyArr);

//concat->array lo merg krna
// let l1=[23,23,3,43,34]
// console.log(l1);
// let l2=[34,45,46,45,56]
// let l3=[34,45,489,45,56]
// console.log(l2);
// let finalArr=l1.concat(l2,l3)
// console.log(finalArr);

//includes->to serch member or value hai ya nhi answer->true and false
// let l=[23,234,45,45,76,88]
// console.log(l);
// console.log(l.includes(23));

//index of
// let l=[23,234,45,45,76,88]
// console.log(l);
// console.log(l.indexOf(45));//2
//  console.log(l.includes(45));true


//join it array ko join kis sepreater se krnahai
// let l = ["blue", "red", "green", "pink"];
// console.log(l);
// let join = l.join("-");
// console.log(join);


//toString ->alway , se value ko concetinate krta hai
// let l = ["blue", "red", "green", "pink"];
// console.log(l);
// let join = l.toString()
// console.log(join);


// task1
// find common value in two array
// let m=[1,2,3,4]
// let n=[3,4,5,6]

// for(let v of m){
//    if( n.includes(v)){
//     console.log(v);
//    }

// }


// task2
//find no repaeat value of array
// let m =[1,2,3,5,6,3,64,35,6,2,3,8]
// console.log(m);
// let finalArray=[]
// for(let v of m){
//     if(!finalArray.includes(v)){
//          finalArray.push(v)
//     }
  
// }
// console.log(finalArray);


//task3
//find Maxvalue
// let m =[66,54,66,78]
// let maxValue=m[0]
// for(let v of m){
//     if(v>maxValue){
//         maxValue = v
//     }
    
// }
// console.log(maxValue);



//task4
//find reverse of number without reverse method
// let m =[66,54,66,78]
// console.log(m);
// let finalarr=[]
// for(let v of m){
   
//     finalarr.unshift(v)
// }
// console.log(finalarr);



//pahle add in array  value
//  let arr=[1,2,3,4]
//  console.log(arr);
//  arr.unshift(10,20,30)//onr or more add value first
//  console.log(arr);

// phle se deleat
//  let arr=[1,2,3,4]
//  console.log(arr);
//  arr.shift()
//  console.log(arr);



//last me add
// let arr=[1,2,3,4]
// console.log(arr);
// arr.push(5)//add one or more value
// console.log(arr);

//last me deleat
// let arr=[1,2,3,4]
// console.log(arr);
// arr.pop()//deleat last one value
// console.log(arr);


//Between me add or delete or replace
// let arr=[1,2,3,4,5,6]
// console.log(arr);
// //  arr.splice(1,3)//deletehere =>fiest index second index se kitna
// arr.splice(3,1)//add
// // arr.splice(3,2,['hello'])//delete and replece
// // //start index,delete count=>kitna deleat karna hi start se
// console.log(arr);


//==>slice(start=>index->start->included, end=>index->end->excluded)
// let arr=[1,2,3,4,5,6]
// console.log(arr);
//  let treamArr=arr.slice(1,4)
// console.log(treamArr);


//==>IndexOf()=>index ko pta krna
//     let arr=[1,2,3,4,5,6]
//     console.log(arr);
//    let indexFind= arr.indexOf(6)
//     console.log(indexFind);
//     // Note=>if present return index not present (-1)

//find()
//  let arr=[1,2,3,4,5,3]
//  let res= arr.find((value) =>{
//     return value === 3;

//  })
//  console.log(res);

 



//findIndex()
//  let arr=[1,2,3,4,5,3]
//  let resIndex= arr.findIndex((value) =>{
//     if(value ===3){
//         return value;
//     }
//     // return value === 3;

//  })//  console.log(resIndex);

 

//flat mtb nested nhi chhiye only one array
// let arr=[1,2,3,4,5,[6,7,[8,9,10]]]
// console.log(arr);
// console.log(arr.flat(Infinity));






