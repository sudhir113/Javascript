
// function Circle(radius){
//     this.radius = radius,
//     this.draw=function(){
//         console.log('constructor get called');
//     };
// }
// const circle1 = new Circle(1);
// circle1.location ={'x':1};

// To access the dynamic property throgh it is possible 

function Circle(radius){
    this.radius =radius,
    this.draw =function(){
        return this.radius;
    };
    
}
const propertyName ='location';

const circle1 = new Circle(1);
circle1.draw();
circle1[propertyName] = {'value':1};
console.log('circle',circle1);

