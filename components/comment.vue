<template>
  <div class="comment">
    <div class="box container">
      <article class="media" v-for="comment in comments">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="comment.img" style="border-radius: 50%">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ comment.name }}</strong>
              <br>
              {{ comment.message }}
              <br>
            </p>
          </div>
        </div>
      </article>
      <div v-if="authorized" style="padding-top:20px">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="profile.photoURL" style="border-radius: 50%">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" v-model="commentInput" placeholder="Add a comment..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <div v-if="commentInput">
                  <button class="button" @click="addComment()">Post comment</button>
                </div>
                <div v-else>
                  <button class="button" disabled >Post comment</button>
                </div>
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

  var keys = ''
  var database = firebase.database()
  var messageRef
  console.log(keys)

  export default {
    props: ['courses'],
    data () {
      return {
        profile: {},
        ready: false,
        authorized: false,
        comments: {},
        commentInput: '',
        keys: ''
      }
    },
    computed: {
      ...mapGetters([
        'listplay'
      ]),
      courses () {
        let vm = this
        return vm.listplay.find(item => item.name === vm.$route.params.lesson)
      }
    },
    methods: {
      addComment () {
        this.comments.push({
          message: this.commentInput,
          name: this.profile.displayName,
          img: this.profile.photoURL
        })
        messageRef.child(this.comments.length - 1).set({
          message: this.commentInput,
          name: this.profile.displayName,
          img: this.profile.photoURL
        })
        this.commentInput = ''
        console.log(this.comments)
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
      this.comments = this.courses.comment
      keys = this.courses[Object.keys(this.courses)[6]]
      messageRef = database.ref('listplay/' + keys + '/comment')
      console.log(this.comments.length)
    }
  }
</script>

<style>
  .comment{
    margin: 30px;
  }
</style>
