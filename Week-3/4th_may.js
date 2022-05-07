// Hii Everyone We will start session 7:05

// closure (scope & excutaion context) => combination of functions ?

// main part in js engine 
    // 1. thread of excuation
    // 2. memory/ enviroment variabel
    // 3. call stack

// function multiplyBy2(num) {
//     let res = num *2;
//     return res;
// }

// multiplyBy2();
function outerFunction(){
    let counter = 1;
    function innerFunction(){
        counter++;
        console.log(counter);
    }
    // innerFunction();
    return innerFunction;
}

outerFunction();
outerFunction();
outerFunction();

// closuer ? its all start with returning a fucntion from a function 
// close over local variable enviroment 
// function ? chunk of data

// const func = outerFunction();
// func();
// func();
// func();
// func();

// call once and memoize
// indviusal return of backups 

// const func1 = outerFunction();
// func1();
// func1();
// func1();



