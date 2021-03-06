import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

// Including Flux Architecture in the app
Vue.use(Vuex);

const state = {
    recordsList: [],
    result: null,
    processingData: false
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
