<template>
    <div id="q-app">
        <!--
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        -->
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
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  },
  beforeMount () {
    this.$root.$on('authenticated', (val) => {
      console.log('oi, quem fala?')
      this.authenticated = val
    })
  }
}
</script>
