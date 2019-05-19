import { GET_RESULT, POPULATE_RECORDS_LIST } from './mutation_types'
import api from '../api'

export default {
  populateRecordsList: ({ commit }) => {
    return api.fetchRecords().then(response => {
      commit(POPULATE_RECORDS_LIST, response.data)
    })
  },
  getResult: (store, domain) => {
    return api.fetchDomainResults(domain).then(response => {
      store.commit(GET_RESULT, response.data)
    })
  }
}