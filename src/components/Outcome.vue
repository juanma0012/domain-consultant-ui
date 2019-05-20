<template>
  <b-container class="bv-example-row">
    <b-row v-if="inProgress && information ">
      Wait for it
    </b-row>
    <b-row v-else>
      {{information}}
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "outcome",
  props: ['information', 'inProgress']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
