<template>
    <b-container class="bv-example-row">
        <b-row>
            Records
        </b-row>
        <b-row>
            1 Records
        </b-row>
        <b-row>
            2 Records
        </b-row>
    </b-container>
</template>

<script>
    import api from "../api/index";
    export default {
        name: "records",
        props: {
            msg: String
        },
        methods: {
            getRecords() {
                api.fetchRecords().then(response => {
                    console.log(response.data);
                });
            }
        },
        mounted() {
            this.getRecords();
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
