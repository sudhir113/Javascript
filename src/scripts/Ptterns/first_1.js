
function pattern(num){
    let rows =0;
    for(var i=1;i<num;num--){
        for(var j=1;j<num;j++){
            for(var k=1;k<j;k++){
                 document.write('*');
                
            }
        }
    document.write('<br/>');
        
    }
};
pattern(5);



