import {GET_CURRENT_NEWS} from "../helpers/constants/action-types";

export const getCurrentNews = (id, news) => {
    const currentNews = news.filter(n => n.id === id);

    return dispatch => {
        dispatch({
            type: GET_CURRENT_NEWS,
            payload: currentNews[0]
        })
    }
};
