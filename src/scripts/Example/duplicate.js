let a = [2,3,4,5,6,2,3,4,6];
let y =a.slice().sort();
let duplicate =[];

// a.map(ele => {
//     if(duplicate.indexOf(ele) > -1){
//         duplicate.push(ele);
//     }
// });
// console.log('dupicate',duplicate);

for(var i=0;i<y.length;i++){
    if(y[i] ==y[i+1]){
        duplicate.push(y[i]);
    }
}

console.log('duplicate',duplicate);