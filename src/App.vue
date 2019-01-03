<template>
  <div id="app">
    <component :is="layout">
      <img src="./assets/logo.png">
      <router-view/>
      <notifications group="alert" position="top center" />
    </component>
  </div>
</template>

<script>
const default_layout = "main";
export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
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
</style>
