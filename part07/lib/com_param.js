let app = Vue.createApp({})

app.component('my-hello', {
  props: {
    yourName: {
      type: String,
      required: true
    }
  },
  template: `<div>こんにちは、{{ yourName }}さん</div>`
})

app.mount('#app');