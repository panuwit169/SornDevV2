<template>
  <div id="app">
    <navbar/>
    <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+ link + '?autoplay=1'"  frameborder="0" allowfullscreen ></iframe>
    <div>
      <div v-for ="(list, index) in course.list" @click = "setlink(list.link)">
        <a class="list">
          <div class="img">
            <strong style="padding:0 10px">{{index+1}}</strong>
            <img class="pull-left" :src="course.img" width="50px">
            <strong style="text-align:left;padding:0 10px">ตอนที่ {{index+1}} {{list.ep}}</strong>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import { mapGetters } from 'vuex'
import navbar from '~components/navbar.vue'

export default {
  components: {
    navbar
  },
  data () {
    return {
      link: ''
    }
  },
  computed: {
    ...mapGetters([
      'listplay'
    ]),
    course: function () {
      let vm = this
      return vm.listplay.find(item => item.name === vm.$route.params.course)
    }
  },
  mounted () {
    this.link = this.course.list[0].link
    // this.setListplayRef(this.$db.ref('listplay'))
  },
  methods: {
    setlink: function (link) {
      this.link = link
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Kanit', sans-serif;
    text-align: center;
  }
</style>
