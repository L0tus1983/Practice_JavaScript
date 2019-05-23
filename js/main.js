var a = { 0: "A", 1: "B", 2: "C", length: 3 };
Array.prototype.join.call(a, ",");
console.log(Array.prototype.push.call(a, "D"));
console.log(a);
Array.prototype.slice.call(a, 0);
