// problems's link => http://csbin.io/callbacks

// difference b/w forEach and Map ?

// let arr = [4, 5, 8, 10];

// function func(item, index, arr){
//     arr[index] = item*2;
// }

// let res = arr.map(func);

// arr.forEach( () => {

// });

// console.log(arr);


// Tinus's doubt

// function sum(a, b){
//     console.log(a, b);
//     // return 
// }

// let a = 5;
// let b = 2;
// console.log(a, b);

// Avijeet's dobut

// arr.sort(function())

// function cb(b, a){
//     console.log(a);
//     console.log(b);
//     return b-a;
// }

// let arr = [23, 34, 12, 9];

// arr.sort(cb);

// console.log(arr);

// s1 = "1", s2 = "2" 
// s1 + s2 => "12"
// s1 - s2 ? 


// vivek's doubt

// let arr = [
//     {
//         name: "Dinesh",
//         salary: 1000,
//     },
//     {
//         name: "Vivek",
//         salary: 2000,
//     }
// ]

// function bs(arr,k){
//         for(let i=0;i<k;i++){
//             var isSwapped=false;
//             for(let j=0; j < arr.length-i-1; j++){
//                 if(arr[j]['salary]'] > arr[j+1]['salary']){
//                     [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//                   isSwapped= true;
//                 }
//                 if(! isSwapped)
//                 break;
    
//             }
//             return arr;
//         }
// }



const k=2;
const arr1=bs(arr,k);
console.log(arr1[arr.length-k].name);


