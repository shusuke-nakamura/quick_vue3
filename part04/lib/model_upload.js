Vue.createApp({
  data() {
    return {
      result: ''
    }
  },
  methods: {
    onclick() {
      let that = this
      let upfile = this.$refs.upfile.files[0]
      let form = new FormData()

      form.append('upfile', upfile, upfile.name)

      fetch('upload.php', {
        method: 'POST',
        body: form
      }).then(function (response) {
        return response.text()
      }).then(function (text) {
        that.result = text
      })
    }
  }
}).mount('#app');