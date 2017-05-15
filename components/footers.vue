<template>
  <div class="footer" id="radial-center">
    <div class="container is-hidden-mobile">
      <div class="columns">
        <div class="column is-6">
          <div class="link">
            <li><nuxt-link to = "/">Home</nuxt-link></li>
            <li><nuxt-link to = "/allcourse">Course</nuxt-link></li>
            <li><nuxt-link to = "/ebook">E-Book</nuxt-link></li>
          </div>
          <div class="link">
            <li><nuxt-link to = "/">© SornDev</nuxt-link></li>
          </div>
        </div>
        <div class="column is-6">
          <div class="linklogo">
            <nuxt-link to = "/" class="logo"><img src="../assets/learning.png" width="90px"><br>SornDev</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background-color: #1b1920;
  color: #666;
  text-align: left;
  padding: 50px 0 0px 0;
}

.link{
    padding: 30px 0 10px 0;
}

li{
  display: block;
  padding: 5px 0;
}

a{
  text-decoration: none;
  color: #666;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  font-size: 16px;
}

a:hover{
  color: #999;
}

a.logo{
  text-decoration: none;
  color: #666;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  font-size: 20px;
  font-weight: bold;
}

#radial-center {
  background: -webkit-radial-gradient(#23222b, #1b1920, #1b1920); /* For Safari 5.1 to 6.0 */
    background: -o-radial-gradient(#23222b, #1b1920, #1b1920); /* For Opera 11.6 to 12.0 */
    background: -moz-radial-gradient(#23222b, #1b1920, #1b1920); /* For Fx 3.6 to 15 */
    background: radial-gradient(#23222b, #1b1920, #1b1920); /* Standard syntax (must be last) */
}

.linklogo{
  padding: 60px 0;
  text-align: right;
}


</style>
