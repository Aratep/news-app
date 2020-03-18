import axios from "axios";

import {
    BASE_API_URL,
    GETTING_NEWS_STARTED,
    GETING_NEWS_SUCCESS,
    GETTING_NEWS_FAILURE,
} from "../helpers/constants/action-types";

export const getNews = () => {
    return async dispatch => {
        dispatch(gettingNewsStarted());

        try {
            const result = await axios.get(`${BASE_API_URL}/news.json`);
            dispatch(gettingNewsSuccess(result.data.news));
        } catch (error) {
            dispatch(gettingNewsFailure(error))
        }
    };
};

const gettingNewsSuccess = user => ({
    type: GETING_NEWS_SUCCESS,
    payload: user
});

const gettingNewsStarted = () => ({
    type: GETTING_NEWS_STARTED
});

const gettingNewsFailure = error => ({
    type: GETTING_NEWS_FAILURE,
    payload: error
});
