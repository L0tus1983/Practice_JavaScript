'use strict'

$(() => {
  let str = `{"firstName":"John", "lastName":"Smith", "email":"john@example.com"}`
  let obj = JSON.parse(str)
  console.log(obj.lastName)
  console.log(JSON.stringify(obj))
})
