for(var i = 1; i <= 5; i++) {

    for(var j = 1; j<= i; j++) {

      document.write("*");  

    }

    document.write("<br/>");
}


////for single for loop

var str = "* ";
for (var i = 1; i <= 5; i++) {
console.log(str.repeat(i));
}

/////



// triangle star print




var rows=5;
for(var i=1;i<=rows;i++){
    for(var k=1;k<=(rows-i);k++){
        document.write('&nbsp');
    }
    for(var j=1;j<=i;j++){
        document.write('*');
    }
    document.write('<br/>');
}
