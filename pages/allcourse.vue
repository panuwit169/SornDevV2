<template>
  <div id="app">
    <navbar />
    <courseall/>
    <footers/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import navbar from '~components/navbar.vue'
import courseall from '~components/courseall.vue'
import footers from '~components/footers.vue'

export default {
  components: {
    navbar,
    courseall,
    footers
  }
}
</script>

<style>
  #app {
    font-family: 'Kanit', sans-serif;
    text-align: center;
  }
</style>
