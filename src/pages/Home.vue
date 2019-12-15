<template>
    <div class="q-pa-md">
        <h1>Most used words</h1>
        <ul>
            <li v-for="(qty, word) in words" :key="word">{{ word }} ({{ qty }})</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Rss',
  data () {
    return {
      words: '',
      message: ''
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      let _this = this
      axios.get('/api/rss')
        .then(function (response) {
          if (response.data) {
            _this.words = response.data
          } else {
            this.message = 'Something is wrong, please try later.'
            this.showNotif()
          }
        })
    }
  }
}
</script>
