<template>
    <b-container>
        <div v-if="inProgress">
            <div class="d-flex justify-content-center mb-3">
                <b-spinner
                    style="width: 3rem; height: 3rem;"
                    label="Large Spinner"
                ></b-spinner>
            </div>
            <div>
                <b-alert show variant="warning">This action will take several minutes, please wait for it.</b-alert>
            </div>
        </div>
        <b-row
            v-if="!inProgress && information"
            class="d-flex justify-content-center"
        >
            <record v-bind:information="information" />
        </b-row>
    </b-container>
</template>

<script>
    import Record from "./Record.vue";
    export default {
        name: "outcome",
        props: ["information", "inProgress"],
        components: {
            Record
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
