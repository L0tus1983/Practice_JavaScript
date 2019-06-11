"use strict";

let m = new Map();

m.set(2, "foo");
m.set(null, "bar");
console.log(m.get(2), m.get(null));
