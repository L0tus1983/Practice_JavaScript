
var app = new Vue({
    el: '#app',
    data: {
        msg1: 'はじめてのVue.js!',
        msg2: 'Vue.jsの世界へ'
    }
});

var person = {
    name: "山田太郎",
    age: 25,
    scores: { math: [40,50], eng: [70, 60]},
    sayHello: function() {
        console.log('Hello!!');
    }
};

