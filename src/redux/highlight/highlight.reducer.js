import HighlishtActionTypes from './highlight.types';

const INITIAL_STATE = {
    highlights: []
};

const highlighttReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HighlishtActionTypes.FETCH_DATA_HIGHLIGHT:
            state.highlights = action.payload
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default highlighttReducer;