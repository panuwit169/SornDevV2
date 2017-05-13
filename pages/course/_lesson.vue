<template>
<div id="app">
  <navbar/>
  <videoplay :courses="courses"/>
  <headplay :info="courses" />
  <comment :courses="courses"/>
</div>
</template>

<script>
import 'bulma/css/bulma.css'
import { mapGetters } from 'vuex'
import navbar from '~components/navbar.vue'
import videoplay from '~components/videoplay.vue'
import headplay from '~components/headplay.vue'
import comment from '~components/comment.vue'

export default {
  components: {
    navbar,
    videoplay,
    headplay,
    comment
  },
  data () {
    return {
      courses: {},
      link: ''
    }
  },
  computed: {
    ...mapGetters([
      'listplay'
    ]),
    lesson: function () {
      let vm = this
      this.courses = vm.listplay.find(item => item.name === vm.$route.params.lesson)
      return this.courses
    }
  },
  mounted () {
    if (localStorage.getItem('course') !== undefined) {
      localStorage.setItem('course', JSON.stringify(this.lesson))
    } else {
      this.courses = localStorage.getItem('course')
    }
    this.link = this.$route.params.lesson
  }
}
</script>

<style>
  #app {
    font-family: 'Kanit', sans-serif;
    text-align: center;
  }
.title{
    margin-bottom: 20px;
    text-align: left;
    display: inline-block;
  }

  li{
    display: inline-block;
  }

  .description{
    padding: 30px 0;
    text-align: left;
  }
  a.title{
    color : #47b8f0;
    font-size: 20px;
    font-weight: bold;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    text-decoration: none;
  }

  a.title:hover{
    color :#0993d8;
    text-decoration: none;
  }

  a{
    color: #555;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
  }

  a:hover{
    color: #222;
    text-decoration: none;
  }

  .video{
    padding: 50px 0 50px 0;
    background-color: #1b1920;
    color: #666;
  }

  .header{
    border-bottom :1px solid #666;
  }
</style>
