function MinNo(...nums){
    console.log(...nums);
    const num =[...nums];
      var result = [];
      var smallest=num[0][0];
      for(var i=0;i<=num[0].length-1;i++){
        console.log('num',num[0][i]);
        if(num[0][i]<smallest){
          smallest=num[0][i];
        }
      }
      return smallest;
    }
    
    console.log(MinNo([2,12,1,0,6,7,8]));