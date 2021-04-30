Vue.createApp({
  data() {
    return {
      attrs: {
        size: 12,
        maxlength: 15,
        required: true
      }
    }
  }
}).mount('#app')