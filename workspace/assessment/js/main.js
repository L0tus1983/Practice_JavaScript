"use strict";

let vm = new Vue({
  el: "#example",
  data: {
    message: "Hello"
  },
  computed: {
    // 算出 getter関数
    reversedMessage: function() {
      // `this`はvmインスタンスを指す
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
