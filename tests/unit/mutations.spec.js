import mutations from '../../src/vuex/mutations'
import * as types from '../../src/vuex/mutation_types';

// destructure assign recordsList, result, processingData
const populateRecordsList = mutations[types.POPULATE_RECORDS_LIST];
const getResult = mutations[types.GET_RESULT];
const isProcessing = mutations[types.IS_PROCESSING];

describe('Vuex, mutations:  When is called', () => {
    describe('the mutation POPULATE_RECORDS_LIST', () => {
        it('SHOULD set the recordsList state with the given list', () => {
            let mockList = [{ domain: "text.com" }, { domain: "example.com" }];
            // mock state
            const state = { recordsList: [{ domain: "mock.com" }] };
            // apply mutation
            populateRecordsList(state, mockList)
            // assert result
            expect(state.recordsList).toEqual(mockList)
        })
    })
    describe('the mutation GET_RESULT', () => {
        it('SHOULD set the record state with the given object', () => {
            const state = { result: { domain: "mock.com" } };
            getResult(state, { domain: "example.com" })
            expect(state.result).toEqual({ domain: "example.com" })
        })
    })

    describe('the mutation IS_PROCESSING', () => {
        it('SHOULD set the processingData state with the given boolean', () => {
            const state = { processingData: false };
            isProcessing(state, true);
            expect(state.processingData).toBe(true)
        })
    })
})