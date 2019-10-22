function max_1(...num){
    var result=[];
   for(var i=0;i<num.length-1;i++){
       if(num[i] >num[i+1]){
         result.push(num[i]);
       }
   }
   return result;
  }
  var num=[2,3,5,6,9,4,56,67,1];
  console.log(max_1(...num));


//  max no in arrray 

  function MinNo(...nums){
    console.log(...nums);
    const num =[...nums];
      var result = [];
      var largest=0;
      for(var i=0;i<=num[0].length-1;i++){
        console.log('num',num[0][i]);
        if(num[0][i]>largest){
          largest=num[0][i];
        }
      }
      return largest;
    }
    
    console.log(MinNo([2,12,4,9,6,7,8]));



    function largest(arry){
      var largest =0;
      for(var i=0;i<arry.length-1;i++){
          if(arry[i]>largest){
              largest=arry[i];
          }else {
              largest =largest;
          }
  
      }
      return largest;
  }