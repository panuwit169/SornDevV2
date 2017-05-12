<template>
  <div class="popular is-hidden-mobile">
    <div class="popular_inner">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-5 headpop">
            <div class="headtitle">
              <h1>Course ยอดนิยม</h1>
              <nuxt-link to = "/allcourse" class="link">เลือก Course อื่น ๆ</nuxt-link>
            </div>
          </div>
          <div class="box column is-5 list" v-for = "(list, index) in listplay" v-if="index<3">
            <div class="columns">
              <div class="column is-4">
                <img class="img" :src="list.img" width="120">
              </div>
              <div class="column is-8 title">
                <nuxt-link :to="{ name: 'course-lesson', params: { lesson:list.name }}">
                  เริ่มต้นศึกษา {{list.name}}
                </nuxt-link>
                <hr>
                <p style="display:inline-block">กับ {{list.teacher}}</p>
                <nuxt-link :to="{ name: 'course-lesson', params: { lesson:list.name }}">
                  <img class="is-pulled-right"src="../assets/play.png" width="50px">
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
a{
  color: #393f47;
  text-decoration: none;
}
a:hover{
  color: #555;
}

a.link{
  color: #47b8f0;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  font-size: 20px;
  letter-spacing: 0.62px;
}

a.link:hover{
  color: #428bca;
}

p{
  font-size: 16px;
  color: #8d9aa8;
}

.headpop{
  margin: 10px 10px;
}

.headtitle{
  padding: 25px 0px 0 50px;
  font-weight: 700;
  font-size: 44px;
  color: #515057;
  letter-spacing: 0.62px;
}
.title{
  padding: 20px;
  font-weight: 300;
  font-size: 24px;
  color: #393f47;
  letter-spacing: 0.37px;
  margin: 0;
  border-left:1px solid #eee
}

.popular{
  background: #f7fafc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.popular_inner{
  margin: -35px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1190px;
  padding: 0 10px;
}

.box{
  border: 1px solid #eee;
  background-color: #fff;
  margin: 0 48px;

}

.img {
    padding: 20px 0;
}

.list{
  margin: 10px 10px;
}
</style>
