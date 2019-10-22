var  value =[1,2,3,4,5,6,7,8,9];

let output = value.reduce((acc,value) => {
    return acc+value;
});

console.log('output',output);


////add starting value
var  value =[1,2,3,4,5,6,7,8,9];

let output = value.reduce((acc,value) =>  acc+value,10);

console.log('output',output);