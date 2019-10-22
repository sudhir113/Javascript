let requestObj = {
  id: "",
  name: "",
  age: "",
  obj: {
    id: ""
  },
  marks:''
};

let processedObj = {
  id: 10,
  name: "John Doe",
  marks:45,
  age: 20,
  family: true,
  obj: {
    id: 100,
    text: "Obj Desc"
  }
};

// function format(requestObj, processedObj) {
//   for (var keys in processedObj) {

//     if (requestObj.hasOwnProperty(keys)) {
//       if (typeof processedObj[keys] == 'object') {
//         requestObj[keys] = format(requestObj[keys], processedObj[keys]);
//       } else {
//         requestObj[keys] = processedObj[keys];
//       }


//     }
//   }
//   return requestObj;
// }
// console.log(format(requestObj,processedObj));
function formate_data(processedObj,requestObj){
  for(let key in processedObj){
    console.log('keys',key);
    if(requestObj.hasOwnProperty(key)){
      if (typeof processedObj[key] == 'object') {
        console.log('objcts called');
         requestObj[key] = formate_data(processedObj[key], requestObj[key]);
      }else {
        console.log('requestObj[key]',requestObj[key]);
        console.log('processedObj[key]',processedObj[key]);
        requestObj[key] = processedObj[key];
      }
    }
  }
  return requestObj;
}
console.log(formate_data(processedObj,requestObj));