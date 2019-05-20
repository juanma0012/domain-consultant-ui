<template>
    <b-container>
        <record
            v-for="record in records"
            v-bind:key="record.created_at"
            v-bind:information="record"
        />
    </b-container>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import Record from "./Record.vue";
    export default {
        name: "records",
        mounted() {
            this.populateRecordsList();
        },
        methods: mapActions(["populateRecordsList"]),
        computed: mapGetters({
            records: "getRecords"
        }),
        components: {
            Record
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
