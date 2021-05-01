let app = Vue.createApp({})

app.component('my-hello', {
  template: `<div>こんにちは、コンポーネント</div>
  <div>こんにちは、コンポーネント2!</div>`
})

app.mount('#app')
