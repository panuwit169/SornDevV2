<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <nuxt-link to="/" class="nav-item">
          <img src="../assets/learning.png" alt="SornDev" width="60px">
        </nuxt-link>
        <nuxt-link to="/allcourse" class="nav-item is-tab is-hidden-mobile">Courses</nuxt-link>
        <nuxt-link to="/ebook" class="nav-item is-tab is-hidden-mobile">E-Book</nuxt-link>
      </div>
      <span class="nav-toggle" style="padding: 37px 40px;">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <nuxt-link to="/course" class="nav-item is-tab is-hidden-tablet" style="background-color: #1b1920;">Courses</nuxt-link>
        <nuxt-link to="/ebook" class="nav-item is-tab is-hidden-tablet" style="background-color: #1b1920;">E-Book</nuxt-link>
        <div v-if="ready">
          <div v-if="authorized">
            <div class="nav-item is-tab" style="padding-top:15px;color:#7a7a7a;background-color: #1b1920;">
              <img class="image is-32x32" :src="profile.photoURL" style="display: inline;margin:0 15px;border-radius: 50%;">
              <p style="display: inline;">{{ profile.displayName }}</p>
              <a class="nav-item" style="border:0px solid #fff;" @click="logout()"><div id="facebook-login-btb"><a><span>Logout</span></a></div></a>
            </div>
          </div>
          <div v-else>
            <a class="nav-item is-tab" style="margin-top:0px;background-color: #1b1920;" @click="login()"><div id="facebook-login-btb"><a href="#">Login with <span>facebook</span></a></div></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import firebase from 'firebase'
  import $ from 'jquery'
  import { mapGetters } from 'vuex'

  var provider = new firebase.auth.FacebookAuthProvider()

  export default {
    head: {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ]
    },
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
      $(function () {
        $('.nav-toggle').click(function () {
          $(this).toggleClass('is-active')
          $('.nav-menu').toggleClass('is-active')
        })
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

  #facebook-login-btb {
    font-size: 14px;
    text-align: center;
		top:50%;
		left:50%;
		margin-top:0px;
    background-color: #3b5998;
  }

  #facebook-login-btb span{
  	font-weight:bold;
  }

  #facebook-login-btb a {
  	text-shadow:0 0 2px rgba(0,0,0,0.3);
    background: linear-gradient(top,  rgba(131,155,195,1) 0%,rgba(87,111,163,1) 100%);
    border: 1px solid #566383;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0 1px 0 #CADBFE inset, 0 3px 0 0 #2D447F, 0 4px 2px #999999;
    color: #FFFFFF;
    display: inline-block;
    line-height: 30px;
  	height:30px;
    padding: 0 10px;
    text-decoration: none;
    top: -1px;
    transition-property:top, box-shadow;
    transition-duration: 0.1s, 0.1s;
    transition-timing-function: linear, linear;
  }

  #facebook-login-btb a:hover {
  	background-image:linear-gradient(top,  rgba(139,161,199,1) 0%,rgba(96,119,170,1) 100%)
  }

  #facebook-login-btb a:active{
  box-shadow: 0 1px 0 #cadbfe inset, 0 1px 0 0 #2d447f, 0 2px 2px #999999;
  top:2px;
  }

  .nav-toggle:hover {
    background-color: #1b1920;
  }

</style>
