function pattern(num){

    for(let i=num;i>=0;i--){

        for(let j=5;j>=i;j--){
            document.write('&nbsp;');
    }
    for(let k=0;k<=i;k++){
        document.write('*');
    }
    document.write('<br/>');
    }
}

pattern(5);


// ******
// *****
//  ****
//   ***
//    **
//     *