<template>
    <b-container>
        <b-row>
            <div>
                <b-navbar>
                    <b-navbar-nav>
                        <b-nav-item>
                            <b-button
                                variant="outline-info"
                                :to="{ path: '/'}"
                            >Searhing</b-button>
                        </b-nav-item>
                        <b-nav-item>
                            <b-button
                                variant="outline-secondary"
                                :to="{ path: '/records'}"
                            >History</b-button>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-navbar>
            </div>
        </b-row>
        <b-row>
            <b-card>
                <router-view></router-view>
            </b-card>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "domain-consultant",
        components: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.card{
        width: 100%;
        background-color: #f5f3f3;
    }
    div.card-body{
        width: inherit;
    }
</style>
