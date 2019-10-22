// const circle ={
//     radius:1,
//     lacation:{
//         x:1,
//         y:1
//     },
//     draw:function(){
//         console.log('draw');
//     }
// };

// circle.draw();


// factory function

// function createcircle(radius){
//     return {
//         radius,
//         draw:function(){
//             console.log('draw is called');
//         }
//     };
// }

// const circle = createcircle(1);
// circle.draw();


// Through constructor method

function Circle(radius){
    this.radius = radius,
    this.draw=function(){
        console.log('constructor get called');
    };

}

const another = new Circle(1);   /// new keyword create new empty object and this refer to that object and return the object;

another.draw();