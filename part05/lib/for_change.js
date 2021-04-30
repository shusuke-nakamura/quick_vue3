Vue.createApp({
  data() {
    return {
      list: ['melon', 'orange', 'peach']
    }
  },
  methods: {
    onclick() {
      this.list[1] = 'strawberry'
    }
  }
}).mount('#app')