<template>
    <div id="app">
        <DomainConsultant />
    </div>
</template>

<script>
    import DomainConsultant from "./components/DomainConsultant.vue";
    import store from "./vuex/store";

    export default {
        name: "app",
        components: {
            DomainConsultant
        },
        store
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

