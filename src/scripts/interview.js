
  (function(){
    return typeof arguments;
  })();
////////   => "object"


var myVariable = 10;

function myFunction() {
    myVariable = 25;
    var myVariable;
}
myFunction();

console.log(myFunction());



