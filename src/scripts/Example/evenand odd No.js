function evn_odd(num){
    if(num%2==0){
        return 'Even Number'
    }else{
        return 'Odd Number'
    }
}

console.log(evn_odd(23));


var num=[24,34,56,78,54,43,23];

    for(var i=0;i<=num.length-1;i++){
    if(num[i]%2==0){
        console.log('even no');
       
    }else{
        console.log('odd no');
    }
}