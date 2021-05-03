let app = Vue.createApp({})

app.component('my-counter', {
  props: ['init'],
  template: `<div>現在値は{{ current }}です!<input type="button" v-on:click="onclick" value="増加" /></div>`,
  data() {
    return {
      current: this.init
    }
  },
  methods: {
    onclick() {
      this.current++
    }
  }
})

app.mount('#app')