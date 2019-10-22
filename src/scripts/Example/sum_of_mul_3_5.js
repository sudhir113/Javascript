function mul35(num){
    var result =null;
    while(num>=0){
          if(num%3 ==0||num%5 ==0){
          result =result+num;
      }
      num--;
     
     }
     return result ;
    
  }
  
  console.log(mul35(15));