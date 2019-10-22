// Abstarction is used to hide the complexity and show details what ever is neccessary


function Circle(radius){
    let defaultLocation = {'x':0,'y':0};
    this.radius =radius,
    this.getLocation = function(){
        return defaultLocation;
    };
    this.draw=function(){
        console.log('draw will be called');
    };
}

const circle2 = new Circle(1);

const location =circle2.getLocation();

console.log(location);
console.log(circle2);