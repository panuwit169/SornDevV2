<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <nuxt-link to="/" class="nav-item">
          <img src="../assets/learning.png" alt="SornDev">
        </nuxt-link>
        <nuxt-link to="/allcourse" class="nav-item is-tab is-hidden-mobile">Courses</nuxt-link>
        <nuxt-link to="/ebook" class="nav-item is-tab is-hidden-mobile">E-Book</nuxt-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <nuxt-link to="/course" class="nav-item is-tab is-hidden-tablet is-active">Courses</nuxt-link>
        <nuxt-link to="/ebook" class="nav-item is-tab is-hidden-tablet">E-Book</nuxt-link>
        <div v-if="ready">
          <div v-if="authorized">
            <a class="nav-item is-tab" @click="logout()">
              <img class="image is-32x32" :src="profile.photoURL" alt="" style="display: inline;margin:0 15px;border-radius: 50%;">
              <p style="display: inline;">{{ profile.displayName }}</p>
            </a>
          </div>
          <div v-else>
            <a class="nav-item is-tab" @click="login()">Login with Facebook</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import firebase from 'firebase'
  import { mapGetters } from 'vuex'

  var provider = new firebase.auth.FacebookAuthProvider()

  export default {
    name: 'app',
    data () {
      return {
        profile: {},
        ready: false,
        authorized: false
      }
    },
    computed: {
      ...mapGetters([
        'listplay'
      ])
    },
    methods: {
      login () {
        firebase.auth().signInWithRedirect(provider)
        this.$router.push('/')
      },
      logout () {
        let vm = this
        firebase.auth().signOut().then(function () {
          vm.authorized = false
        }, function (error) {
          console.error(error)
        })
        this.$router.push('/')
      }
    },
    mounted () {
      let vm = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          vm.authorized = true
          vm.profile = user
        }
        vm.ready = true
      })
      firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {}
      }).catch((error) => {
        console.error(error)
      })
    }
  }
</script>

<style>

  .nav {
    background-color: #1b1920;
    height: 75px;
  }

  .nav-item img {
      max-height: 55px;
  }

  .nav-item a.is-tab, a.nav-item.is-tab {
    padding: 20px 30px;
    border: 0px solid #000;
  }

  image.is-circle img {
    border-radius: 50%;
  }

</style>
