import { GET_RESULT, POPULATE_RECORDS_LIST, IS_PROCESSING } from './mutation_types';
import api from '../api';

export default {
    populateRecordsList: ({ commit }) => {
        return api.fetchRecords().then(response => {
            commit(POPULATE_RECORDS_LIST, response.data)
        }, () =>{
            commit(POPULATE_RECORDS_LIST, [])
        })
    },
    getResult: (store, domain) => {
        store.commit(IS_PROCESSING, true);
        return api.fetchDomainResults(domain).then(response => {
            store.commit(IS_PROCESSING, false);
            store.commit(GET_RESULT, response.data)
        }, () =>{
            store.commit(IS_PROCESSING, false)
            store.commit(GET_RESULT, null)
        })
    }
};
