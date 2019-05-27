'use strict'

window.onload = function() {
  let element = document.getElementById('sec3')
  let rect = element.getBoundingClientRect()
  scrollTo(rect.left + getScrollLeft(), rect.top + getScrollTop())
}
