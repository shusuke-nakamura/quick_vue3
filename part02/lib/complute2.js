Vue.createApp({
  data() {
    return {
      email: "Yamada@example.com"
    }
  },
  methods: {
    localEmail() {
      return this.email.split('@')[0].toLowerCase()
    }
  }
}).mount('#app');