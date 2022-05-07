// 'use strict'
// Sharukh is a teacher in IIT Madras and in the morning session he is taking the attendance of the students by noting
// their register numbers randomly in the sheet. Finally, he counted the number of students in the class and the
// number in the sheet. Sharukh got the total student as N number and in the sheet, it is showing as N-1. Write a
// program to find the missing register number in the sheet.

// Note: Register numbers are in series


// what about numbers 

// let arr = [20, 21 ,22, 23, 33, 34, 35, 36, 37, 38, 39, 24, 25, 26, 27, 29, 30, 31, 32];

// // n = 10^9 => 10^18

// // (39*(39+1)/2  - 19*(20)/2 ) - sum(arr);

// function solve(arr){
//     arr.sort( (a,b) => a-b); // nlgn

//     let first = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if(first + i != arr[i]){
//             console.log(first + i);
//             return;
//         }
//     } // n

//     console.log("No missing element is there");
    

    
// }

// solve(arr);

// what time complexity ? nlgn ?

// is there a better solution ?

// sum of n natural Number ? n*(n+1)/2

// strat = min   => (start-1)*(start)/2 

// end  => min + n => end*(end+1)/2

// sum => 



// for(let i = 0; i < n; i++){
//     //
//     // search for min + i  ?
    
// }

// O(n^2)

// 2 problem 
// Aishwarya is attending interview for an Relevel company and in the logical round they ask to write a program to
// convert the double or triple-digit number by adding number itself until the number changed to single digit and sort
// the number in ascending order.

// 2 3 48 68 75 87

// 87 => 15 => 6%10 = 0
// 234 => 4 + 23;
// 23  => 3 + 2
// 2 => 2
// function digitSum(num){
//     if(num < 10){
//         return num;
//     }

//     return num%10 + Math.floor(digitSum(num/10));
// }

// function sol(num){
    
//     if(num < 10){
//         return num;
//     }

//     let sum = digitSum(num);

//     return sol(sum);
// }

// function FinalSol(arr){
//     arr.forEach((element, idx, arr) => {
//         arr[idx] = sol(element);
//     });
// }

// console.log(arr);

// core of development ?

// 1. store data
// 2. apply the functionality on data 

// why development is tough ?

// student1, student2

// name , class, score => data
// incrementScore => functionality
// incrementClass => 


// Oops => 

// Object 

let student1 = {
    name : "Vivek",
    Class : "FSD2",
    score : 0,
    incrementScore : function (score){
        score++;
    }
}

// Object.prototype = 
// __proto__

// student1.hasOwnPropery
// student1.hasOwnProperty("Class");
// student1.prototype
// student1.anyting;

/

// In js varible don't have types values do have type

// let a = 0;

// console.log(typeof a);

// a = "Dinesh";

// console.log(typeof a);





 


// let student2 = Object.create(null);

// student2.name = "Dinesh";
// student2.Class = "FSD2";
// student2.score = 0;
// student2.incrementScore = function(score){
//     score++;
// }



// // we are breking rule ? DRY ? solution ? functions ? 





// function CreateEntry(name1, Class1, score1){
//     let student = Object.create(FunctionStore);

//     student.name = name1;
//     student.Class = Class1;
//     student.score = score1;

//     return student;
// }

let FunctionStore = {

    incrementScore: function() {
        this.score++;
    },

    incrementClass: function(){
        this.Class++;
    }
}

// let student3 = CreateEntry("meleena", "FSD2", 0);

// how do we check student3 have Class property or not ?
// problems => inefficient memory use ? solution ?

// console.log(student3.score);

// student3.incrementScore();

// console.log(student3.score);

// console.log(student3.hasOwnProperty('name'));



// new keyword ?

// automate 2 things 
// create obejct 

// return object





function CreateEntry(name1, Class1, score1){
    this.name = name1;
    this.Class = Class1;
    this.score = score1;
}

// CreateEntry.prototype  => FunctioStore

CreateEntry.prototype.incrementScore = function(){
    this.score++;
}

CreateEntry.prototype.incrementClass = function (){
    this.Class++;
}


let student4 = new CreateEntry("gauri", "2", 0);

student4.incrementScore();
console.log(student4.score);


// Class ? 

class CreateEntry {

    constructor (name, Class, score){
        this.name = name;
        this.Class = Class;
        this.score = score;
    }

    incrementClass (){
        this.Class++;
    }

    incrementScore (){
        this.score++;
    }

}




