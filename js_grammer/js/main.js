"use strict";

window.onload = function() {
  //
  let req = new XMLHttpRequest();
  //
  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status === 200) {
        document.getElementById("view").innerHTML = req.responseText;
      }
    }
  };
  req.open("GET", "http://codecamp.lesson.codecamp.jp/javascript/ajax.txt");
  req.send(null);
};
