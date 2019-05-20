var init = {
  name: "Test",
  buttons: 1
};
var app = new Vue({
  el: "#test",
  data: {
    msg: "message is here!!"
  }
});

var button;
var color;

function changeColor() {
  color.style.backgroundColor = "#ff0000";
}

// window.onload関数は、HTML文書読込み終了時に実行される
// onload関数もまたオブジェクトのonloadイベントに対するイベントハンドラ
window.onload = function() {
  setInterval(() => {
    console.log(new Date());
  }, 200);
  clearTimeout(timer);
  button = document.getElementById("button");
  color = document.getElementById("color");
  // この場合の.clickはイベントハンドラ・プロパティと呼ばれる
  button.onclick = function() {
    var d = new Date();
    console.log("現在、" + d.toLocaleString() + "です。");
  };
  color.onclick = changeColor;
};

// 関数リテラル　＝　無名関数
