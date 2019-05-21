<template>
    <div>
        <b-form-group
            class="mb-3"
            label="Please write the domain to find all the information related with it"
        >
            <b-row class="justify-content-md-center">
                <b-col>
                    <b-form-input
                        id="input-large"
                        size="lg"
                        placeholder="truora.com"
                        @keyup.enter="searchDomain"
                        v-model="domain"
                    ></b-form-input>
                </b-col>
                <b-col
                    col
                    lg="2"
                >
                    <b-button
                        size="lg"
                        variant="primary"
                        @click="searchDomain"
                    >Search</b-button>
                </b-col>
            </b-row>
        </b-form-group>
    </div>
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

<style scoped>
    b-form-input {
        width: 500px;
    }
</style>
