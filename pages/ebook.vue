<template>
  <div id="app">
    <navbar/>
    <listbook/>
    <footers/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import navbar from '~components/navbar.vue'
import listbook from '~components/listbook.vue'
import footers from '~components/footers.vue'

export default {
  components: {
    navbar,
    listbook,
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
