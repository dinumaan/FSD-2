// Today's problem-solving session covered basic problem-solving on Conditional Statements and Loops.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// q, 1. how do we itrate through an array ?
    let N = arr.length;
    for(let i = 1; i <= N; i++){
        arr[i-1] += 2;
        console.log(arr[i-1]);
    }

//q 2.  how do we itrate through odd element of array ?
    for(let i = 1; i <= N; i++){
        // k => 0,1,2,3 ....k-1
        // 2 => 0, 1
        // n%k =>
        if(arr[i-1]%2 == 1){
            console.log(arr[i-1]);
        }
    }

// Q. 3. itrate last N-i element of array
    // [i,...N]
    // [1, 2, 3, 4, 5, 6, 7, 8]
    // let i = 3;
    // 0, 1, 2
    // [i,,,N]
    for(let j = i+1; j <= N; j++){
        console.log(arr[j-1]);
    }

//Q. 4. itreate first i element of array

    let i = 1;
    // [1, 2, 3, 4, 5, 6, 7, 8]
    for(let j = 1; j <= i; j++){
        console.log(arr[j-1]);
    }
    
// Q5 how can we excess the ith element in an array from the starting?
    // arr[i-1] => constant time

// Q6. how to check weather  an  element present in an array or not
    // 90 => key
    // let key = 50;
    // let arr = [10, 14, 19, 34, 87, 90, 56, 50];
    // let arr = [50, 50, 50, 50, 50];
    let found = false;
    let times = 0;
    for(let i = 1; i <= N; i++){
        if(arr[i-1] == key){
            times++;
            // found = true;
        }
    }
    console.log(times);
    if(times > 0){
        console.log("yes key is there")
    }else{
        console.log("not found");
    }