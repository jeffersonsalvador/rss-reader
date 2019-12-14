<template>

    <div>

        <div class="row col-12 justify-center">
            <div class="q-mt-xl card-login">
                <h1>{{ title[type] }}</h1>

                <q-input bottom-slots v-model="user.email" outlined bg-color="white" label="E-mail">
                    <template v-slot:prepend>
                        <q-icon name="person"/>
                    </template>
                </q-input>
                <q-input bottom-slots v-model="user.password" outlined bg-color="white" label="Password">
                    <template v-slot:prepend>
                        <q-icon name="person"/>
                    </template>
                </q-input>
                <q-btn v-on:click="login()" color="secondary" class="full-width" unelevated>{{ type === 'login' ?
                    'LOGIN' : 'REGISTER' }}
                </q-btn>

            </div>
        </div>

        <div class="row justify-center q-pa-md">
            <span class="q-mb-md" v-if="type === 'login'">If you don't have an account, <router-link to="/register">register here</router-link>.</span>
            <span v-else>If you already have an account, <router-link to="/login">login here</router-link>.</span>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    type: {
      type: String,
      default: 'login'
    }
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      title: {
        login: 'Log in to your account',
        register: 'Create an account'
      }
    }
  },
  methods: {
    login () {
      if (this.user.email !== '' && this.user.password !== '') {
        /*
                    if (this.user.email === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
                        this.$emit('authenticated', true)
                        this.$router.replace({name: 'secure'})
                    } else {
                        console.log('The username and / or password is incorrect')
                    }
                     */
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>
