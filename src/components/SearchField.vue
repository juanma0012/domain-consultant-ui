<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col align-h="center">
      <b-col sm="2">
      <label for="input-large">Large:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" placeholder="Enter your name"></b-form-input>
    </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "search-field",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
