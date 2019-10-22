class Parent {
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }
};

class Child extends Parent{
    constructor(name,child){
        super(name);
        this.child =child;
    }

    getChild(){
        return this.child;
    }
};
let newChild = new Child('rahul','thisischild');
console.log('newChild',newChild.getName());
console.log('latestChild',newChild.getChild());
// let newParent =new Parent('sudhir'); 
// console.log('newParent',newParent.getName());