function squirt(n, g) {
    if (!g) {                    ////return true
        console.log(!g);
        // Take an initial guess at the square root
        g = n / 2.0;  
        console.log('g',g) ;             ////12.5
    }
    var d = n / g;  
    console.log('d',d) ;           // Divide our guess into the number ---25/12.5 ///2
    var ng = (d + g) / 2.0; 
    console.log('ng',ng);    // Use average of g and d as our new guess  (2+12.5)/2=> 7.25
    if (g == ng) {          
        // The new guess is the same as the old guess; further guesses
        // can get no more accurate so we return this guess
        return g;
    }
    // Recursively solve for closer and closer approximations of the square root
    return squirt(n, ng);
}

console.log(squirt(25));