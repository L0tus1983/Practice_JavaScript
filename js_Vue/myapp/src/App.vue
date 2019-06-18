<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>こにゃにゃちわ！</p>
    <!-- <b-table hover :items="items">
    </b-table> -->
    <b-button size="lg" variant="outline-primary">Bootstrap Button</b-button>
  </div>
</template>

<script>
export default {
  name: 'App'

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
