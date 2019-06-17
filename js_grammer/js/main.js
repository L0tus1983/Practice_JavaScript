'use strict'

function greet() {
  let greetingObj
  let greetingWord
  let targetName = document.getElementById('name').value
  let hour = new Date().getHours()

  if (6 <= hour && hour < 12) {
    greetingWord = 'Good morning'
  } else if (12 <= hour && hour < 18) {
    greetingWord = 'Hello'
  } else {
    greetingWord = 'Good evening'
  }

  greetingObj = {
    greetingWord: greetingWord,
    targetName: targetName
  }

  return greetingObj
}

document
  .getElementById('greeting-button')
  .addEventListener('click', function() {
    let greetingObj = greet()

    document.getElementById('box').innerHTML = `${greetingObj.greetingWord}、${
      greetingObj.targetName
    }.`
  })

document
  .getElementById('cheerful-button')
  .addEventListener('click', function() {
    let greetingObj = greet()

    document.getElementById('box').innerHTML = `${
      greetingObj.greetingWord
    }！、${greetingObj.targetName}！！`
  })
