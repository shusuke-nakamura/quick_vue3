Vue.createApp({
  data() {
    return {
      message: 'こんにちは。Vue.js!',
      color: {
        backgroundColor: 'Yellow',
        color: 'Red'
      },
      big: {
        fontSize: '1.5em'
      }
    }
  }
}).mount('#app')