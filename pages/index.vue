<template>
  <div id="app">
    <navbar/>
    <banner/>
    <coursemenu/>
    <banner2/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import navbar from '~components/navbar.vue'
import banner from '~components/banner.vue'
import coursemenu from '~components/coursemenu.vue'
import banner2 from '~components/banner2.vue'

export default {
  components: {
    navbar,
    banner,
    coursemenu,
    banner2
  }
}
</script>

<style>
  #app {
    font-family: 'Kanit', sans-serif;
    text-align: center;
  }
</style>
