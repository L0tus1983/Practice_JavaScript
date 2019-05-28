"use strict";

window.onload = function() {
  document.addEventListener(
    "keydown",
    function(event) {
      let prop = [
        "altKey",
        "ctrlKey",
        "shiftKey",
        "metaKey",
        "key",
        "code",
        "keyCode"
      ];
      let description = "";
      let display = document.getElementById("display");
      for (let item of prop) {
        description += "<br>" + prop[item] + " : " + event[prop[item]];
      }
      description += " -> " + String.fromCharCode(event.keyCode);
      display.innerHTML = description;
    },
    false
  );
};
