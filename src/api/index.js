import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const ConsultingDomainResource = Vue.resource('http://localhost:3333/information{/id}')
const HistoryResource = Vue.resource('http://localhost:3333/history')

export default {
  fetchRecords: () => {
    return HistoryResource.get()
  },
  fetchDomainResults: (domain) => {
    return ConsultingDomainResource.get(domain)
  }
}
