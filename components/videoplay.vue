<template>
  <div class="player">
    <div class="container">
      <div class="columns" style="padding-top:50px">
        <div class="column is-9" style="padding:0px">
          <div style="border:5px solid #555">
            <iframe style="width: 100%;" height="462px" width="100%" :src="'https://www.youtube.com/embed/'+ link + '?autoplay=1'" frameborder="0"></iframe>
          </div>
        </div>
        <div class="column is-3 scrollbar" id="style-1">
          <div v-for="(lists, index) in list" @click = "setlink(lists.link)">
            <a class="list">
              <div class="img">
                <strong style="padding:0 10px;color:#dbdbdb;">{{index+1}}</strong>
                <img class="is-pulled-left" :src="courses.img" width="50px">
                <strong style="text-align:left;padding:0 10px;color:#dbdbdb;">ตอนที่ {{index+1}} {{lists.ep}}</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: ['courses'],
    data () {
      return {
        link: '',
        list: {}
      }
    },
    computed: {
      ...mapGetters([
        'listplay'
      ]),
      courses () {
        let vm = this
        return vm.listplay.find(item => item.name === vm.$route.params.lesson)
      }
    },
    mounted () {
      this.link = this.courses.list[0].link
      this.list = this.courses.list
    },
    methods: {
      setlink (link) {
        this.link = link
      }
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
h4{
  color: #555;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000;
}

.player{
  padding-top: 0px;
  padding-bottom: 50px;
  background-color: #1b1920;
}

.playlist{
  border: 2px solid #555;
  height: 420px;
}

.list{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 10px;
  border-bottom: 5px solid #222;
  margin-right: 1px;
  display: block;
}
.img{
  padding: 0;
  display: flex;
  align-items: center;
}
.list:hover{
  background-color: #777;
  text-decoration: none;
}

.list:active,
.list:focus{
  text-decoration:none;
  border:1px solid #FFFF00;
  background-color: #323232;
}

.course{
  margin-top: 20px;
}

.scrollbar
{
	overflow-y: scroll;
	margin-bottom: 25px;
  background-color:#252525;
  padding:0px;
  border-top:5px solid #555;
  border-bottom:5px solid #555;
  border-right:5px solid #555;
  height:478px;
}

#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #252525;
}

#style-1::-webkit-scrollbar
{
	width: 12px;
	background-color: #252525;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #9a9a9a;
}
</style>
