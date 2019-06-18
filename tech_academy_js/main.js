'use strict'

function getNum1() {
  return +document.getElementById('num1').value
}

function getNum2() {
  return +document.getElementById('num2').value
}

function showResult(num) {
  let answer = document.getElementById('box')
  if (Number.isFinite(num)) {
    answer.innerHTML = num
  } else {
    answer.innerHTML = 'Can not calculate'
  }
}

document.getElementById('add-button').onclick = () => {
  let result = getNum1() + getNum2()
  showResult(result)
}

document.getElementById('sub-button').onclick = () => {
  let result = getNum1() - getNum2()
  showResult(result)
}

document.getElementById('mul-button').onclick = () => {
  let result = getNum1() * getNum2()
  showResult(result)
}

document.getElementById('div-button').onclick = () => {
  let result = getNum1() / getNum2()
  showResult(result)
}
