// principle of javaScript  and function and higher order function (aks map , filter, reduce)


// 1. higher order function explation 
let arr = [2, 10, 3, 4, 8];

function Map(arr, instruction){
    let newArray =  [];

    for(let i = 0; i < arr.length; i++){
        newArray.push(instruction(arr[i]));
    }

    return  newArray;   
}
// ()
function divideBy2(num){
    return num/2;
}

// divideBy2(2)

let result  = Map(arr, divideBy2);

console.log(result);

// let arr1 = [5, 6, 19, 23, 45];

// Tinu's Dobut 

// what's arr1[i] is represent ? 

for(let i = 0; i < arr1.length; i++){    
    console.log(i);
}

// Map 
const numbers = [1, 2, 3, 4];

function multiplyBy2(num){
    return num*2;
}

const multiplyBy2 = (num) => {
    return num*2;
}


const doubled = numbers.map( (num) => num*2 );

// console.log(doubled); // [2, 4, 6, 8]

// Filter

// const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]


