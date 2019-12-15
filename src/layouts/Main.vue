<template>
    <q-layout view="lHh Lpr lFf">
        <q-header>
            <q-toolbar>
                <q-toolbar-title class="row">
                    <img alt="Quasar logo" src="../assets/mintos-inverted.png">
                    <q-space />
                    {{ $parent.authenticated }}
                    <q-btn v-if="$parent.authenticated" icon="power_settings_new" flat dense round class="shadow-0" v-on:click.native="logout()" />
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <q-page>
                <router-view />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$root.$emit('authenticated', false)
    }
  }
}
</script>
<style lang="stylus">
    body
        background #F4F4F4
</style>
