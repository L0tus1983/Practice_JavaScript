'use strict'

$(() => {
  $('.animated').waypoint({
    handler: function (direction) {
      if (direction === 'down') {
        $(this.element).addClass('fadeInUp')
        this.destroy()
      }
    },
    offset: '50%'
  })
})
