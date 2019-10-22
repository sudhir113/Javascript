/// parent classs
function Parent(name,age){
    debugger;
    this.name=name;
    this.age=age;
    this.getdata=function(){
        return this.age;
    };
};

Parent.prototype.getAllvalues=function(){
    return this.age + this.name;
};

/// child class
function Child(marks,age){
    this.marks=marks;
    this.age=age;
}
// save parent prototype in child

Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor= Child;
let newClass = new Parent('sudhir',45);
let childObject= new Child(34,34);
console.log('newClass',childObject.hasOwnProperty('markds'));