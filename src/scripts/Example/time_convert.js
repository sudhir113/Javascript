function TimeConvert(num) { 

    // to get the hours, we divide num by 60 and round it down
    // e.g. 61 / 60 = 1 hour
    // e.g. 43 / 60 = 0 hours
    var hours = Math.floor(num / 60);
    // to get the minutes, now we use the remainder that we discarded above
    // the modulo operation is represented by the % symbol
    // e.g. 61 % 60 = 1 minute
    // e.g. 43 % 60 = 43 minutes
    var minutes = num % 60;
    
  
    // combine the hours and minutes
    return hours + ':' + minutes;
           
  }
     
  console.log(TimeConvert(14)); 