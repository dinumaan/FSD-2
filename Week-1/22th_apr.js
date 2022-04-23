// Deepka's Doubt

// ways to create an object

// let obj1 = {

//     name : "Deepak",
//     age: "23",
//     excess : "admin",
//     fun : undefined
// };


// let obj3 = Object.create(obj1);

// obj3.lngfniruebg = "gnrejkgbr";
// obj3.oifonre = "jevb";


// how to check wheather an key present in a object ?

// fun ?
//     for(let keys in obj3){
        
//         if(obj3.hasOwnProperty(keys) == true){
//             console.log(keys , obj3[keys]);
//         }
//     }

// let arr = [1, 6, 9, 10, 12, 14, 17]
// [6, 12, 14] ? => yes // subseqcens 

// [1, 6, 9, 10] ? => yes

// what's 

// var Y = 1;

// let y ;

// function F() { };
// y = typeof F;

// if(function F() { }) {
//     y = typeof F;
// }

// console.log(y)

// why (type of) returns undefined

// for(let key in )

// let obj2 = new Object(obj1);

// Tinu's doubt

const permutator = (inputArr) => {
    
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
}

console.log(permutator(['c','a','t']));

function permutator(str,index){
    if(index==str.length-1){
        let br=[];
        br.push([(index)])
        return br;
    }
    let res= permutator(str,index+1);
    let mr =[];
    for (let i=0;i<res.length;i++){
        let val = res[i];
        for (let j=0;j<=val[0].length ;j++ ){
            let curr = val.slice();
          let next = val.splice(j, 1);
        console.log(curr.slice(), m.concat(next))
        }
    }
}

// permutator(['c','a','t'],0)


const problem = (input) => { 


}

(input-1);
