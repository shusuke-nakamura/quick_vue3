let MyChild = {
  template: '<div>MyChildです。</div>'
}

let MyHello = {
  template: `<div>こんにちは、コンポーネント！</div>
  <my-child></my-child>`,
  components: {
    'my-child': MyChild
  }
}

let OtherHello = {
  template: '<my-child></my-child>'
}

Vue.createApp({
  components: {
    'my-hello': MyHello,
    'other-hello': OtherHello
  }
}).mount('#app')