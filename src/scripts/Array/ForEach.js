let a =[1,2,3,4,5,6];
a.forEach(callback);
console.log('a',a);

function callback(ele){
    if(ele ==2){
        return ele;
    }else {
        return -1;
    }
}