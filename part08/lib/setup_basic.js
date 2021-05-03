let app = Vue.createApp({})

app.component('my-counter', {
  props: ['init'],
  template: `<div>現在値は{{ state.current }}です。
  <input type="button" v-on:click="onclick" value="増加" /></div>`,
  // Component API による定義
  setup(props) {
    // データオブジェクトの定義 (dataに相当)
    const state = Vue.reactive({
      current: props.init
    })

    // イベントハンドラーの定義 (methodsに相当)
    const onclick = function () {
      state.current++
    }

    // 定義内容をオブジェクト形式で返す
    return {
      state, onclick
    }
  }
})

app.mount('#app')