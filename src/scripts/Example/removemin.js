///remove min no in array 

function remove_min(arry){
    var removw=Math.min(...arry);
    console.log(removw);
  
    arry.splice(arry.indexOf(removw),1);
    return arry;
  }
  
  console.log(remove_min([2,1,3,5,6]));