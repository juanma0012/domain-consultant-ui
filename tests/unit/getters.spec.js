import getters from '../../src/vuex/getters'

describe('Vuex, getters:  When is called', () => {
    describe('the getter getRecords', () => {
        it('SHOULD get the recordsList state ', () => {
            let mockList = [{ domain: "text.com" }, { domain: "example.com" }];
            // mock state
            const state = { recordsList: mockList };
            // apply getter
            const outcome = getters.getRecords(state)
            // assert result
            expect(outcome).toEqual(mockList)
        })
    })
    describe('the getter GET_RESULT', () => {
        it('SHOULD get the record state', () => {
            let mockObject = { domain: "mock.com" }
            const state = { result: mockObject };
            const outcome= getters.getResult(state)
            expect(outcome).toEqual(mockObject)
        })
    })

    describe('the getter isProcessing', () => {
        it('SHOULD get the processingData state', () => {
            const state = { processingData: true };
            const outcome = getters.isProcessing(state);
            expect(outcome).toBe(true)
        })
    })
})