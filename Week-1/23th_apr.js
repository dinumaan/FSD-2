// var obj = {
//     name: "dipu",
//     test: function () {
//         console.log(this.name);
//     }
// }

// var testing = obj.test;

// var obj2 = { 
//     name: "bat", 
//     test1 : testing 
// };

// obj2.test1();

// console.log(obj2)

// why obj2.testing() is not executing the function ?

// what's an algorithim ? => procedure 


// function otherFunction(){
    
//     let i = 0;

//     const func = () => {
//         console.log(i);
//     }

//     return func;
// }

// otherFunction();

// setTimeout(otherFunction, 5000);

//  what's diff b/w let and var ?

// let => block scope 

// 0.01ms
// 

// var i = 5;

// function demo() {

//     for (let i = 0; i < 7; i++) {
        
//         console.log("Hii");

//         setTimeout( () => console.log(i) , 2000);
//     }
    
//     tweets = apiCall(); // 2min

//     display(tweets);
// }

// demo();

// 

// output ? 

// diff b/w bind and call & apply ?

let arr = [23, 45, 67, 87, 90, 34]

// print factorial of each element in an array  array ?

let n = arr.length;

for(let i = 0; i < n; i++){
    console.log(arr[i]+2);
}

const factorial = (n) =>{
   //

} 

// itrate each element of array

arr.forEach( (element) => {console.log(element);})
















// demo() // i was not able to get the context in the case of let 







