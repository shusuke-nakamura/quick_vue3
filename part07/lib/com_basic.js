let app = Vue.createApp({})

app.component('my-hello', {
  template: '<div>こんにちは、コンポーネント!</div>'
})

app.mount('#app')
