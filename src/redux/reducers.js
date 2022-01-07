import actions from '../constants/action-constants';

const quotesState = {
    quotes: [],
    selectedQuote: null, 
    loading: false,
    error: null
}

const quotesReducer = (state = quotesState, action) => {
    switch(action.type) {
        case actions.DATA_FETCHING:
            return {
                ...state,
                loading: true,
            };
        case actions.DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                quotes: action.payload,
                error: null,
            }
        case actions.DATA_FETCHING_FAILURE:
            return {
                ...state,
                loading: false,
                quotes: [],
                error: action.payload
            };
        case actions.SELECT_QUOTE:
            return {
                ...state,
                selectedQuote: state.quotes[action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

export default quotesReducer;