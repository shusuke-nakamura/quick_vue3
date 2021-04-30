let app = new Vue({
  el: '#app',
  data: {
    list: ['melon', 'orange', 'peach']
  },
  methods: {
    onclick() {
      // this.list[1] = 'strawberry'
      Vue.set(this.list, 1, 'strawberry')
      // this.list.splice(1, 1, 'strawberry')
    }
  }
})