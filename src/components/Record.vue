<template >
    <div class="width-all">
        <b-card
            :title="information.domain"
            :sub-title="information.created_at"
        >
            <b-card-text v-if="information.title">
                <i>Title:</i> {{information.title}}
            </b-card-text>
            <b-card-text v-if="information.ssl_grade">
                <i>Grade:</i> {{information.ssl_grade}}
            </b-card-text>
            <b-card-text v-if="information.previous_ssl_grade">
                <i>Previous Ssl Grade:</i> {{information.previous_ssl_grade}}
            </b-card-text>
            <b-card-text v-if="information.logo">
                <i>Logo:</i> <img :src="information.logo">
            </b-card-text>
            <b-card-text>
                <i>Is Down:</i> <span v-if="information.is_down">Yes</span><span v-else>No</span>
            </b-card-text>
            <b-card-text>
                <i>Servers Changed:</i> <span v-if="information.servers_changed">Yes</span><span v-else>No</span>
            </b-card-text>
            <b-row>
                <b-col
                    v-for="server in information.servers"
                    v-bind:key="server.address"
                >
                    <b-card-text>
                        <b>Address:</b> {{server.address}}
                    </b-card-text>
                    <b-card-text v-if="server.ssl_grade">
                        <i>Grade:</i> {{server.ssl_grade}}
                    </b-card-text>
                    <b-card-text v-if="server.country">
                        <i>Country:</i> {{server.country}}
                    </b-card-text>
                    <b-card-text v-if="server.owner">
                        <i>Owner:</i> {{server.owner}}
                    </b-card-text>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "record",
        props: ["information"]
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.width-all,
div.card {
    width: 100%;
    margin-bottom: 10px;
}
div.card-body {
    width: inherit;
}
</style>
