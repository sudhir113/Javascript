arr =[1,2,3,4,5];
var add =arr.reduce((acc,value) => {
    return acc+value;
})
console.log(add());



function reverse(str) {
    let newstr = str.split('');
    console.log('sss',newstr);
    let count =newstr.length-1;
    console.log('count',count);
    let newstr1 =[];
    for(let i=count;i>=0;i--){
        console.log('ss',newstr[i]);
            newstr1.push(newstr[i]);
    }
    return newstr1.join('');
}

console.log(reverse('sudhir'));