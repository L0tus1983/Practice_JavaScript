'use strict'

// $(document).ready()イベントはwindow.onload()
// (画像など全ての読込を終える)より前の、DOM読込完了すれば
// 実行されるようになる。
// $(document).ready() => $(function()) と簡単に書ける

$(() => {
  //
  $('.accordion-title a').click(function() {
    let content = $(this)
      .closest('section')
      .find('.accordion-content')

    //
    if (!content.is(':visible')) {
      //
      $('.accordion-content:visible').slideUp()

      //
      content.slideDown()
    }

    //
    return false
  })
})
