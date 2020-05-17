import HighlishtActionTypes from './highlight.types';
import callApi from '../utils/apiCaller';

export const actFetchHighlightsRequest = () => {
    return (dispatch) => {
        return callApi('http://localhost:4000/getdatahighlight', 'GET', null).then(res => {
            dispatch(actFetchHighlights(res.data))
        })
    }
}

export const actFetchHighlights = highlights => {
    return {
        type: HighlishtActionTypes.FETCH_DATA_HIGHLIGHT,
        payload: highlights
    }
};