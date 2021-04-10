<template>
  <section class="hero bg is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-3">
            <SideBar />
          </div>
          <div class="column">
            <vue-page-transition name="fade-in-right">
              <router-view></router-view>
            </vue-page-transition>
          </div>
          <div class="column is-1"></div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="content has-text-centered">
        <p class="is-size-5">
          Made with <span class='has-text-danger'>❤</span> using <a href="https://vuejs.org/" target="_blank">Vue.js</a> and <a href="https://buefy.org/" target="_blank">Buefy</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

.bg {
  background-color: #1d1d1d;
}

.photo {
  max-height: 180px;
  max-width: 180px;
  justify-content: center;
}

.hero-body {
  margin-top: 10vh;
}

div {
  font-family: "VT323", monospace;
  color: white !important;
}

.icon {
  left: -2.2%;
  position: relative;
  margin-right: 5px;
}
</style>
