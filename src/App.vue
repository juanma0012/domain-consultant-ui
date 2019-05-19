<template>
  <div id="app">
    <DomainConsultant/>
  </div>
</template>

<script>
import DomainConsultant from './components/DomainConsultant.vue'

export default {
  name: 'app',
  components: {
    DomainConsultant
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
