'use strict'

const app = new Vue({
  el: '#app',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    date: () => new Date().toLocaleString()
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
    getDate: () => new Date().toLocaleString()
  }
})
