<template>
    <b-container class="bv-example-row">
        <b-row>
            Search
        </b-row>
        <b-row>
            <search-field />
        </b-row>
        <b-row>
            <outcome
                v-bind:information="information"
                v-bind:inProgress="inProgress"
            />
        </b-row>
    </b-container>
</template>

<script>
    import SearchField from "./SearchField.vue";
    import Outcome from "./Outcome.vue";
    import { mapGetters } from "vuex";
    export default {
        name: "search",
        components: {
            SearchField,
            Outcome
        },
        computed: mapGetters({
            information: "getResult",
            inProgress: "isProcessing"
        })
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
