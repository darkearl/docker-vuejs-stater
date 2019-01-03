<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li @click="showNotifError('errors')">notification</li>
      <li>
        <div @click="confirmModal=true">Show modal</div>
        <Modal v-if="confirmModal" @cancel="confirmModal=false" @confirm="console.log('confirm')" :loading="isLoading"></Modal>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      confirmModal: false,
      isLoading:false,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>
