
var baseValue = [
  {
      '2014-12-01': {
          'cars;ox;2014-12-01':100,
          'cars;ot;2014-12-01':150,
          'bikes;ox;2014-12-01':50,
          'bikes;ot;2014-12-01':80
      },
      '2014-12-02': {
          'cars;ox;2014-12-02':100,
          'cars;ot;2014-12-02':150,
          'bikes;ox;2014-12-02':50,
          'bikes;ot;2014-12-02':80
      }
  }
];
let result ={
      cars:{
        
      },
      bikes:{

      }
};
// let category=[];
baseValue.map(ele => {
   for(let key in ele){
    let data= ele[key];
     Object.keys(data).map( cat => {
            let split_array =cat.split(';');
            console.log('split',split_array);
            let category = split_array[0];
            let service =split_array[1] ;
          //   if(!result[category]) {
          //     result[category] = {};
          // }
          if(!result[category][service]) {
              result[category][service] = [];
          }
            result[category][service].push(data[cat]);
     });
   }
  //  return result;    
});
console.log('result',result);