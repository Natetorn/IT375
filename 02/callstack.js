function multiply(a,b){
    return a*b;
}
function square(n){
    return multiply(n,n);
}
function pringsquare(n){
    var squared = square(n);
    console.log(squared);
}
pringsquare(4);