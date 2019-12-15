<template>
    <div id="q-app">
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: false
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
    if (this.authenticated) {
      this.$router.replace({ name: 'home' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    }
  },
  beforeMount () {
    this.$root.$on('authenticated', (val) => {
      this.authenticated = val
      this.$router.replace('/login')
    })
  }
}
</script>
