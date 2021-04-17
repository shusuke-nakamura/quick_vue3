Vue.createApp({
  data() {
    return {
      email: "Yamada@example.com"
    }
  },
  computed: {
    localEmail() {
      return this.email.split('@')[0].toLowerCase()
    }
  }
}).mount('#app');