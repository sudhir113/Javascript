// syntax of function 

function nameOfFunction() {
    // Code to be executed
}

// no code will execute until we invoke, or call the function

// Invoke the function
nameOfFunction();


 // Parameters are input that get passed intao functions as names and behave as local variables.

 function name (value) {
 	console.log(value)
 }


 // function which can be return the some value

 function add(x, y) {
    return x + y;
}

add(2,4);


/////function with 2 arguments but passing just one

function sum(x,y) {
	return x+y;
}

console.log(sum(5));////outpot will be NaN
console.log(sum('dd'))///ddundefined
console.log(sum(true))////true