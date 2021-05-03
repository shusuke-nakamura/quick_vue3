let app = Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onincrement(e) {
      this.count += e
    }
  }
})

app.component('my-counter', {
  props: ['step'],
  emits: {
    increment(step) {
      if (step && Number.isInteger(step)) {
        return true
      } else {
        console.log('Invalid increment event!!')
        return false; 
      }
    }
  },
  template: '<input type="button" v-on:click="onclick" v-bind:value="step">',
  methods: {
    onclick() {
      this.$emit('increment', Number(this.step))
    }
  }
})

app.mount('#app')