function fact(n) {
    if (n <= 1) {
        return n;
    }
    return n * fact(n - 1);
}

for (var i = 1; i < 10; i++) {
    console.log(i + "! = " + fact(i));
}

let obj = 'Test';
let obj2 = ' has done.';
console.log(concat[(obj, obj2)]);