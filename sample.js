function squareRoot( n)
{

    /*We are using n itself as initial approximation
   This can definitely be improved */
    let x = n;
    let y = 1;
    let e = 0.000001; /* e decides the accuracy level*/
    while (x - y > e) {
        x = (x + y) / 2;
        y = n / x;
    }
    return Math.floor(x)
}

console.log(squareRoot(144));
