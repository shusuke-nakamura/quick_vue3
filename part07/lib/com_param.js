let app = Vue.createApp({})

app.component('my-hello', {
  props: ['yourName'],
  template: `<div>こんにちは、{{ yourName }}さん</div>`
})

app.mount('#app');