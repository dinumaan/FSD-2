/* ______________ what is data structure? _________________________ */

// array ? => collection of data => data type should be same type

// ______________ define array data structure  ________________________ 
    
    let arr = [12, 5, 78, 90, 34, 18]  


// ________________ opreation on array data structure _____________________

// ________________ 1. how to add a  number in array ? ___________________
    
    arr[arr.length] = 16;
    arr.push(16) // constant  
    // arr = [12, 5, 78, 90, 34, 18, 16]

    // what if i want to add number in the begining ?

    // arr = [16, 12, 5, 78, 90, 34, 18] 

// ________________ 2. delete a element in an array ? _________________________


    
    // arr.pop() => constant time but it will last element of array 

    // what if i want to delete a specific element (let's say 78 ? 
    //  arr = [16, 12, 5, 78, 90, 34, 18] ====> [16, 12, 5, 90, 34, 18] ?

    let index = -1;

    for(let i = 0; i <= arr.length-1; i++){

        if(arr[i] == 78){
            index = i;
            found = true;
            break;
        }
    }

    // index = arr.indexOf(78)
    // what if index value is still -1?

    for(let i = index; i <= arr.length-2; i++){
        arr[i] = arr[i+1];
    }

    // after delete opration what will be size of array?
    // size = arr.length;
    // size--;
















console.log(arr);










// arr.unshift(16);










































