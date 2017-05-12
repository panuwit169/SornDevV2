<template>
  <div class="course">
    <div class="container">
      <div class="title">
        <h1><strong>คู่มือเทคโนโลยีล่าสุด<br>Front-End และ Frameworks</strong></h1>
      </div>
        <div class="columns">
          <div class="column is-2" v-for = "(list, index) in listplay" v-show="index<6">
            <div class="box">
              <nuxt-link :to="{ name: 'course-lesson', params: { lesson:list.name }}" style="vertical-align: middle">
                <img :src="list.img" width="120">
              <h4>
                {{list.name}}
              </h4>
              </nuxt-link>
            </div>
          </div>
        </div>
        <nuxt-link to = "/allcourse" class="title">เลือก Course อื่น ๆ</nuxt-link>
    </div>
    <hr>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'listplay',
    data: function data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'listplay'
      ])
    },
    mounted () {
      this.setListplayRef(this.$db.ref('listplay'))
    },
    methods: {
      ...mapActions([
        'setListplayRef'
      ])
    }
  }
</script>


<style scoped>
  .title{
    margin-bottom: 50px;
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

  .course{
    margin-top: 100px;
  }
</style>
