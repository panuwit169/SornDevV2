<template>
<div id="app">
  <navbar/>
  {{ courses }}
</div>
</template>

<script>
// import VueLocalStorage from 'vue-localstorage'
import 'bulma/css/bulma.css'
import { mapGetters } from 'vuex'
import navbar from '~components/navbar.vue'

export default {
  components: {
    navbar
  },
  // localStorage: {
  //   course: {
  //     type: Object,
  //     default: {
  //       hello: 'world'
  //     }
  //   },
  //   value: {
  //     type: Object
  //   }
  // },
  data () {
    return {
      courses: {},
      test: {}
    }
  },
  computed: {
    ...mapGetters([
      'listplay'
    ])
    // lesson: function () {
    //   let vm = this
    //   this.courses = vm.listplay.find(item => item.name === vm.$route.params.lesson)
    //   // localStorage.setItem('course', JSON.stringify(this.courses))
    //   console.log('computed')
    //   return this.courses
    // }
  },
  created () {
    let vm = this
    this.courses = vm.listplay.find(item => item.name === vm.$route.params.lesson)
    localStorage.setItem('course', JSON.stringify(this.courses))
    console.log('Created')
  },
  mounted () {
    // localStorage.setItem('course', JSON.stringify(this.lesson))
    this.lesson = localStorage.getItem('course')
    console.log(this.lesson)
  }
}
</script>

<style>
#app {
  font-family: 'Kanit', sans-serif;
  text-align: center;
}
</style>
