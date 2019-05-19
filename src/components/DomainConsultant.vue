<template>
    <b-container class="bv-example-row">
        <b-row>
            <router-link to="/">Go to Search</router-link>
            <router-link to="/records">Go to Records</router-link>
        </b-row>
        <b-row>
            <router-view></router-view>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "domain-consultant",
        components: {
        }
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
