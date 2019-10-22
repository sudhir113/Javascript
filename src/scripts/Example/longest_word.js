// function longest_word(str){
//   var words = str.split(" ");
//   var longest=0;
//   var result='';
//  for(var i=0;i<words.length;i++){
//    if(words[i].length>longest){
//      result=words[i];
//      longest=words[i].length;
//    }
//  }
//  return result;
 
// }

// console.log(longest_word('sudhir sakharam unde'));

function longest(str){
    var longestword =str.split(' ').reduce((curr,longest) => {
        return curr.length>longest.length?curr:longest;
    },"");
    return longestword;
  }
  
  console.log(longest('sudhir sakharddddddddddam ssssssssssddds'));