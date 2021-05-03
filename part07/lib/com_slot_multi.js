let app = Vue.createApp({})

app.component('my-hello', {
  props: ['yourName'],
  template: `<div>
  <header>
    <slot name="header"></slot>
  </header>
  <div>
    <slot></slot>
  </div>
  <footer>
    <slot name="footer"></slot>
  </footer>`
})

app.mount('#app')