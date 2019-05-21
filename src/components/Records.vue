<template>
    <b-container>
         <b-row class="justify-content-md-center">
                <h1>History</h1>
        </b-row>
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

<style scoped>
</style>
