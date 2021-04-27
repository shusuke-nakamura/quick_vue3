Vue.createApp({
  data() {
    return {
      message: ""
    }
  },
  methods: {
    onchange() {
      console.log('入力値は「' + this.message + '」です。')
    }
  }
}).mount('#app');