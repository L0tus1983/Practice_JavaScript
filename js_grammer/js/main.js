"use strict";

function func() {
  console.log("aaa");
}
function func2() {
  console.log("bbb");
}

let p = document.getElementById("abcd");

p.addEventListener("click", func, false);
p.addEventListener("click", func2, false);
