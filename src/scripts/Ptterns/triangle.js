 function pattern(num){
        for(var i=0;i<=num;i++){
         
            for(var j=0;j>0;j++){
                console.log('jj');
                document.write('&nbsp');
            }
            for(var k=1;k<=(num-i);k++){
                document.write('*');                           
       }
        document.write('<br/>');
            
        }
    };
    pattern(5);