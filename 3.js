function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(2) );

console.log(sum(40)(2) );