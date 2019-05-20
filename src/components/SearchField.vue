<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-form-input
                id="input-large"
                size="lg"
                placeholder="Enter your name"
                @keyup.enter="searchDomain"
                v-model="domain"
            ></b-form-input>
            <b-button
                variant="primary"
                @click="searchDomain"
            >Search</b-button>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "search-field",
        data() {
            return {
                domain: ""
            };
        },
        methods: {
            searchDomain() {
                let text;
                text = this.domain.trim();
                if (text) {
                    this.$store.dispatch("getResult", text);
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
