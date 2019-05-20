<template>
    <b-container class="bv-example-row">
        <ul id="example-1">
            <li v-for="record in records" v-bind:key="record.created_at">
                {{ record }}
            </li>
        </ul>
    </b-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "records",
        mounted() {
            this.populateRecordsList();
        },
        methods: mapActions(["populateRecordsList"]),
        computed: mapGetters({
            records: "getRecords"
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
