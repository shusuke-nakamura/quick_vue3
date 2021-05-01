Vue.component('my-hello', {
  template: `<div>
    <div>こんにちは、コンポーネント！</div>
    <div>こんにちは、コンポーネント2!</div>
  </div>`
})

new Vue({
  el: '#app'
})