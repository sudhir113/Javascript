var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

const data = [{"date":"1/11","collections":[{"device":{"name":"camera 1"},"count":10},{"device":{"name":"camera 2"},"count":20},{"device":{"name":"camera 3"},"count":30}]}];


function dataTransfom(data){
  data.map(({collections,...obj}) => ({
    ...obj,
    data:collections.map(({device,...obj2})=>({
      ...obj2,
      camera:device.name
    }))
  })
  // return data.map(ele =>{
  //   let newObj ={};
  //   newObj['date'] = ele.date;
  //   newObj['data'] = ele.collections.map(ele2 =>{
  //     let newObj2 ={};
  //     newObj2['camera']=ele2.device.name;
  //     newObj2['count']=ele2.count;
  //     return newObj2;
  //   });
  //   return newObj;
  // });
};
console.log('dataTransfom',dataTransfom(data));