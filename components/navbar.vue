<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <nuxt-link to="/" class="nav-item">
          <img src="../assets/learning.png" alt="SornDev">
        </nuxt-link>
        <nuxt-link to="/allcourse" class="nav-item is-tab is-hidden-mobile">Courses</nuxt-link>
        <nuxt-link to="/ebook" class="nav-item is-tab is-hidden-mobile">E-Book</nuxt-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <nuxt-link to="/course" class="nav-item is-tab is-hidden-tablet is-active">Courses</nuxt-link>
        <nuxt-link to="/ebook" class="nav-item is-tab is-hidden-tablet">E-Book</nuxt-link>
        <nuxt-link to="/" class="nav-item is-tab">Login with Facebook</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style>

  .nav {
    background-color: #1b1920;
    height: 75px;
  }

  .nav-item img {
      max-height: 55px;
  }

  .nav-item a.is-tab, a.nav-item.is-tab {
    padding: 20px 30px;
    border: 0px solid #000;
  }

</style>
