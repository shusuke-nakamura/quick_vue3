Vue.createApp({
  data() {
    return {
      current: new Date().toLocaleString()
    }
  },
  computed: {
    randomc() {
      return Math.random()
    }
  },
  methods: {
    onclick() {
      this.current = new Date().toLocaleString()
    },
    randomm() {
      return Math.random()
    }
  }
}).mount('#app');