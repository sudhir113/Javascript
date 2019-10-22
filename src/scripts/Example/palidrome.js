function palidrome(str){
    var spliword = str.split('');
    var name=spliword.reverse();
    var joinword = name.join('');
    console.log(joinword);
    console.log(str);
    if(joinword == str){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palidrome('hjh'));