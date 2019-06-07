"use strict";

window.onload = function() {
<<<<<<< HEAD
  let header = document.getElementById("header");
  let deg = 0;
  let rotateHeader = () => {
    console.log("ここに来てない？");
    deg += 6;
    deg %= 360;
    if ((0 <= deg && deg < 90) || (270 <= deg && deg < 360)) {
      header.className = "face";
    } else {
      header.className = "back";
    }
    header.style.transform = `rotateX(${deg}deg)`;
    //
  };

  setInterval(rotateHeader, 20);
=======
  let select = document.getElementById("aaa");
  select.remove(0);
>>>>>>> 7bde996e5efeb8ee6242ebb9a80dce78605ed07f
};
