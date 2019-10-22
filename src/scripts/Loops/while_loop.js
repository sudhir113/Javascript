function counter(){
    var counter=0;
    var msg ='';
    while(counter<=10){
       msg=msg+"my bank ballance is"
        counter++;
    }

}

console.log(counter());



// reaping how many times

function counter(counter,times){
    var msg ='';
    while(times>=0){
       msg=msg+ counter+times;
       times--;
    }
    return msg;
  
  }
  
  console.log(counter('sssss',3));