<template>

    <div>

        <div class="row col-12 justify-center">
            <div class="q-mt-xl card-login">
                <h1>{{ title[type] }}</h1>

                <q-input :rules="[ validMail ]" bg-color="white" bottom-slots label="E-mail" outlined
                         v-model="user.email"
                >
                    <template v-slot:prepend>
                        <q-icon name="person"/>
                    </template>
                </q-input>
                <q-input type="password" bg-color="white" bottom-slots label="Password" outlined v-model="user.password">
                    <template v-slot:prepend>
                        <q-icon name="person"/>
                    </template>
                </q-input>
                <q-btn class="full-width" color="secondary" unelevated
                       v-on:click="type === 'login' ? login() : register()">{{ type === 'login' ? 'LOGIN' : 'REGISTER'
                    }}
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
import axios from 'axios'

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
      },
      message: ''
    }
  },
  methods: {
    login () {
      if (this.user.email !== '' && this.user.password !== '') {
        // Make a request for a user with a given ID
        axios.post('/api/login', { email: this.user.email, password: this.user.password })
          .then(function (response) {
            if (response.data) {
              // this.$root.$emit('authenticated', true)
              this.$router.replace({ name: 'home' })
            } else {
              this.message = 'Email or Password invalid.'
              this.showNotif()
            }
          })
      } else {
        this.message = 'A username and password must be present'
        this.showNotif()
      }
    },

    register () {
      if (this.user.email !== '' && this.user.password !== '') {
        // Make a request for a user with a given ID
        axios.post('/api/create', { email: this.user.email, password: this.user.password })
          .then(function (response) {
            if (response.data) {
              this.$root.$emit('authenticated', true)
              this.$router.replace({ name: 'home' })
            }
            return response
          })
      } else {
        this.message = 'A username and password must be present'
        this.showNotif()
      }
    },

    showNotif () {
      this.$q.notify({
        message: this.message || 'Cadê a mensagem?',
        color: 'red',
        position: 'bottom-right'
      })
    },

    validMail (val) {
      if (this.type === 'register') {
        return axios.post('/api/validate/email', { email: val }).then((response) => {
          return response
        })
      }
      return !!val || 'E-mail inválido'
    }

  }
}
</script>
