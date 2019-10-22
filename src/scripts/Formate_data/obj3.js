let data={
  "buyerPrimary.firstName":["The buyer primary.first name field is required."],
  "buyerPrimary.lastName":["The buyer primary.last name field is required."]
  };

let new_Array=Object.keys(data).map(ele => {
  let obj={}; 
  let spliter = ele.split('.');
   let base= spliter[0];
   let childr= spliter[1];
   if(!obj.hasOwnProperty[base]){
     obj[base] ={}
   }
    // if(!obj[base][childr]){
    //     obj[base][childr]=[];
    // }
    obj[base][childr]=data[ele];
   return obj;
});  
console.log('new_array',new_Array);

// var res = Object.keys(data).reduce(function (obj, key, idx) {

//   // Split the key into the property names
//   var props = key.split('.');

//   // If the accumulator object doesn't have a suitable property already,
//   // create it
//   if (!obj.hasOwnProperty(props[0])) {
//     obj[props[0]] = {};
//   }

//   // Add the property and value
//   obj[props[0]][props[1]] = data[key];

//   // Return the accumulator object to keep collecting properties
//   return obj;

// // Initialise with an empty object as the accumulator
// }, []);

// console.log('res',res);