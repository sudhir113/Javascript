
// to convert array into object

// let array =['sudhir','rahul','mohan'];

// let neObj =array.reduce((acc,curr,index) =>{
//         acc[index] = curr;
//         return acc;
//         },{});

//         console.log('neObj',neObj);

/// object into array 
// to double the entries

let obj ={
    a:1,
    b:2,
    c:4
};
let entries = Object.entries(obj);
const newObject = entries.reduce((accumulator, [key, value]) => {
    accumulator[key] = value * 2;
    return accumulator;
  }, {});

console.log(newObject);