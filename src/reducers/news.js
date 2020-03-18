import {
    GETTING_NEWS_STARTED,
    GETING_NEWS_SUCCESS,
    GETTING_NEWS_FAILURE
} from "../helpers/constants/action-types";

const initialState = {
    loading: null,
    news: [],
    error: null
};

function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GETTING_NEWS_STARTED:
            return {...state, loading: true};
        case GETING_NEWS_SUCCESS:
            return {...state, loading: false, error: null, news: action.payload};
        case GETTING_NEWS_FAILURE:
            return {...state, loading: false, error: action.payload};

        default:
            return state;
    }
}

export default newsReducer;