import VueRouter from 'vue-router';
import Search from "./components/Search.vue";
import Records from "./components/Records.vue";

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'search',
            component: Search
        },
        {
            path: '/records',
            name: 'records',
            component: Records
        }
    ]
});
