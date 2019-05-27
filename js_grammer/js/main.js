"use strict";
window.onload = function () {
  let userCheck = prompt('Who\'s there?')
  let adminPass;
  if (userCheck === 'Admin') {
    adminPass = prompt('Password?', '')
    if (adminPass === 'The') {

    }
  } else if (userCheck === null) {
    alert('Canceled')
  } else {
    alert('I don\'t know you')
  }
}
