
// with the let we reassign value to let 

let pi =27;
   pi =34;

 console.log('ssssss',pi);

 // with const we cannot reassign value to const 

 const pi=27
  pi=27n///it will give u errrrrr

  // There is one small gotcha when using const.
  //  When assigning an object, you will still be able to modify its properties!

  const obj = { hello: 'world' };
console.log(obj.hello = 'galaxy'); //no error!


// But assigning another object, even if it has the same properties, will cause an error:


const obj = { hello: 'world' };
obj = { hello: 'galaxy' }; //error


// If you're in a function then var will create a local variable