import * as types from './mutation_types'

export default {
    [types.POPULATE_RECORDS_LIST](state, records) {
        state.recordsList = records
    },
    [types.GET_RESULT](state, result) {
        state.result = result
    },
    [types.IS_PROCESSING](state, processingData) {
        state.processingData = processingData
    }
}
