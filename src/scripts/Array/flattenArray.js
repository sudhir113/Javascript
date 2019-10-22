function newFlatrenArray(array1){
    let resultArray=[];
    return function flattenArray(array1){
        array1.forEach(ele =>{
            if(!(Array.isArray(ele)) && ele !== null){
                resultArray.push(ele);
            }
            else if(Array.isArray(ele)){
                flattenArray(ele);
            }
        });
        return resultArray;
    };
}


/////


var result = [], // (don't like "var new", which is a reserved word!)
index = [];

for (var i in original) {
var date = original[i].datetime,
  day = date.substr(0,10),
  j = index.indexOf(day);
if (j == -1) {
// first instance for the current day, create it
result.push({
  date: day,
  event: [],
});
// register its index
index.push(day);
// get this new index value
j = index.length - 1;
}
// in any case, populate the right day with the current event
result[j].event.push(date);
}

console.log('result',result);