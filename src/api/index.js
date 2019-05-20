import Vue from 'vue';
import VueResource from 'vue-resource';
const uuidv4 = require('uuid/v4');

Vue.use(VueResource);

if (!sessionStorage.getItem("user_session_id")) {
    sessionStorage.setItem('user_session_id', uuidv4());
}
Vue.http.headers['Access-Control-Allow-Origin'] = "*";
Vue.http.headers.common['User-Session-Id'] = sessionStorage.getItem("user_session_id");

// const endpoint = "http://localhost:3333";
const endpoint = "http://ec2-3-82-99-106.compute-1.amazonaws.com:3333";
const ConsultingDomainResource = Vue.resource(`${endpoint}/information{/domain}`);
const HistoryResource = Vue.resource(`${endpoint}/history`);
export default {
    fetchDomainResults: (domain) => {
        return ConsultingDomainResource.get({ domain: domain });
    },
    fetchRecords: () => {
        return HistoryResource.get();
    }
}
