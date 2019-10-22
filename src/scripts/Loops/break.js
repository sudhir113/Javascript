// break will breake out the for loop which will not excuted lop if it matches value

function num(value){
    var result ='';
    for(var i=0;i<value.length;i++){
    if(value[i]==3){
      break;
    }
    result=result+value[i];
  }
  return result;
  
  
  }
  
  console.log(num([1,23,3,4,56]));