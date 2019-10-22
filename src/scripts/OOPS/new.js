// function names(name){
//     this.name = name;
//     let count =0;
//     this.getName = function(age){
//         count++;
//         return this.name + count + age;
//     };
// };

// const name1 = new names('sudhir');
// console.log('name1',name1);

// let sudhirName =name1.getName(34);


// console.log('sudhie',sudhirName);


// without constructor method

function names(name){
    let count =0;
    return {
        getname:function(){
            count++;
            return name+ count;
    }
    getId :function(){
        
    }
};
    
}

const newName =names('sudhir');

console.log(newName);
console.log(newName.getname());

