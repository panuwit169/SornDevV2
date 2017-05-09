<template>
  <div id="app">
    <navbar/>
    <courseall/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import navbar from '~components/navbar.vue'
import courseall from '~components/courseall.vue'

export default {
  components: {
    navbar,
    courseall
  }
}
</script>

<style>
  #app {
    font-family: 'Kanit', sans-serif;
    text-align: center;
  }
</style>
