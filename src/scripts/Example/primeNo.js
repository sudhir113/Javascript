function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
        debugger;
      if(n % x === 0)
      {
        console.log(false);
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(36));