// /**
//  * @param {string} s
//  * @return {boolean}
//  */
//  var isValid = function(s) {
    
//     let n = s.length;
    
//     let arr;
    
//     for(let i = 0; i < s.length; i++){
//         arr.push(s[i]);
//     }
    
    
//     if(n%2 == 1 || arr[0] == ')' || arr[0] == '}' || arr[0] == ']'){
//         return false;
//     }
    
    
//     for(let j = 0 ;j < n; j++){
        
//         if(s[j] == ')' || s[j] == '}' || s[j] == ']'){
//             let i = j-1;
//             s[1] = '(';
//         }
//     }
    
    
//     // 
    
    
    
    
// };