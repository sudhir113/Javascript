// nested function 



function name(a,b) {
	 function squre(x){
		return x*x;
	};
	return squre(a) +squre(b);
};

var f =name(3,5);

console.log(f);


/////

var d = function add(x) {
	return function addition(y) {
		return x+y;
	}
}

var c = d(2)(5);/////output will be 7
var d =d(4)(); //undefined


function add() {
    var counter = 0;
   function plus() 
    { 
    	return counter += 1 ;
     
    } ;
    return plus;
     }

var dd =add();
console.log(dd());
console.log(dd());
