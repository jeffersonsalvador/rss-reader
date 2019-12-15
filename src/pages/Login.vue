<template>

    <div>

        <div class="row col-12 justify-center">
            <div class="q-mt-xl card-login">
                <h1>{{ title[type] }}</h1>

                <q-input :rules="[ validMail ]" bg-color="white" bottom-slots label="E-mail" outlined lazy-rules
                         v-model="user.email"
                >
                    <template v-slot:prepend>
                        <q-icon name="person"/>
                    </template>
                </q-input>
                <q-input type="password" bg-color="white" bottom-slots label="Password" outlined
                         v-model="user.password">
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
  watch: {
    'type' () {
      this.user.email = ''
      this.user.password = ''
    }
  },
  methods: {
    login () {
      let _this = this
      if (this.user.email !== '' && this.user.password !== '') {
        // Make a request for a user with a given ID
        axios.post('/api/login', { email: this.user.email, password: this.user.password })
          .then(function (response) {
            if (response.data) {
              _this.$root.$emit('authenticated', true)
              _this.$router.replace({ name: 'home' })
            } else {
              _this.message = 'Email or Password invalid.'
              _this.showNotif()
            }
          })
      } else {
        _this.message = 'A username and password must be present'
        _this.showNotif()
      }
    },

    register (val) {
      let _this = this
      if (this.user.email !== '' && this.user.password !== '') {
        // Make a request for a user with a given ID
        axios.post('/api/create', { email: this.user.email, password: this.user.password })
          .then(function (response) {
            if (response.data === 1) {
              _this.$root.$emit('authenticated', true)
              _this.$router.replace({ name: 'home' })
            } else {
              _this.message = 'This email already in use.'
              _this.showNotif()
              return !!val
            }
          })
      } else {
        _this.message = 'A username and password must be present'
        _this.showNotif()
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
        let _this = this
        axios.post('/api/validate/email', { email: val }).then((response) => {
          if (response.data) {
            _this.message = 'This email already in use.'
            _this.showNotif()
            return 'This email already in use.'
          }
        })
      }
      return !!val || 'Invalid email'
    }

  }
}
</script>
