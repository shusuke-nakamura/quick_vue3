Vue.createApp({
  methods: {
    onclick(e) {
      window.alert(
        `右クリックした座標：${e.clientX}, ${e.clientY}`
      )
    }
  }
}).mount('#app');