function Parent(name){
    this.name=name;
}
Parent.prototype.getName=function(){
    return this.name;
};

let newConstructor = new Parent('rahul');

console.log('newObject',newConstructor.getName());


// to make prototype chain between them we used
function Child(name,label){
    Parent.
}