'use strict'

$(() => {
<<<<<<< HEAD
  $('.animated').waypoint({
    handler: function (direction) {
      if (direction === 'down') {
        $(this.element).addClass('fadeInUp')
        this.destroy()
      }
    },
    offset: '50%'
  })
=======
  let str = `{"firstName":"John", "lastName":"Smith", "email":"john@example.com"}`
  let obj = JSON.parse(str)
  console.log(obj.lastName)
  console.log(JSON.stringify(obj))
>>>>>>> 199a277b9d692e96b00e2417115025acc807aadd
})
