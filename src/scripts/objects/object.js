// Objects are collections of methods and properties. 
// A method is a function in an object. A property is one or
// more values or objects in an object. JavaScript supports its own internal objects, objects that you create, and
// host objects.
// To create your own objects, you first create an object literal, and then populate it with properties and
// methods using the well-known dot notation.


var x ={
    name:'sudhir',
    marks:'30'
}

console.log(x);

  



//A variable will hold a reference to an instance of an object.

// The actual object is an instance.

// The variable/variables used to access the object hold the references to it.


// when u ctarte var=myboject -------------crate myobject in memory

var myobj ={} ===which reff


// variable pointing to the object where it is located;



// if property name is number u ca not use . notation use square bracket notation; 





var name ="sudhir";  //////which is pass by valus

var ss=name;     ///it is not passs by reference  
 var ss="ddd";  ///sss-dddd
console.log(name);  ///it will printed sudhir



//////acccseesing the objects methods


var book ={
   author:'sudhir',
   showbook:function(){
       return this.author;
   }
};
 var x =book;
console.log(x.showbook());


//////////////////Importance notes

// primitive types store the value directly into the variable
//where as the object is pointing to that object where it is exxists;