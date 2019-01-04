
<template>
  <div id="app">
    <transition name="fadeInSlow">
      <component :is="layout">
        <img src="./assets/logo.png">
        <router-view/>
        <notifications group="alert" position="top center" />
      </component>
    </transition>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

const default_layout = "main";
export default {
  name: 'App',
  computed: {
    layout() {
      var mobile = this.$store.state.mobile && "mobile" || "pc";
      return mobile + "-"+ (this.$route.meta.layout || default_layout) + '-layout';
    }
  },
  methods: {
    getPageDimensions () {
      const width = document.documentElement.clientWidth
      const height = document.documentElement.clientHeight
      this.$store.dispatch('setAppDimensions', { width, height })
    }
  },
  created () {
    this.getPageDimensions()
    window.addEventListener('resize', debounce(this.getPageDimensions, 1000))
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fadeInSlow-enter-active,
.fadeInSlow-leave-active {
  opacity: 1;
  transform: translate(0, 0);
  transition: opacity 600ms ease-out, transform 500ms ease-out;
}
.fadeInSlow-enter,
.fadeInSlow-leave-to {
  opacity: 0;
  transform: translate(0, 10px);
}
</style>
