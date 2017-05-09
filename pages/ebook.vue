<template>
  <div id="app">
    <navbar/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import navbar from '~components/navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style>
  #app {
    font-family: 'Kanit', sans-serif;
    text-align: center;
  }
</style>
