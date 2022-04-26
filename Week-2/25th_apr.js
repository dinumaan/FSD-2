// 1. how javacscript works

// 2. function and higher order function aka map, filter, reduce & forEach

// how js interannly runs this code ?

// let a = 6;

// function multiplyBy2(num){
//     return num*2
// }

// multiplyBy2(5);

// console.log(result);



// thread of execuation 
// memory

// call stack => where is our thread of

// why we really need function ?

// function func(){
//     let num = 10;
//     console.log(10*10);
// }

// for(let i = 0; i < 5; i++){
//     func();   
// }

// create a function of 10 seqaure ?


// function SquareOf10(){
//     return 10*10;
// }

// create a function of 9 sqaure ?

// function SquareOf9(){
//     return 9*9;
// }

// SquareOf9();

// DRY rules ? breaking 

// function SquareOfnum(num){
//     return num*num;
// }

// SquareOfnum(11);

// create a function which will copy a array and return a new array whose each element is divided by 2

function DivideBy2(arr){
    
    let newArray =  [];

    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i]/2);
    }

    return  newArray;
}

let arr = [2, 4, 6, 8, 10];

// let result  = DivideBy2(arr);

// console.log(result);

// multiply by 2 each element 

function DivideBy2(arr){
    
    let newArray =  [];

    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i]*2);
    }

    return  newArray;
}

// let result  = DivideBy2(arr);

// console.log(result);
// add 2 in each element ?

function AddBy2(arr){
    
    let newArray =  [];

    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i]+2);
    }

    return  newArray;
}

// let result  = DivideBy2(arr);

// console.log(result);

// which rule we are breaking ? DRY ? solution ?

function solution(arr, instruction){
    let newArray =  [];

    for(let i = 0; i < arr.length; i++){
        if(instruction == '+'){
            newArray.push(arr[i]+2);
        }

        if(instruction == '*'){
            newArray.push(arr[i]*2);
        }
        if(instruction == '/'){
            newArray.push(arr[i]/2);
        }
    }

    return  newArray;   
}

// more clear ?

function solution(arr, instruction){
    let newArray =  [];

    for(let i = 0; i < arr.length; i++){
        newArray.push(instruction(arr[i]));
    }

    return  newArray;   
}

function dby2(num){
    return num*2;
}

// const dby2 = (num) => num/2;
const dmul2 = (num) => num*2;

// cb

let result  = solution(arr, dby2);

console.log(result);

// function => first class object ?

// async ??















