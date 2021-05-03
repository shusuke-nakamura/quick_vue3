let app = Vue.createApp({})

app.component('my-hello', {
  props: ['yourName'],
  template: '<div>こんにちは、<slot>権兵衛</slot>さん!</div>'
})

app.mount('#app')