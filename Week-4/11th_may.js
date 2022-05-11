// function StudenCreator(name, Class, score){
//     this.name = name;
//     this.Class = Class;
//     this.score = score;
// }

// StudenCreator.prototype.incrementScore = function(){
//     this.score++;
// }

// StudenCreator.prototype.changeName = function(newName){
//     this.name = newName;
// }

// Solution 4 : 


// let student1 = {
//     name: "Maleena",
//     Class: "FSD2",
//     score: 0,

//     incrementScore: function(){
//         student1.score++;
//     }
// }


// function outer(){

//     let teacher = "Dinesh";

//     return function innner(){
//         console.log(teacher);
//     }
// }

// let f1 = outer();





// const arr = [1, 2, 3,4];

// arr[1] = 10; // error !

// const a = 5;

// a = 8; // error !

// student1.incrementScore();

class StudenCreator {

    constructor(name, Class, score){
        this.name = name;
        this.Class = Class;
        this.score = score;
    }

    incrementScore(){
        this.score++;
    }

    changeName(newName){
        this.name = newName;
    }
    
};

// let student = new StudenCreator("vivek", "FSD2", 0);
// student.changeName("VIVEK");
// console.log(student);

// what's encapsulaton ?




