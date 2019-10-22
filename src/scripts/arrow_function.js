// arrow_function.js

// The takeaway: Function expressions are best for object methods.
 // Arrow functions are best for callbacks or methods like map, reduce, or forEach.


let data ={

	var name='sudhir'

	myfunction:() => {
		console.log(name)
	}
}

data.myfunction();


////////arrow function
const add =(x,y) => x+y;

console.log(add(3,5));
////////////



// Important Point

// Arrow functions don’t redefine the value of this within their function body.
//  This makes it a lot easier to predict their behavior 
// when passed as callbacks, and prevents bugs caused by use of this within callbacks.