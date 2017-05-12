<template>
  <div class="video is-hidden-mobile">
    <div class="container">
      <div class="columns">
        <div class="column is-12 title is-pulled-left" style="margin: -20px 0;">
            <li>
              <img :src="info.img" width="70">
            </li>
            <li>
              <h1 style="color: #555; margin: 20px"><strong>{{info.name}}</strong>&nbsp;<small style="font-size:15px;color:#999">สอนโดย {{ info.teacher }}</small></h1>
            </li>
        </div>
      </div>
      <div class="columns">
        <div class="column is-12" style="margin: -30px 0 -40px 0;">
          <div class="description">
            <p>{{info.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import { mapGetters } from 'vuex'

export default {
  props: ['info'],
  data () {
    return {
      courses: {}
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
  }
}
</script>

<style>
  #app {
    font-family: 'Kanit', sans-serif;
    text-align: center;
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
    background-color: #fff;
    color: #666;
  }

</style>
