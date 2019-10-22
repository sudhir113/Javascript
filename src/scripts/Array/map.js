
var x =[{name:"sudhir",marks:"34"},{name:"rahul",marks:"54"},{name:"dudhir",marks:"84"}];

var z=x.map(y=> {
	if(y.name =='sudhir'){
	return y;
}
});
console.log(z);
console.log(x);