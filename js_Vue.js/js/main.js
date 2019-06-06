"use strict";

let app = new Vue({
  el: "#app",

  data() {
    return {
      classObj: {
        child: true,
        isActive: false
      },
      styleObj: {
        color: "blue",
        backgroundColor: "gray"
      }
    };
  }
});
