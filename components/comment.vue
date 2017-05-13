<template>
  <div class="comment">
    <div class="box container">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br>
            </p>
          </div>
        </div>
      </article>
      <div v-if="ready">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="profile.photoURL">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" placeholder="Add a comment..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button">Post comment</button>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    data () {
      return {
        profile: {}
      }
    },
    computed: {
      ...mapGetters([
        'listplay'
      ])
    },
    methods: {
      // login () {
      //   firebase.auth().signInWithRedirect(provider)
      //   this.$router.push('/')
      // },
      // logout () {
      //   let vm = this
      //   firebase.auth().signOut().then(function () {
      //     vm.authorized = false
      //   }, function (error) {
      //     console.error(error)
      //   })
      //   this.$router.push('/')
      // }
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
  .comment{
    margin: 30px;
  }
</style>
