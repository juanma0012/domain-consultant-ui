<template>
    <b-container fluid >
        <b-row class="justify-content-md-center">
                <h1>Consultant Domain</h1>
        </b-row>
        <b-row class="justify-content-md-center">
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

<style scoped>
    h1 {
        margin-bottom: 20px;
    }
</style>
