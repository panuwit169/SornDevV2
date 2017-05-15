<template>
  <div class="course">
    <div class="container">
      <div class="title">
        <h1><strong>E-Bookทั้งหมด<br>ทั้ง Front-End และ Frameworks ต่าง ๆ</strong></h1>
      </div>
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-4-tablet is-4-desktop" v-for = "list in listbook">
          <div class="box">
            <a :href="list.link" target="_blank">
              <div style="vertical-align: middle">
                <img :src="list.img" style="height:200px">
                <h4> {{list.name}} <span class="tag is-Light">{{list.language}}</span></h4>
                <p style="color:#999">โดย {{list.by}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data: function data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'listbook'
      ])
    },
    mounted () {
      this.setListbookRef(this.$db.ref('listbook'))
    },
    methods: {
      ...mapActions([
        'setListbookRef'
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
    padding: 100px 0 50px 0;
    border-bottom: 1px solid #eee;
  }

  .image.is-1by11{
    padding: 70% 0%;
    margin: 10px 0;
  }

.image.is-1by11 img{
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
}
</style>
