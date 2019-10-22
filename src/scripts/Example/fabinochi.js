function fabinochi(num){
    if(num<0){
        return -1;
    }
    else if(num==1){
        return 1;
    }
    return num*fabinochi(num-1);
}

console.log(fabinochi(6));



let num =3;
let fab_no = 1;
for(var i =num;num>0;num--){
       fab_no = fab_no*num;
}
console.log('fab_no',fab_no);