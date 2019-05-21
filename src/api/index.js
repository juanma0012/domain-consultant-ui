import Vue from 'vue';
import VueResource from 'vue-resource';
const uuidv4 = require('uuid/v4');

Vue.use(VueResource);
// Setting the user_session_id element as a variable in the local storage
if (!localStorage.getItem("user_session_id")) {
    localStorage.setItem('user_session_id', uuidv4());
}
// Setting in the request header the value for User-Session-Id,  it's the user id stored in local storage
Vue.http.headers.common['User-Session-Id'] = localStorage.getItem("user_session_id");

// Setting endpoint depending if the app is running in production or local environment.
const endpoint =  process.env.NODE_ENV === 'production' ? "http://ec2-3-82-99-106.compute-1.amazonaws.com:3333" : "http://localhost:3333";

// Services to the API
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
