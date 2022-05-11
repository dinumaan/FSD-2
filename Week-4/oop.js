'use strict'


let students = [];

// ______________Let's Learn OOPs in a Different Way :) ! ________

/* core of development ?
        
        1. store data (save data)
        2. apply the functionality on data (Run Code (literlly functions))
*/

/* Easy ! So why development is tough ?
    
    Devlopment is tough because--
        1. how to save millions of data ? 
        2. what about special previllage (like admin acces)?
        3. Where is the functionality when I need it?
        4. How do we make sure the functionality is only used on the right data ?
        5. How to add functionality ( new features) ?
        6. AND AND How to make code efficient and performent ? 
    
    So We need to organize our code as it gets more complex but How ?

*/

/* Hmmm... So what's the solutions ?
    
    OOP => - an enormously popular paradigm for structuring our complex code 
        with the helps of oop we are able to solve all these probelems !
*/

// Yay! finnaly now you can do devlopment using oops and make this world more better place:)


// ___________okay Enough Questions (or maybe barin exercise) Now let's make web app to keep record student score  ________//


/* what data and functionality do we need for our app ?
    
    does it depends on your bussines logic ?
        1. student Name
        2. student Class
        3. student score
        4. IncrementScore : function which increment the score of student

*/

// Okay we dicided the data and functionality

/* But what would be best way to store this data and functionality together in once place?
    
    Objects => store functions and data 

    what's encapsulation ?

*/

// okay now we dicided data and fuctionality and we can store them so let's do it

    const student1 = {
        name : "Vivek",
        Class : "FSD2",
        score : 0,
        incrementScore : function (score){
            score++;
        }
    }

    // 

// creating student2 using 'dot notation'

    let student2 = {}; // creating an empty object 

    student2.name = "Gauri";
    student2.Class = "FSD2";
    student2.score = 0;
    student2.incrementScore = function(){
        student2.score++;
    }
    // console.log(student2);

    // creating studet3 using Object.create

    let student3 = Object.create(null);

    student3.name = "Ravindra";
    student3.Class = "FSD2";
    student3.score = 0;
    student3.incrementScore = function(){
        student3.score++;
    }
    // console.log(student3);

// what alternative techiques do we have for creating objects ?

/* Problems and soltion-
    1. How we are going to make millions users on our app ?
    2. isn't we are repeatng our code again and again for making new student ? 

    So What is the soltions ?
        --Hint : what we do if we want to repeat our some code again and again ?
        So Inseated of creating object by hand we can generate object using function and return them
*/


// Solution 1 - Generating objects using a functions

    // function studentCreator(name, Class, score = 0){
    //     const newStudent = {};
        
    //     newStudent.name = name;
    //     newStudent.Class = Class;
    //     newStudent.score = score;

    //     newStudent.incrementScore = function(){
    //         this.score++;   
    //     }

    //     return newStudent;
    // }

    // const student4 = studentCreator("Deepak", "FSD2", 0);
    // const student5 = studentCreator("Tinu", "FSD2", 0);

    // student4.incrementScore();

    // console.log(student4);


/* Pros and cons of Solution 1-
    cons : Each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies

    pros: it's very simple and a clear structure !

    so it there a better way ?

        Hint : what about store all useful functions (that applies on every object ) in a single place ?
        
        So we can store all useful functions in single object and link the this object to all new creating object

        But How to make this link ?
            --we can make link using prototype chain

        Okay but what is prototype chian ?
            --
*/

// Solution 2: Using the prototype chain

    // function studentCreator(name, Class, score = 0){
    //     const newStudent = Object.create(UsefulFunctionStore);
        
    //     newStudent.name = name;
    //     newStudent.Class = Class;
    //     newStudent.score = score;


    //     return newStudent;
    // }

    // const UsefulFunctionStore = {
    //     incrementScore: function(){
    //         this.score++;
    //     },

    //     nameChane: function(newName){
    //         this.name = newName;
    //     }
    // } 

    // let student6 = studentCreator("tinu", "FSD2", 0);
    // student6.incrementScore();
    // student6.nameChane("Tinu");
    // console.log(student6);


/* Pros and Cons of solution 2
    cons : No Problems at all, its awwww.. maybe a little but long every time make a object and return it 

    Pros : super easy to understand !!!

    So is there more better way ?

        -- introduction to new keyword

            whenever we call studentCreator (constructor) function to generate object we always create a object and return it and new keyword automate these two things
                1. create a new student object
                2. return new student object
            
            problem with new :
                But now new is automatically creating a new object then how we are going to refer auto created object ?
                and when we create a obejct we link our UsefulFunctionStore object but now how we are goint to link it?

            So What's solution ?
                --remeber prototype ?
                
                // statement: functions are both objects and functions
                    function addTwo(number){
                        return number + 2;
                    }

                    addTwo.storeSomething = 5;
                    console.log(addTwo.prototype); // what's is this where is prototype object is ?
                    console.log(addTwo.storeSomething);
                
                So All functions have a default property on their object version, ’prototype’,
                which is itself an object - to replace our UsefullFunctionStore object
            
                --So let's discuss about __proto__ as well
                    All objects have a __proto__ property by default which defaults to linking to a big
                    object - Object.prototype (replacemet of our UsefullFuctionStore object)
                
                What's difference between __proto__ and prototype ?

            As we can see new keyword only automate 2 things but at the same time create lots of problems so why do we use new ?
                --don't know maybe because other langauge use new so let's use in js 
            
            So solution is:
                    1. we refere our auto created object with this keyword
                    2. and we replace our UsefulFunctionStore object with .prototype object 
            
*/



// Solution 3 - Using new keyword

    // function StudentCreator(name, Class, score = 0){
        
    //     this.name = name;
    //     this.Class = Class;
    //     this.score = score;

    // }

    // StudentCreator.prototype.incrementScore = function(){
    //     this.score++;
    // }

    // StudentCreator.prototype.nameChange = function(newName){
    //     this.name = newName;
    // }

    // let student7 = new StudentCreator("idk", "FSD2", 0);
    // student7.incrementScore();
    // student7.nameChange("Idk");
    // console.log(student7);


// NOTE 1 : just to know when we call a function wheather we have to use new keyword or not if we have to use new keyword before calling the function. We make first letter of function name capital.

// NOTE 2: As you can see this new keyword is completely different from c++ and java programming languange 

// NOTE 3: when call StudenCreator function it create a object and assign some properties to newly created object and return object because of that simmilr to other programming language we call this function constructor fuctions.

/* Pros and cons of Soltion 3:
    
    In our newly created object we are writing our shared methods separately from our object. (in .prototype object);
    other language to this in a single place

    So can we do in javaScript as well ?
        -- yes with the help of class keyword we can do this
        
    
    So we can see class in javaScript is just a 'Syntactic Sugar' that allow to put our methods and propery together 

*/

// Solution 4: using class keyword

    // class StudentCreator {

    //     constructor(name, Class, score){
    //         this.name = name;
    //         this.Class = Class;
    //         this.score = score;
    //     }

    //     incrementScore(){
    //         this.score++;
    //     }
    //     nameChane(newName){
    //         this.name = newName;
    //     }
    // }

    // const student8 = new StudentCreator("maleena", "FSD2", 0);
    // student8.nameChane("Maleena");
    // student8.incrementScore();
    // console.log(student8);
                

/* Pros and cons of solution 4 :
    pros : feels more like style of other language (like c++, java)

    cons: 99% developer have no idea how behind the secene things happening 

    is There a better Solution?
        --till Now we don't have maybe in future you found better solution :)

*/



