function RPS(p1, p2) {
    p1 = p1.toUpperCase();
    p2 = p2.toUpperCase();
    
    if (typeof p1 === "undefined" || typeof p2 === "undefined") {
        return "ERROR: how you goin to play without inputs bro?"
    }
    
    if (p1 !== 'R' && p1 !== 'P' && p1 !== 'S' ) {
        return "ERROR: you gotta have R, P, or S bro";
    }
    if (p2 !== 'R' && p2 !== 'P' && p2 !== 'S' ) {
        return "ERROR: you gotta have R, P, or S bro";
    }
    
    
    const isDraw = p1 === p2;
    const isRock = p1 === 'R' && p2 === 'S';
    const isPaper = p1 === 'P' && p2 === 'R';
    const isScissors = p1 === 'S' && p2 === 'P';
    
    if (isDraw) {
        return 0;
    }
    else if (isRock || isPaper || isScissors) {
        return 1;
    }
    else {
        return 2;
    }
}
