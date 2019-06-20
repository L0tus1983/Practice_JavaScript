'use strict'

// セレクタに該当するタブを表示
function showTab(selector) {
  // selectorの中身

  $('.tabs-menu div').removeClass('active')
  $('.tabs-menu ' + selector).addClass('active')

  $('.tabs-content > div').hide()
  // tabs-content割当て
  let id = selector.substr(10)
  $(selector).show()
  $(`#tabs-${id}`).show()
}

$(() => {
  // 初期状態として１番目のタブを表示
  showTab('#tab-menu-a')

  $('.tabs-menu div').click(function() {
    let selector = '#' + $(this).attr('id')
    showTab(selector)
    return false
  })
})
