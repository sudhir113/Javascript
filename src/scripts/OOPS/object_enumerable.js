function Circle(radius) {
    this.radius =radius,
    this.draw = function(){
        console.log('draw is calledf');
    };
}

const circle2 = new Circle(1);


for(let key in circle2){
    if(typeof circle2[key] !== 'function'){
        console.log('key',key);
    }
};

let keys =Object.keys(circle2);  /// object keys takes keys in the arry formate

console.log('keys',keys);


