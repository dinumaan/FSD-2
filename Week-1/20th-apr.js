// 3. how to update an element in array ?

let arr = [20, 34, 56, 76, 89, 69, 43, 76]
// either you have value of element => i want to update value 15 and change to 20
// or you have index of element 

let valueOfithElement = arr[i-1];

arr[i-1] = 20; // constant time 

// change 76 by 98

let index = -1;

for(let i = 0; i <= arr.length-1; i++){

    if(arr[i] == 76){
        index = i;
    }
}

// index = arr.indexOf(76); // linear time 


arr[index] = 98;

// 4. how to search an element in array ?

// let arr = [20, 34, 56, 76, 89, 69, 43, 76]

// 56 ? if element is present tell index of element as well

// let found = false;

// let index = -1;

let  index1 = arr.indexOf(56);

for(let i = 0; i <= arr.length-1; i++){

    if(arr[i] == 56){
        index = i;
        // found = true;       
    }
} 


if(index1 != -1){
    console.log("element is there");
    console.log("element is present at index is", i);
}else{
    console.log("element isn't there");
}

// 5. how to print odd index element in an array ?

// let arr = [20, 34, 56, 76, 89, 69, 43, 76]  

for(let i = 0; i <= arr.length-1; i++){

    if(i%2 == 1){
        console.log(arr[i]);
    }
}

for(let i = 1; i <= arr.length-1; i+=2){
    console.log(arr[i]);
}

// 6. how to print odd element in an array ?

for(let i = 0; i <=  arr.length-1; i++){

    if(arr[i]%2 == 1){
        console.log(arr[i]);
    }
}

// 7. print an odd element whose index is also odd ?

for(let i = 0; i <= arr.length-1; i++){

    if(arr[i]%2 == 1 && i%2 == 1){
        console.log(arr[i]);
    }
}

for(let i = 1; i <= arr.length-1; i+=2){
    if(arr[i]%2 == 1){
        console.log(arr[i]);
    }
}



































