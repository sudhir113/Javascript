// Run Length.js

// the problem of is  For example: the string "aaabbc"
//  results in an encoding of "3a2b1c" You can see that the/
//   count comes first followed by the character.


function run_lenght(str){
    var count =1;
    var result='';
    for(var i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
         result += count + str[i];
         count=1;
        }
    }
    return result;
 }
 
 console.log(run_lenght('aaacccb'));
 
 
 
 
 
 
 
 