function vovel_find(str){
    var vovel ='aeiou';
    var vcount = 0;
    for(var i=0;i<str.length;i++){
        if(vovel.indexOf(str[i]) !==-1){
            vcount +=1;
        }
       
    }
    return vcount;
  }
  
  console.log(vovel_find("sudhir"));


function vovel(str) {
    let newaray = str.split('');
    let vovel = 'aeiou';
    let vovel_array=[];
 for(var i=0;i<newaray.length;i++){
    if(vovel.indexOf(newaray[i]) > -1 ){
        vovel_array.push(newaray[i]);
    }
 }
 return vovel_array.join('');
}

console.log(vovel('sudhir'));