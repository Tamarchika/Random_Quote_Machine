import axios from "axios";
import  actions from "../constants/action-constants";
import url_constants from "../constants/url-constants";

const getQuotesData = () => {
    return async function(dispatch){
     dispatch({type: actions.DATA_FETCHING});
       try {
        const { data } = await axios.get(url_constants.QUOTES)
        dispatch({type: actions.DATA_SUCCESS, payload: data});
       } catch(err) {
           dispatch({
               type: actions.DATA_FETCHING_FAILURE, payload: err.message
           })
       }
    }
    
}

export const selectQuote = (i) => {
    return {
        type: actions.SELECT_QUOTE,
        payload: i
    }
}
export default getQuotesData;