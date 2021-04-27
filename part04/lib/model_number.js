Vue.createApp({
  data() {
    return {
      time: 0
    }
  },
  methods: {
    onchange() {
      console.log(this.time.toFixed(1))
    }
  }
}).mount('#app');