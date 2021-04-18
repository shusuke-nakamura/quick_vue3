Vue.createApp({
  data() {
    return {
      message: ""
    }
  },
  methods: {
    help() {
      window.alert('20文字以内で入力してください。')
    }
  }
}).mount('#app');