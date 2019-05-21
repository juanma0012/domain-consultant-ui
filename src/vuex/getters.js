// Return the parameter of the state
export default {
    getRecords: state => state.recordsList,
    getResult: state => state.result,
    isProcessing: state => state.processingData
};
