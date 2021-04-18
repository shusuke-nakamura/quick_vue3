Vue.createApp({
  data() {
    return {
      name: "ゲスト"
    }
  },
  methods: {
    clear() {
      this.name = ""
    }
  }
}).mount('#app');