'use strict'

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

    function studentCreator(name, Class, score = 0){
        const newStudent = {};
        
        newStudent.name = name;
        newStudent.Class = Class;
        newStudent.score = score;

        newStudent.incrementScore = function(){
            this.score++;   
        }

        return newStudent;
    }

    const student4 = studentCreator("Deepak", "FSD2", 0);
    const student5 = studentCreator("Tinu", "FSD2", 0);

    student4.incrementScore();

    console.log(student4);

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

    function studentCreator(name, Class, score = 0){
        const newStudent = Object.create(UsefulFunctionStore);
        
        newStudent.name = name;
        newStudent.Class = Class;
        newStudent.score = score;


        return newStudent;
    }

    const UsefulFunctionStore = {
        incrementScore: function(){
            this.score++;
        },

        nameChane: function(newName){
            this.name = newName;
        }
    } 

    let student6 = studentCreator("tinu", "FSD2", 0);
    student6.incrementScore();
    student6.nameChane("Tinu");
    console.log(student6);

// Pros and Cons of solution 2
