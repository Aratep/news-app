import {GET_CURRENT_NEWS} from "../helpers/constants/action-types";

const initialState = {
    currentNews: {}
};

function currentNewsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_NEWS:
            return {...state, currentNews: action.payload};
        default:
            return state;
    }
}

export default currentNewsReducer